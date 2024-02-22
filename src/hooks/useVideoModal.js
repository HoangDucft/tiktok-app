// import { useState } from 'react';
// import { createPortal } from 'react-dom';
// function useVideoModal(ModalComponent) {
//     const [isVideoModalShow, setIsVideoModalShow] = useState(false);
//     const [propsVideoModal, setPropsVideoModal] = useState({});

//     const videoModalShow = () => {
//         setIsVideoModalShow(true);
//         document.body.classList.add('video-modal');
//     };

//     const modalHide = (type) => {
//         setIsVideoModalShow(false);
//         document.body.classList.remove('video-modal');
//     };

//     const VideoModalComponent = () => {
//         return (
//             isVideoModalShow &&
//             createPortal(<ModalComponent handleClose={modalHide} {...propsVideoModal} />, document.body)
//         );
//     };

//     return {
//         VideoModalComponent,
//         propsVideoModal,
//         setPropsVideoModal,
//         videoModalState: [isVideoModalShow, videoModalShow],
//     };
// }

// export default useVideoModal;
