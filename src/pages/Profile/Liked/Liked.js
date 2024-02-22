import classNames from 'classnames/bind';
import propTypes from 'prop-types';

import { PadlockIconRegular } from '~/components/Icons';
import styles from './Liked.module.scss';
const cx = classNames.bind(styles);
function Liked({ data }) {
    return (
        <div className={cx('Liked-video')}>
            <div className={cx('Liked-wrapper')}>
                <PadlockIconRegular className={cx('padlock-icon')} />
                <div className={cx('title')}>
                    <strong>Video đã thích của người dùng này ở trạng thái riêng tư</strong>
                </div>
                <div className={cx('description')}>Các video được thích bởi {data.nickname} hiện đang ẩn</div>
            </div>
        </div>
    );
}
Liked.propTypes = {
    data: propTypes.any.isRequired,
};
export default Liked;
