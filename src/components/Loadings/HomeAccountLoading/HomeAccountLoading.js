import classNames from 'classnames/bind';
import styles from './HomeAccountLoading.module.scss';

const cx = classNames.bind(styles);
function HomeAccountLoading() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('avatar')}></div>
            <div className={cx('body')}>
                <div className={cx('nickname')}></div>
                <div className={cx('fullname')}></div>
                <div className={cx('description')}></div>
                <div className={cx('bio')}></div>
            </div>
        </div>
    );
}

export default HomeAccountLoading;
