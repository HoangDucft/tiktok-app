import classNames from 'classnames/bind';
import propTypes from 'prop-types';

import styles from './LayoutModal.module.scss';

const cx = classNames.bind(styles);

function LayoutModal({ children, className, isClose, handleClose, animateEnd = 'hidden-effect-default' }) {
    const handleAnimationEnd = () => {
        isClose && handleClose();
    };
    return (
        <div className={cx('wrapper', { [animateEnd]: isClose })}>
            <div className={cx('layout-modal')} onAnimationEnd={handleAnimationEnd}></div>
            <div className={cx('layout-content', className)}>{children}</div>
        </div>
    );
}
LayoutModal.propTypes = {
    children: propTypes.any.isRequired,
};

export default LayoutModal;
