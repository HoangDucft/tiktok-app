import classNames from 'classnames/bind';
import propTypes from 'prop-types';
import { useContext, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

import { PlayIcon } from '../Icons';
import styles from './VideoProfile.module.scss';
import { VideoModalContextKey } from '~/contexts/VideoModalContext';

const cx = classNames.bind(styles);
function VideoPreview({ data, videoId }) {
    const videoRef = useRef();
    // const { setPropsVideoModal } = useContext(VideoModalContextKey);

    // useEffect(() => {
    //     const propsVideoModal = {
    //         index: videoId,
    //         data: data,
    //     };
    //     setPropsVideoModal(propsVideoModal);
    // }, []);
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('video-container')} onMouseEnter={() => videoRef.current.play()}>
                    <div className={cx('video-inner')}>
                        <div className={cx('image')}>
                            <img src={data.thumb_url} alt="" />
                        </div>
                        <Link to={`video/${data.id}`}>
                            <div className={cx('video')}>
                                <video muted loop ref={videoRef} src={data.file_url} />
                            </div>
                        </Link>
                        <div className={cx('views')}>
                            <PlayIcon />
                            <strong className={cx('count')}>{data.views_count}</strong>
                        </div>
                    </div>
                </div>
            </div>
            <div className={cx('tag')}>{data.description}</div>
        </div>
    );
}

VideoPreview.propTypes = {
    data: propTypes.object.isRequired,
};

export default VideoPreview;
