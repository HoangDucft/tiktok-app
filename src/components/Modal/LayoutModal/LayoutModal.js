import classNames from 'classnames/bind';
import propTypes from 'prop-types';

import styles from './LayoutModal.module.scss';

const cx = classNames.bind(styles);

function LayoutModal({ children }) {
    return <div className={cx('layout-modal')}>{children}</div>;
}
LayoutModal.propTypes = {
    children: propTypes.any.isRequired,
};

export default LayoutModal;
