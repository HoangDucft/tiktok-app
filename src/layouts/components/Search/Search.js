import TippyHeadless from '@tippyjs/react/headless';
import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { useDebounce } from '~/hooks';
import { Link, useNavigate } from 'react-router-dom';

import { Wrapper as PopperWrapper } from '~/components/Wrapper';
import AccountItem from '~/components/AccountItem';
import { SearchIcon } from '~/components/Icons';
import styles from './Search.module.scss';
import * as searchService from '~/services/searchService';
import config from '~/config';
import configs from '~/config';

const cx = classNames.bind(styles);
function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(true);
    const [loading, setLoading] = useState(false);

    const inputRef = useRef();
    const formRef = useRef();
    const navigate = useNavigate();
    const debouncedValue = useDebounce(searchValue, 600);
    const handleClear = () => {
        setSearchValue('');
        setSearchResult([]);
        inputRef.current.focus();
    };
    const handleInputChange = (e) => {
        const searchValue = e.target.value;
        if (!searchValue.startsWith(' ')) {
            setSearchValue(searchValue);
        }
    };

    const handleOnMouseDown = (e) => {
        e.preventDefault();
    };

    const handleHideResult = () => {
        setShowResult(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!!searchResult) {
            navigate(`${configs.routes.search}?q=${searchValue}`);
            setShowResult(false);
        }
    };

    useEffect(() => {
        if (!debouncedValue.trim()) {
            setSearchResult([]);
            return;
        }

        const fetchApi = async () => {
            setLoading(true);

            // khúc này nhận được các account trả về và set nó vào setSearchResult
            const result = await searchService.search(debouncedValue, 'less', 1);
            setSearchResult(result);

            setLoading(false);
        };
        fetchApi();
    }, [debouncedValue]);

    return (
        // thẻ div bọc bên ngoài là để fix lỗi của tippy
        //validation.ts:57 tippy.jsInteractive tippy element may not be accessible via keyboard navigation
        // because it is not directly after the reference element in the DOM source order. Using a wrapper <div> or <span>
        //tag around the reference element solves this by creating a new parentNode context.
        //Specifying `appendTo: document.body` silences this warning,
        //but it assumes you are using a focus management solution to handle keyboard navigation.
        <div>
            <TippyHeadless
                interactive
                visible={showResult && searchResult.length > 0}
                onClickOutside={handleHideResult}
                render={(attrs) => (
                    <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                        {/** đây là render các account */}
                        <PopperWrapper>
                            <h3 className={cx('search-title')}>Accounts</h3>
                            {searchResult?.map((result) => (
                                <AccountItem key={result.id} data={result} />
                            ))}
                            <Link to={`${config.routes.search}?q=${searchValue}`}>
                                <div className={cx('search-more')}>See all the results for "{searchValue}"</div>
                            </Link>
                        </PopperWrapper>
                    </div>
                )}
            >
                {/** đây là ô search */}
                <form ref={formRef} onSubmit={handleSubmit}>
                    <div className={cx('search')}>
                        <input
                            ref={inputRef}
                            value={searchValue}
                            placeholder="Search accounts and videos "
                            spellCheck={false}
                            onChange={handleInputChange}
                            onFocus={() => {
                                setShowResult(true);
                            }}
                        ></input>
                        {searchValue && !loading && (
                            <button className={cx('clear')} onClick={handleClear}>
                                <FontAwesomeIcon icon={faCircleXmark} />
                            </button>
                        )}
                        {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}
                        <button className={cx('search-btn')} onMouseDown={handleOnMouseDown}>
                            <SearchIcon />
                        </button>
                    </div>
                </form>
            </TippyHeadless>
        </div>
    );
}

export default Search;
