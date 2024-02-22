import className from 'classnames/bind';
import { Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';

import styles from './VideoPlayer.module.scss';
import Image from '~/components/Image';
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

const cx = className.bind(styles);

function VideoPlayer({ videoCurr }) {
    // ref
    const videoRef = useRef();
    const volumeBarRef = useRef();
    const volumeDotRef = useRef();
    const progressVideoRef = useRef();

    //state
    const [active, setActive] = useState(false);
    const [volume, setVolume] = useState(0.4);
    const [mute, setMute] = useState(true);
    const [prevVolume, setPrevVolume] = useState(volume);
    const [percentage, setPercentage] = useState(0);
    const [position, setPosition] = useState(percentage);
    const [marginLeft, setMarginLeft] = useState(-20);
    const [rangeWidth, setRangeWidth] = useState(0);
    const [isPlaying, setIsplaying] = useState(true);
    const [duration, setDuration] = useState(0);
    const [currentTime, SetCurrentTime] = useState(0);

    // handle event
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

    const handleChangVolume = (e) => {
        const value = e.target.value;
        volumeBarRef.current.style.width = value + '%';
        setVolume(e.target.value / 100);
    };

    const toggleMute = () => {
        if (mute) {
            setVolume(prevVolume);
            setMute(false);
        } else {
            setPrevVolume(volume);
            setVolume(0);
            setMute(true);
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

    // update sound video
    useEffect(() => {
        if (mute) {
            videoRef.current.volume = 0;
        } else {
            videoRef.current.volume = volume;
        }
    });

    // update sound ui
    useEffect(() => {
        if (mute) {
            volumeBarRef.current.style.width = `${volume * 100}%`;
        } else {
            volumeBarRef.current.style.width = `${volume * 100}%`;
        }
    });

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
            <p className={cx('video-background')} style={{ backgroundImage: `url('${videoCurr?.avatar}')` }}></p>
            <div className={cx('video-wrapper')} onClick={togglePlayVideo}>
                <Image className={cx('video-image')} src={videoCurr?.thumb_url}></Image>
                <video
                    className={cx('video')}
                    autoPlay={false}
                    ref={videoRef}
                    loop
                    src={videoCurr?.file_url}
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
            <Link to="/">
                <div className={cx('close-icon_wrapper')}>
                    <XMarkIcon className={cx('close-icon')} />
                </div>
            </Link>
            <div className={cx('tiktok-logo_wrapper')}>
                <TiktokIcon className={cx('tiktok-logo')} />
            </div>
            <div className={cx('volume-container')}>
                <div className={cx('volume-control', { active: mute })}>
                    <div className={cx('volume-background')}>
                        <div className={cx('volume-range')} ref={volumeBarRef}>
                            <div className={cx('volume-circle')} ref={volumeDotRef}></div>
                        </div>
                        <input
                            className={cx('volume-input')}
                            value={volume * 100}
                            onChange={handleChangVolume}
                            type="range"
                            min="0"
                            max="100"
                            step="1"
                        ></input>
                    </div>
                </div>
                <div className={cx('browser-sound')} onClick={toggleMute}>
                    {mute ? (
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
            <div className={cx('top-arrow_wrapper')}>
                <TopArrow className={cx('top-arrow')} />
            </div>
            <div className={cx('bottom-arrow_wrapper')}>
                <BottomArrow className={cx('bottom-arrow')} />
            </div>
            <div className={cx('browser-report')}>
                <div className={cx('report-wrapper')}>
                    <FlagIcon className={cx('report-icon')} />
                </div>
                <div className={cx('report-title')}>Report</div>
            </div>
        </div>
    );
}

export default VideoPlayer;
