import { createContext } from 'react';
import { VideoModal } from '~/components/Modal';
import { useVideoModal } from '~/hooks';

export const VideoModalContextKey = createContext();

function VideoModalContext({ children }) {
    // Video modal
    const { VideoModalComponent, videoModalState, propsVideoModal, setPropsVideoModal } = useVideoModal(VideoModal);

    const contextValue = { videoModalState, propsVideoModal, setPropsVideoModal };
    return (
        <VideoModalContextKey.Provider value={contextValue}>
            {children}

            <VideoModalComponent />
        </VideoModalContextKey.Provider>
    );
}

export default VideoModalContext;
