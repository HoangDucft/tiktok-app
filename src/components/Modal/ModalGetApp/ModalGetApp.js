import classNames from 'classnames/bind';
import propTypes from 'prop-types';
import { useContext } from 'react';

import styles from './ModalGetApp.module.scss';
import LayoutModal from '~/components/Modal/LayoutModal';
import { XMarkIcon } from '~/components/Icons';
import Image from '~/components/Image';
import images from '~/assets/images';

const cx = classNames.bind(styles);
function ModalGetApp({ handleClose }) {
    return (
        <LayoutModal>
            <div className={cx('wrapper')}>
                <div className={cx('header')}>
                    <div className={cx('header-title')}>Get the TikTok app</div>
                    <div className={cx('header-close')} onClick={handleClose}>
                        <XMarkIcon />
                    </div>
                </div>
                <div className={cx('content')}>
                    <div className={cx('QR-container')}>
                        <div className={cx('QR-title')}>Scan QR coded to download TikTok</div>
                        <Image className={cx('QR-icon')} src={images.qr} alt=""></Image>
                    </div>
                    <div className={cx('download-container')}>
                        <div className={cx('download-title')}>Download from app stores</div>
                        <div className={cx('download-list')}>
                            <a href="/">
                                <Image
                                    className={cx('download-icon')}
                                    src={images.microsoftImage}
                                    alt="image-error"
                                ></Image>
                            </a>
                            <a href="/">
                                <Image
                                    className={cx('download-icon')}
                                    src={images.appStoresImage}
                                    alt="image-error"
                                ></Image>
                            </a>
                            <a href="/">
                                <Image
                                    className={cx('download-icon')}
                                    src={images.amazoneImage}
                                    alt="image-error"
                                ></Image>
                            </a>
                            <a href="/">
                                <Image
                                    className={cx('download-icon')}
                                    src={images.googlePlayImage}
                                    alt="image-error"
                                ></Image>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </LayoutModal>
    );
}
ModalGetApp.propTypes = {
    onHide: propTypes.func,
};

export default ModalGetApp;
