import propTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './Menu.module.scss';

const cx = classNames.bind(styles);
function Menu({ children }) {
    return <nav className={cx('wrapper')}>{children}</nav>;
}

Menu.propTypes = {
    children: propTypes.node.isRequired,
};

export default Menu;
