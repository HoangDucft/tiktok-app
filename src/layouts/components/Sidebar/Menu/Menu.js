import propTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './Menu.module.scss';

const cx = classNames.bind(styles);
function Menu({ children }) {
    return <div className={cx('wrapper')}>{children}</div>;
}

Menu.propTypes = {
    children: propTypes.node.isRequired,
};

export default Menu;
