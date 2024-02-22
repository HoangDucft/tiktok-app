import VideoModalContext from './VideoModalContext';
import ModalContext from './modalContext';

function ProviderContext({ children }) {
    return (
        <ModalContext>
            <VideoModalContext>{children}</VideoModalContext>
        </ModalContext>
    );
}

export default ProviderContext;
