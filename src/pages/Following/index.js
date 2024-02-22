import classNames from 'classnames/bind';
import styles from './Following.module.scss';
import { useEffect, useState } from 'react';

import VideoPreview from '~/components/VideoProfile/VideoProfile';
import Button from '~/components/Button/Button';
import * as getVideoListService from '~/services/getVideoListService';
import { useLocation } from 'react-router-dom';

const cx = classNames.bind(styles);

function Following() {
    const [suggestList, setSuggestList] = useState([]);
    const [followingType, setFollowingType] = useState(false);

    const location = useLocation();
    useEffect(() => {
        if (location.pathname === '/following') {
            setFollowingType('following');
        }
    }, [location.pathname]);

    useEffect(() => {
        const fetchApi = async () => {
            const result = await getVideoListService.getVideo('for-you', 1);
            setSuggestList(result);
        };
        fetchApi();
    }, []);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('suggest-item')}>
                <div className={cx('content-wrap')}>
                    {suggestList?.map((suggestItem, index) => (
                        <VideoPreview followingType={followingType} shrink shortly key={index} data={suggestItem} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Following;
