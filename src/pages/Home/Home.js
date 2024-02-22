import { useState, useEffect, createContext } from 'react';

import LoadVideo from '~/layouts/components/LoadVideo';
import * as getVideoListService from '~/services/getVideoListService';

export const VideoContext = createContext();
function Home() {
    const [video, setVideo] = useState([]);
    const [volume, setVolume] = useState(0.4);
    const [prevVolume, setPrevVolume] = useState(volume);
    const [mute, setMute] = useState(true);

    const handleChangeVolume = (e) => {
        setVolume(e.target.value / 100);
    };

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

    useEffect(() => {
        getVideoListService
            .getVideo('for-you', 1)
            .then((data) => {
                setVideo(data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    const value = {
        volume,
        mute,
        handleChangeVolume,
        toggleMuted,
    };

    return (
        <VideoContext.Provider value={value}>
            <LoadVideo data={video} />
        </VideoContext.Provider>
    );
}
export default Home;
