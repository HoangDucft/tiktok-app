import propTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames/bind';
import { Fragment } from 'react';

import styles from './Menu.module.scss';
const cx = classNames.bind(styles);
function MenuItem({ title, to, icon, activeIcon }) {
    return (
        <NavLink
            className={({ isActive }) => cx('menu-item', { active: isActive })}
            to={to}
            children={({ isActive }) => {
                const currentIcon = isActive ? activeIcon : icon;
                return (
                    <Fragment>
                        {currentIcon}
                        <span className={cx('title')}>{title}</span>
                    </Fragment>
                );
            }}
        ></NavLink>
    );
}

MenuItem.propTypes = {
    title: propTypes.string.isRequired,
    to: propTypes.string.isRequired,
    icon: propTypes.node.isRequired,
};

export default MenuItem;
