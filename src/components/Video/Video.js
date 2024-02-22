import { useState, useRef, useEffect, useContext } from 'react';
import propTypes from 'prop-types';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import { FlagIcon, MuteIcon, PauseIcon, PlaySolidIcon, VolumeIcon } from '../Icons';
import styles from './Video.module.scss';
import { VideoContext } from '~/pages/Home/Home';
// import { VideoModalContextKey } from '~/contexts/VideoModalContext';
import { ModalContextKey } from '~/contexts/modalContext';
const cx = classNames.bind(styles);

function Video({ videoId, data }) {
    const videoRef = useRef();
    const [isPlaying, setIsPlaying] = useState(false);
    const context = useContext(VideoContext);
    const contextModal = useContext(ModalContextKey);
    // const { setPropsVideoModal } = useContext(VideoModalContextKey);

    useEffect(() => {
        if (context.mute) {
            videoRef.current.volume = 0;
        } else {
            // vì volume của video chỉ nhận giá trị là 0~1
            videoRef.current.volume = context.volume;
        }
    });

    const play = () => {
        if (isPlaying === false) {
            videoRef.current.play();
            setIsPlaying(true);
        }
    };

    const pause = () => {
        if (isPlaying === true) {
            videoRef.current.pause();
            setIsPlaying(false);
        }
    };

    const togglePlayVideo = () => {
        if (isPlaying === false) {
            play();
        } else {
            if (isPlaying === true) {
                pause();
            }
        }
    };

    function playVideoinViewport() {
        const bounding = videoRef.current.getBoundingClientRect();
        if (
            bounding.top >= 0 &&
            bounding.left >= 0 &&
            bounding.right <= (window.innerWidth || document.documentElement.clientWidth) &&
            bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight)
        ) {
            play();
        } else {
            pause();
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', playVideoinViewport);
        return () => {
            window.removeEventListener('scroll', playVideoinViewport);
        };
    });

    // useEffect(() => {
    //     const propsVideoModal = {
    //         index: videoId,
    //         data: data,
    //     };
    //     setPropsVideoModal(propsVideoModal);
    // }, []);

    return (
        <div className={cx('video-card')} onClick={togglePlayVideo}>
            <Link to={`@${data.user.nickname}/video/${data.id}`}>
                <video
                    className={cx('video-ui')}
                    style={
                        data.meta.video.resolution_x < data.meta.video.resolution_y
                            ? { width: '273px' }
                            : { width: '463px' }
                    }
                    ref={videoRef}
                    loop
                >
                    <source src={data.file_url} type="video/mp4"></source>
                </video>
            </Link>
            <div className={cx('control-play')} onClick={togglePlayVideo}>
                {isPlaying ? (
                    <div className={cx('pause-icon')}>{<PauseIcon />}</div>
                ) : (
                    <div className={cx('play-icon')}>{<PlaySolidIcon />}</div>
                )}
            </div>
            <div className={cx('control-volume', { active: context.mute })}>
                <div className={cx('range-volume', { active: context.mute })}>
                    <input
                        type="range"
                        min="0"
                        max="100"
                        step="1"
                        orient="vertical"
                        value={context.volume * 100}
                        onChange={context.handleChangeVolume}
                    ></input>
                </div>
                <div className={cx('icon')} onClick={context.toggleMuted}>
                    {context.mute ? (
                        <span className={cx('mute-icon')}>{<MuteIcon />}</span>
                    ) : (
                        <span className={cx('volume-icon')}>{<VolumeIcon />}</span>
                    )}
                </div>
            </div>
            <div className={cx('report')} onClick={contextModal.handleShowModalReport}>
                {<FlagIcon />}
                <span className={cx('report-title')}>Report</span>
            </div>
        </div>
    );
}

Video.propTypes = {
    data: propTypes.object.isRequired,
};

export default Video;
