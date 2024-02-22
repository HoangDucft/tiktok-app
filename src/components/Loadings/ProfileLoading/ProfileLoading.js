import classNames from 'classnames/bind';

import { PadlockIcon } from '~/components/Icons';
import styles from './ProfileLoading.module.scss';

const cx = classNames.bind(styles);
function ProfileLoading() {
    return (
        <div className={cx('container')}>
            <div className={cx('info-container')}>
                <div className={cx('info')}>
                    <div className={cx('profile')}>
                        <div className={cx('profile-avatar')}></div>
                        <div className={cx('profile-text')}>
                            <div className={cx('nickname')}></div>
                            <div className={cx('name')}></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={cx('video-container')}>
                <div className={cx('tabs')}>
                    <div className={cx('video-tabs')}>Videos</div>
                    <div className={cx('liked-tab')}>
                        <PadlockIcon className={cx('padlock-icon')} />
                        Liked
                    </div>
                    <div className={cx('underline')}></div>
                </div>

                <div className={cx('wrapper')}>
                    <div className={cx('video-item')}></div>
                    <div className={cx('video-item')}></div>
                    <div className={cx('video-item')}></div>
                    <div className={cx('video-item')}></div>
                    <div className={cx('video-item')}></div>
                    <div className={cx('video-item')}></div>
                    <div className={cx('video-item')}></div>
                    <div className={cx('video-item')}></div>
                    <div className={cx('video-item')}></div>
                    <div className={cx('video-item')}></div>
                </div>
            </div>
        </div>
    );
}

export default ProfileLoading;
