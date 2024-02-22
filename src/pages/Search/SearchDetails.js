import className from 'classnames/bind';
import { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';

import styles from './SearchDetails.module.scss';
import { ChevronDownIcon, IconErrorSearch } from '~/components/Icons';
import { searchService } from '~/services';
import SearchItem from './SearchItem/SearchItem';
import NotFound from '~/components/NotFound/NotFound';
import AccountLoading from '~/components/Loadings/AccountLoading/AccountLoading';
import { TiktokLoading } from '~/components/Loadings';

const cx = className.bind(styles);
function SearchDetails() {
    const [tab, setTab] = useState('account-tab');
    const [result, setResult] = useState([]);
    const [page, setPage] = useState(1);
    const [isFull, setIsFull] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    const [searchParams] = useSearchParams();
    const searchKey = searchParams.get('q');

    const handleLoadMore = () => {
        setPage(page + 1);
    };

    useEffect(() => {
        result.length > 0 && setResult([]);
        setIsFull(false);
        setResult([]);
    }, [searchKey]);

    useEffect(() => {
        const fetchApi = async () => {
            setIsLoading(true);
            const dataResponse = await searchService.search(searchKey, 'more', page);
            if (dataResponse.length === 0) {
                setIsFull(true);
            }
            setResult((prev) => prev.concat(dataResponse));
            setIsLoading(false);
        };
        fetchApi();
    }, [searchKey, page]);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('search-tab')}>
                <div className={cx('tab-list')}>
                    <div
                        className={cx('tab-item', 'tab-1', { active: tab === 'top-tab' })}
                        onClick={() => {
                            setTab('top-tab');
                        }}
                    >
                        Top
                    </div>
                    <div
                        className={cx('tab-item', 'tab-2', { active: tab === 'account-tab' })}
                        onClick={() => {
                            setTab('account-tab');
                        }}
                    >
                        Account
                    </div>
                    <div
                        className={cx('tab-item', 'tab-3', { active: tab === 'video-tab' })}
                        onClick={() => {
                            setTab('video-tab');
                        }}
                    >
                        Video
                    </div>
                    <div className={cx('tab-line')}></div>
                </div>
            </div>

            {isLoading && result.length === 0 ? (
                <AccountLoading />
            ) : (
                <div>
                    {tab === 'account-tab' && (
                        <div className={cx('search-result')}>
                            <div className={cx('result-list')}>
                                {result?.map((item, index) => (
                                    <Link key={index} to={`/@${item.nickname}`}>
                                        <SearchItem data={item} />
                                    </Link>
                                ))}
                            </div>

                            {isFull === false && (
                                <>
                                    {isLoading ? (
                                        <TiktokLoading small marginLeft />
                                    ) : (
                                        <div className={cx('result-more')} onClick={handleLoadMore}>
                                            Load more
                                            <ChevronDownIcon className={cx('z-icon')} />
                                        </div>
                                    )}
                                </>
                            )}
                        </div>
                    )}
                </div>
            )}

            {!isLoading && result.length === 0 && (
                <NotFound
                    icon={<IconErrorSearch width="7.2rem" height="7.2rem" />}
                    message={`No results found for "${searchKey}"`}
                    title="Check spelling or try another search."
                />
            )}

            {tab === 'top-tab' && <h1 style={{ marginTop: `200px` }}>Comming soon</h1>}
            {tab === 'video-tab' && <h1 style={{ marginTop: `200px` }}>Comming soon</h1>}
        </div>
    );
}

export default SearchDetails;
