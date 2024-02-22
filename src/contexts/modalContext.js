import { createContext } from 'react';
import { ModalBlock, ModalForm, ModalGetApp, ModalReport } from '~/components/Modal';
import { useModal, useModalBlock, useModalReport } from '~/hooks';

export const ModalContextKey = createContext();

function ModalContext({ children }) {
    const [ModalFormComponent, handleShowModalForm] = useModal(ModalForm);
    const [ModalGetAppComponent, handleShowModalGetApp] = useModal(ModalGetApp);
    const [ModalReportComponent, handleShowModalReport] = useModalReport(ModalReport);
    const [ModalBlockComponent, handleShowModalBlock, setPropDataModalBlock] = useModalBlock(ModalBlock);

    const contextValue = {
        handleShowModalForm,
        handleShowModalBlock,
        handleShowModalGetApp,
        handleShowModalReport,
        setPropDataModalBlock,
    };

    return (
        <ModalContextKey.Provider value={contextValue}>
            {children}

            <ModalFormComponent />
            <ModalBlockComponent />
            <ModalGetAppComponent />
            <ModalReportComponent />
        </ModalContextKey.Provider>
    );
}

export default ModalContext;
