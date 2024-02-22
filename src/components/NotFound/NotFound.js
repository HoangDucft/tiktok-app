import classNames from 'classnames/bind';
import propTypes from 'prop-types';

import styles from './NotFound.module.scss';

const cx = classNames.bind(styles);
function NotFound({ icon, message, title }) {
    return (
        <div className={cx('wrapper')}>
            <div style={{ color: '#ccc' }}>{icon}</div>
            <div className={cx('message')}>
                <strong>
                    <h2>{message}</h2>
                </strong>
            </div>
            <p className={cx('title')}>{title}</p>
        </div>
    );
}

NotFound.propTypes = {
    icon: propTypes.node,
    message: propTypes.string.isRequired,
    title: propTypes.string.isRequired,
};

export default NotFound;
