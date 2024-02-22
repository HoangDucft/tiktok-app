import classNames from 'classnames/bind';
import styles from './baseModalForm.module.scss';

import { FollowIcon, ScanQRIcon } from '~/components/Icons';
import images from '~/assets/images';

const cx = classNames.bind(styles);

function LoginWithQRForm() {
    return (
        <div className={cx('inner')}>
            <div className={cx('left-space')}>
                <img className={cx('qr-image')} src={images.qrImage} alt="qr"></img>
                <div className={cx('step-list')}>
                    <div className={cx('step-item')}>
                        <p>1.Open the TikTok app on your mobile device </p>
                    </div>
                    <div className={cx('step-item')}>
                        <p>2. On Profile, tap </p>
                        <FollowIcon className={cx('step-icon')} />
                    </div>
                    <div className={cx('step-item')}>
                        <p>
                            3.tap
                            <ScanQRIcon className={cx('step-icon')} />
                            then scan the QR code to confirm your login information
                        </p>
                    </div>
                </div>
            </div>
            <div className={cx('right-space')}>
                <img className={cx('qr-guide-image')} src={images.loginWithQRGuide} alt="qr guide"></img>
            </div>
        </div>
    );
}

export default LoginWithQRForm;
