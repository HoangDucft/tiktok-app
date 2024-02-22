import { forwardRef, useState } from 'react';
import classNames from 'classnames/bind';
import propTypes from 'prop-types';

import images from '~/assets/images';
import styles from './Image.module.scss';

const cx = classNames.bind(styles);
const Image = forwardRef(({ src, alt, className, ...prop }, ref) => {
    const [fallback, setFallback] = useState('');
    const handleError = () => {
        setFallback(images.noImage);
    };
    return (
        <img
            className={cx('wrapper', className)}
            ref={ref}
            src={fallback || src}
            alt={alt}
            {...prop}
            onError={handleError}
        ></img>
    );
});

Image.propTypes = {
    src: propTypes.string,
    alt: propTypes.any,
    className: propTypes.string,
    prop: propTypes.func,
    ref: propTypes.func,
};

export default Image;
