import propTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './TiktokLoading.module.scss';

const cx = classNames.bind(styles);

function TiktokLoading({ medium = false, small = false }, marginLeft) {
    return <div id={cx('loader')} className={cx({ medium, small, marginLeft: marginLeft })} />;
}

TiktokLoading.propTypes = {
    medium: propTypes.bool,
    small: propTypes.bool,
    marginLeft: propTypes.any,
};

export default TiktokLoading;
