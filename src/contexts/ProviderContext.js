import ModalContext from './modalContext';

function ProviderContext({ children }) {
    return <ModalContext>{children}</ModalContext>;
}

export default ProviderContext;
