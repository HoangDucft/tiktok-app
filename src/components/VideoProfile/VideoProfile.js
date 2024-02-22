import classNames from 'classnames/bind';
import propTypes from 'prop-types';
import { useContext, useRef } from 'react';
import { Link } from 'react-router-dom';

import { PlayIcon } from '../Icons';
import styles from './VideoProfile.module.scss';
import { VideoModalContextKey } from '~/contexts/VideoModalContext';
import Button from '../Button/Button';
import Image from '../Image/Image';
import { ModalContextKey } from '~/contexts/modalContext';

const cx = classNames.bind(styles);
function VideoPreview({ data, videoId, shrink, shortly, followingType }) {
    const videoRef = useRef();
    const context = useContext(ModalContextKey);
    const { videoModalState, propsVideoModal, setPropsVideoModal } = useContext(VideoModalContextKey);
    const [, videoModalShow] = videoModalState;

    const handleOpenVideoModal = () => {
        const newProps = {
            index: videoId,
            data: data,
        };
        setPropsVideoModal({ ...propsVideoModal, ...newProps });
        videoModalShow();
    };

    return (
        <div>
            {followingType ? (
                <div className={cx('wrapper', { shortly: shortly })}>
                    <div className={cx('inner', { shrink: shrink })}>
                        <div className={cx('video-container')} onMouseEnter={() => videoRef.current.play()}>
                            <div className={cx('video-inner')}>
                                <Link to={`/@${data.user.nickname}`}>
                                    <div className={cx('image')}>
                                        <img src={data.thumb_url} alt="" />
                                    </div>
                                    <div className={cx('video')}>
                                        <video muted loop ref={videoRef} src={data.file_url} />
                                    </div>
                                </Link>

                                <div className={cx('short-info')}>
                                    <Link to={`/@${data.user.nickname}`}>
                                        <div className={cx('info-group')}>
                                            <Image src={data?.user?.avatar} className={cx('avatar-info')} />
                                            <div className={cx('fullname-info')}>
                                                <strong>
                                                    {data?.user.firts_name} {data?.user.last_name}
                                                </strong>
                                            </div>
                                            <div className={cx('user-info')}>{data?.user.nickname}</div>
                                        </div>
                                    </Link>
                                    <Button primary className={cx('follow-btn')} onClick={context.handleShowModalForm}>
                                        Follow
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className={cx('wrapper')}>
                    <div className={cx('inner')}>
                        <div className={cx('video-container')} onMouseEnter={() => videoRef.current.play()}>
                            <div className={cx('video-inner')} onClick={handleOpenVideoModal}>
                                <div className={cx('image')}>
                                    <img src={data.thumb_url} alt="" />
                                </div>
                                <div className={cx('video')}>
                                    <video muted loop ref={videoRef} src={data.file_url} />
                                </div>
                                <div className={cx('views')}>
                                    <PlayIcon />
                                    <strong className={cx('count')}>{data.views_count}</strong>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={cx('tag')}>{data.description}</div>
                </div>
            )}
        </div>
    );
}

VideoPreview.propTypes = {
    data: propTypes.object.isRequired,
};

export default VideoPreview;
