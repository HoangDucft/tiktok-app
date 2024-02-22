import className from 'classnames/bind';
import { useState, useEffect, useRef, useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import styles from './VideoPlayer.module.scss';
import Image from '~/components/Image';
import { ModalContextKey } from '~/contexts/modalContext';
import { useLocalStorage } from '~/hooks';
import {
    BottomArrow,
    FlagIcon,
    MuteIcon,
    PlaySolidIcon,
    TiktokIcon,
    TopArrow,
    VolumeIcon,
    XMarkIcon,
} from '~/components/Icons';
import { changeVolume, toggleMuted, changeMuted } from '~/redux/slices/videoSlice';

const cx = className.bind(styles);

function VideoPlayer({ data = {}, handleClose, handleNextVideo, handlePrevVideo }) {
    const { thumb_url: thumbUrl, file_url: videoUrl, avatar } = data;
    // ref
    const { volume, muted } = useSelector((state) => state.video);
    const dispatch = useDispatch();
    const videoRef = useRef();
    const volumeBarRef = useRef();
    const volumeDotRef = useRef();
    const progressVideoRef = useRef();
    const context = useContext(ModalContextKey);
    const [playId, setPlayId] = useState(0);

    //state
    const [active, setActive] = useState(false);
    const { setDataStorage } = useLocalStorage();
    const [percentage, setPercentage] = useState(0);
    const [position, setPosition] = useState(percentage);
    const [marginLeft, setMarginLeft] = useState(-20);
    const [rangeWidth, setRangeWidth] = useState(0);
    const [isPlaying, setIsplaying] = useState(true);
    const [duration, setDuration] = useState(0);
    const [currentTime, SetCurrentTime] = useState(0);

    // handle event

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

    const handleChangVolume = (e) => {
        const volume = +e.target.value;
        const volumeValid = valueValidate(volume, 0, 100);

        //update volume video
        videoRef.current.volume = volumeValid / 100;

        //update volume ui
        volumeBarRef.current.style.width = volumeValid + '%';
        volumeDotRef.current.style.transform = `translate(${100 - volumeValid}%, -50%)`;

        //update icon ui when muted/!muted
        volumeValid === 0 && !muted && dispatch(changeMuted(true));
        volumeValid > 0 && muted && dispatch(changeMuted(false));
    };

    const handleToggleMuted = () => {
        dispatch(toggleMuted());
    };

    const handleSetStateVolume = (e) => {
        const value = +e.target.value;
        const valueValid = valueValidate(value, 0, 100);
        const action = changeVolume(valueValid / 100);
        dispatch(action);
    };

    const valueValidate = (value, min, max) => {
        let valueValid = value;

        if (valueValid < min) {
            valueValid = 0;
        } else if (valueValid > max) {
            valueValid = max;
        }
        return valueValid;
    };

    //handler video
    const play = () => {
        if (isPlaying === false) {
            videoRef.current.play();
            setActive(false);
        }
    };
    const pause = () => {
        if (isPlaying) {
            videoRef.current.pause();
            setActive(true);
        }
    };

    const togglePlayVideo = () => {
        if (isPlaying) {
            pause();
            setIsplaying(false);
        } else {
            play();
            setIsplaying(true);
        }
    };

    const handleChangePercentage = (e) => {
        const audio = videoRef.current;
        // (audio.duration / 100) * e.target.value lay ra thoi gian hien tai (s) set vao currentTime
        audio.currentTime = (audio.duration / 100) * e.target.value;
        setPercentage(e.target.value);
    };

    const handleSetDuration = (e) => {
        setDuration(e.currentTarget.duration.toFixed(2));
    };

    const getCurrentPercentAndTime = (e) => {
        const percent = (e.currentTarget.currentTime / e.currentTarget.duration) * 100;
        const time = e.currentTarget.currentTime;

        //+percent use to convert number to percent
        setPercentage(+percent);
        SetCurrentTime(time);
    };

    // chuyen doi thoi gian thuc te
    const secondToHms = (value) => {
        if (!value) {
            return '00:00';
        }
        let duration = value;
        let hours = duration / 3600;
        duration = duration % 3600;

        let min = parseInt(duration / 60);
        duration = duration % 3600;

        let sec = parseInt(duration);

        if (sec < 10) {
            sec = `0${sec}`;
        }
        if (min < 10) {
            min = `0${min}`;
        }
        if (parseInt(hours, 10) > 0) {
            return `${parseInt(hours, 10)}:${min}:${sec}`;
        } else if (min == 0) {
            return `00:${sec}`;
        } else {
            return `${min}:${sec}`;
        }
    };

    useEffect(() => {
        const circleWidth = 16;
        const rangeWidth = progressVideoRef.current.getBoundingClientRect().width;

        const centerCircle = (circleWidth / 100) * percentage * -1;
        const centerRange = circleWidth + (rangeWidth / 100) * percentage - (circleWidth / 100) * percentage;

        setMarginLeft(centerCircle);
        setPosition(percentage);
        setRangeWidth(centerRange);
    }, [percentage]);

    return (
        <div className={cx('video-player')}>
            <p className={cx('video-background')} style={{ backgroundImage: `url('${avatar}')` }}></p>
            <div className={cx('video-wrapper')} onClick={togglePlayVideo}>
                <Image className={cx('video-image')} src={thumbUrl}></Image>
                <video
                    className={cx('video')}
                    autoPlay
                    ref={videoRef}
                    loop
                    src={videoUrl}
                    onLoadedData={handleSetDuration}
                    onTimeUpdate={getCurrentPercentAndTime}
                ></video>
            </div>

            <div className={cx('video-progress')}>
                <div className={cx('seekbar-container')}>
                    <div className={cx('seekbar-background')}></div>
                    <div
                        className={cx('seekbar-range')}
                        style={{
                            width: `${rangeWidth}px`,
                        }}
                    ></div>
                    <div
                        className={cx('seekbar-circle')}
                        style={{
                            left: `${position}%`,
                            marginLeft: `${marginLeft}px`,
                        }}
                    ></div>
                    <input
                        className={cx('seekbar-input')}
                        ref={progressVideoRef}
                        onChange={handleChangePercentage}
                        type="range"
                        step="0.01"
                        min="0"
                        max="100"
                        value={position}
                    ></input>
                </div>
                <div className={cx('seekbar-time')}>
                    <div className={cx('current-time')}>{secondToHms(currentTime)}</div>
                    <span>/</span>
                    <div className={cx('duration-time')}>{secondToHms(duration)}</div>
                </div>
            </div>

            <div className={cx('play-icon_wrapper', { active: active })} onClick={togglePlayVideo}>
                <PlaySolidIcon className={cx('play-icon')} />
            </div>

            <div className={cx('close-icon_wrapper')} onClick={handleClose}>
                <XMarkIcon className={cx('close-icon')} />
            </div>

            <div className={cx('tiktok-logo_wrapper')}>
                <TiktokIcon className={cx('tiktok-logo')} />
            </div>
            <div className={cx('volume-container')}>
                <div className={cx('volume-control')}>
                    <div className={cx('volume-background')}>
                        <div className={cx('volume-range')} ref={volumeBarRef}>
                            <div className={cx('volume-circle')} ref={volumeDotRef}></div>
                        </div>
                        <input
                            className={cx('volume-input')}
                            onChange={handleChangVolume}
                            onMouseUp={handleSetStateVolume}
                            type="range"
                            min="0"
                            max="100"
                            step="1"
                        ></input>
                    </div>
                </div>
                <div className={cx('browser-sound', { mute: muted })} onClick={handleToggleMuted}>
                    {muted ? (
                        <div className={cx('volume-mute_wrapper')}>
                            <MuteIcon className={cx('volume-mute')} />
                        </div>
                    ) : (
                        <div className={cx('volume-default_wrapper')}>
                            <VolumeIcon className={cx('volume-default')} />
                        </div>
                    )}
                </div>
            </div>
            <div className={cx('top-arrow_wrapper')} onClick={handlePrevVideo}>
                <TopArrow className={cx('top-arrow')} />
            </div>
            <div className={cx('bottom-arrow_wrapper')} onClick={handleNextVideo}>
                <BottomArrow className={cx('bottom-arrow')} />
            </div>
            <div className={cx('browser-report')}>
                <div className={cx('report-wrapper')}>
                    <FlagIcon className={cx('report-icon')} />
                </div>
                <div className={cx('report-title')} onClick={context.handleShowModalReport}>
                    Report
                </div>
            </div>
        </div>
    );
}

export default VideoPlayer;
