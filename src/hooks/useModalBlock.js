import { useState } from 'react';
import { createPortal } from 'react-dom';
function useModalBlock(ModalComponent) {
    const [isModalBlockShow, setIsModalBlockShow] = useState(false);
    const [propDataModalBlock, setPropDataModalBlock] = useState({});

    const modalBlockShow = () => {
        setIsModalBlockShow(true);
        document.body.classList.add('hidden', 'modal');
    };

    const modalHide = () => {
        setIsModalBlockShow(false);
        document.body.classList.remove('hidden', 'modal');
    };

    const modalBlockComponent = () => {
        return (
            isModalBlockShow &&
            createPortal(
                <ModalComponent handleClose={modalHide} propDataModalBlock={propDataModalBlock} />,
                document.body,
            )
        );
    };

    return [modalBlockComponent, modalBlockShow, setPropDataModalBlock];
}

export default useModalBlock;
