import { useState, useRef, useEffect, useContext } from 'react';
import propTypes from 'prop-types';
import classNames from 'classnames/bind';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

import { FlagIcon, MuteIcon, PauseIcon, PlaySolidIcon, VolumeIcon } from '../Icons';
import styles from './Video.module.scss';
import { VideoContext } from '~/pages/Home/Home';
import { VideoModalContextKey } from '~/contexts/VideoModalContext';
import { ModalContextKey } from '~/contexts/modalContext';
import SvgIcon from '../Icons/SvgIcon/SvgIcon';
import { TiktokLoading } from '../Loadings';
import { changeVolume, toggleMuted, changeMuted } from '~/redux/slices/videoSlice';
import { useLocalStorage } from '~/hooks';

const cx = classNames.bind(styles);

function Video({ videoId, data }) {
    // hook
    const dispatch = useDispatch();

    const { setDataStorage } = useLocalStorage();

    //volume
    const volumeBarRef = useRef();
    const volumeDotRef = useRef();
    const { volume, muted } = useSelector((state) => state.video);
    const videoRef = useRef();
    //video
    const [isPlaying, setIsPlaying] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [userInteracting, setUserInteracting] = useState(false);
    const context = useContext(VideoContext);
    const contextModal = useContext(ModalContextKey);
    const { videoModalState, propsVideoModal, setPropsVideoModal } = useContext(VideoModalContextKey);
    const [, videoModalShow] = videoModalState;

    //handler volume

    useEffect(() => {
        videoRef.current.muted = muted;
    }, [muted]);

    useEffect(() => {
        const data = {
            volume: volume,
        };
        setDataStorage(data);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [volume]);

    //handler toggle volume when it has volume or muted
    useEffect(() => {
        const valueValid = valueValidate(volume, 0, 100);
        if (muted) {
            volumeBarRef.current.style.width = '0%';
            volumeDotRef.current.style.transform = 'translate(100%, -50%)';
        } else {
            let percent = valueValid * 100;
            volumeBarRef.current.style.width = percent + '%';
            volumeDotRef.current.style.transform = `translate(${100 - percent}%, -50%)`;
        }
    }, [muted, volume]);

    const valueValidate = (value, min, max) => {
        let valueValid = value;

        if (valueValid < min) {
            valueValid = 0;
        } else if (valueValid > max) {
            valueValid = max;
        }
        return valueValid;
    };

    const handleSetStateVolume = (e) => {
        const value = +e.target.value;
        const valueValid = valueValidate(value, 0, 100);
        const action = changeVolume(valueValid / 100);
        dispatch(action);
    };

    const handleChangVolume = (e) => {
        //dung +e.target.targetvalue để khi value về 0 sẽ tự động set muted = true
        // nếu chỉ để e.target.value thì về 0 nó sẽ không set muted = true;
        const value = +e.target.value;
        const volumeValid = valueValidate(value, 0, 100);

        videoRef.current.volume = volumeValid / 100;

        //update ui volume
        volumeBarRef.current.style.width = volumeValid + '%';
        volumeDotRef.current.style.transform = `translate(${100 - volumeValid}%, -50%)`;

        //update icon ui when muted/!muted

        volumeValid === 0 && !muted && dispatch(changeMuted(true));
        volumeValid > 0 && muted && dispatch(changeMuted(false));
    };

    const handleToggleVolume = () => {
        dispatch(toggleMuted());
    };

    // handler video
    // tạo const sử lý error Uncaught (in promise) DOMException: The play() request was interrupted by a call to pause().
    const playPromise = () => videoRef.current.play();

    const play = () => {
        if (isPlaying === false) {
            playPromise();
            setIsPlaying(true);
        }
    };

    const pause = () => {
        if (isPlaying === true) {
            // xử lí bất đồng bộ lúc pause
            if (playPromise !== undefined) {
                playPromise().then(() => {
                    videoRef.current.pause();
                });
            }
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

    const handleOpenVideoModal = () => {
        const newProps = {
            index: videoId,
            data: data,
        };
        setPropsVideoModal({ ...propsVideoModal, ...newProps });
        handleResetVideo();
        videoModalShow();
    };

    useEffect(() => {
        window.addEventListener('scroll', playVideoinViewport);
        return () => {
            window.removeEventListener('scroll', playVideoinViewport);
        };
    }, [isPlaying]);

    const handleResetVideo = () => {
        videoRef.current.load();
        setIsPlaying(false);
    };

    return (
        <div className={cx('video-card')}>
            {isLoading && isPlaying && <SvgIcon className={cx('video-loading')} icon={<TiktokLoading medium />} />}
            <video
                // className={cx('video-ui', { hidden: hidden === true })}
                className={cx('video-ui')}
                style={
                    data.meta.video.resolution_x < data.meta.video.resolution_y
                        ? { width: '273px' }
                        : { width: '463px' }
                }
                ref={videoRef}
                loop
                onWaiting={() => setIsLoading(true)}
                onPlaying={() => setIsLoading(false)}
                onClick={handleOpenVideoModal}
            >
                <source src={data.file_url}></source>
            </video>
            <div className={cx('control-play')} onClick={togglePlayVideo}>
                {isPlaying ? (
                    <div className={cx('pause-icon')}>{<PauseIcon />}</div>
                ) : (
                    <div className={cx('play-icon')}>{<PlaySolidIcon />}</div>
                )}
            </div>

            <div className={cx('volume-container')}>
                <div className={cx('volume-control', { active: context.mute })}>
                    <div className={cx('volume-background', { active: context.mute })}>
                        <div className={cx('volume-bar')} ref={volumeBarRef}>
                            <div className={cx('volume-dot')} ref={volumeDotRef}></div>
                        </div>
                    </div>
                    <input
                        className={cx('volume-range')}
                        type="range"
                        min="0"
                        max="100"
                        step="1"
                        onChange={handleChangVolume}
                        onMouseUp={handleSetStateVolume}
                    ></input>
                </div>

                <div className={cx('icon', { mute: muted })} onClick={handleToggleVolume}>
                    {muted ? (
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
