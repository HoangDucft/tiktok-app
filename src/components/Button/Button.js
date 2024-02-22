import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';
import { forwardRef } from 'react';

import styles from './Button.module.scss';
const cx = classNames.bind(styles);

const Button = forwardRef(
    (
        {
            to,
            href,
            primary = false,
            outline = false,
            small = false,
            large = false,
            text = false,
            disabled = false,
            rouded = false,
            children,
            className,
            leftIcon,
            onClick,
            ...passProps
        },
        ref,
    ) => {
        const props = {
            onClick,
            ...passProps,
        };

        let Comp = 'button';
        if (to) {
            props.to = to;
            Comp = Link;
        } else if (href) {
            props.href = href;
            Comp = 'a';
        }

        if (disabled) {
            Object.keys(props).forEach((key) => {
                if (key.startsWith('on') && typeof props[key] === 'function') {
                    delete props[key];
                }
            });
        }

        const classes = cx('wrapper', {
            primary,
            outline,
            small,
            large,
            text,
            disabled,
            rouded,
            leftIcon,
            [className]: className,
        });
        return (
            <Comp className={classes} ref={ref} {...props}>
                {leftIcon && <span className={cx('icon')}> {leftIcon}</span>}
                <span className={cx('title')}>{children}</span>
            </Comp>
        );
    },
);
Button.propTypes = {
    to: propTypes.string,
    href: propTypes.string,
    primary: propTypes.bool,
    outline: propTypes.bool,
    small: propTypes.bool,
    large: propTypes.bool,
    text: propTypes.bool,
    disabled: propTypes.bool,
    rouded: propTypes.bool,
    children: propTypes.node.isRequired,
    className: propTypes.string,
    leftIcon: propTypes.node,
};

export default Button;
