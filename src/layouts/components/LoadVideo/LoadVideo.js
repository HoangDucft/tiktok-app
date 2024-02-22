import propTypes from 'prop-types';
import classNames from 'classnames/bind';
import { useRef, useState } from 'react';

import styles from './LoadVideo.module.scss';
import AccountItem from './AccountItem';
import ContextVideo from '~/contexts/contextVideo';

const cx = classNames.bind(styles);
function LoadVideo({ data }) {
    const [priorityVideo, setPriorityVideo] = useState(-1);

    const videoArrayRef = useRef([]);

    const contextValue = {
        priorityVideoState: [priorityVideo, setPriorityVideo],
        videoArray: videoArrayRef.current,
    };

    return (
        <ContextVideo value={contextValue}>
            <div className={cx('container')}>
                {data?.map((account, index) => (
                    <AccountItem key={index} videoId={index} data={account} videoArray={videoArrayRef} />
                ))}
            </div>
        </ContextVideo>
    );
}
LoadVideo.propTypes = {
    data: propTypes.array.isRequired,
};
export default LoadVideo;
