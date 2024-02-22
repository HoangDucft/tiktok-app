import propTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './LoadVideo.module.scss';
import AccountItem from './AccountItem';
const cx = classNames.bind(styles);
function LoadVideo({ data }) {
    return (
        <div className={cx('container')}>
            {data.map((account, index) => (
                <AccountItem key={index} videoId={index} data={account} />
            ))}
        </div>
    );
}
LoadVideo.propTypes = {
    data: propTypes.array.isRequired,
};
export default LoadVideo;
