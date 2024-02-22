import classNames from 'classnames/bind';
import { useState, useEffect, createContext, useContext } from 'react';
import { InView } from 'react-intersection-observer';
import SvgIcon from '~/components/Icons/SvgIcon/SvgIcon';
import { HomeAccountLoading, TiktokLoading } from '~/components/Loadings';

import LoadVideo from '~/layouts/components/LoadVideo';
import * as getVideoListService from '~/services/getVideoListService';
import { VideoModalContextKey } from '~/contexts/VideoModalContext';
import styles from './Home.module.scss';

export const VideoContext = createContext();

const cx = classNames.bind(styles);
function Home() {
    const [videoList, setVideoList] = useState([]);
    const [page, setPage] = useState(0);
    const [volume, setVolume] = useState(0.4);
    const [prevVolume, setPrevVolume] = useState(volume);
    const [mute, setMute] = useState(true);

    const { propsVideoModal, setPropsVideoModal } = useContext(VideoModalContextKey);

    // const handleChangeVolume = (e) => {
    //     setVolume(e.target.value / 100);
    // };

    const toggleMuted = () => {
        if (mute) {
            setVolume(prevVolume);
            setMute(false);
        } else {
            setPrevVolume(volume);
            setVolume(0);
            setMute(true);
        }
    };

    const handleRandomPage = (min, max) => {
        const countPage = max + 1 - min;
        const randomList = [];
        let page;
        // random từ page 1-> 10
        do {
            page = Math.floor(Math.random() * countPage + min); // + min để random từ 1 trở lên
        } while (randomList.includes(page));

        // pust những page đã có vào list đề khi kiểm tra trong vòng lặp có nó sẽ bỏ qua
        randomList.push(page);
        return page;
    };

    useEffect(() => {
        if (page < 1) return;

        getVideoListService
            .getVideo('for-you', page)
            .then((data) => {
                // random video in list data
                data.sort(() => {
                    return Math.random() - 0.5;
                });
                setVideoList([...videoList, ...data]);

                const newProps = {
                    listData: data,
                };

                setPropsVideoModal({ ...propsVideoModal, ...newProps });
            })

            .catch((error) => {
                console.log(error);
            });

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [page]);

    const value = {
        volume,
        mute,
        toggleMuted,
    };

    return (
        <VideoContext.Provider value={value}>
            <>
                <LoadVideo data={videoList} />
                <InView onChange={(inView) => inView && setPage(handleRandomPage(1, 10))}>
                    {videoList.length === 0 ? (
                        <HomeAccountLoading />
                    ) : (
                        <SvgIcon className={cx('auto-load-more')} icon={<TiktokLoading />} />
                    )}
                </InView>
            </>
        </VideoContext.Provider>
    );
}
export default Home;
