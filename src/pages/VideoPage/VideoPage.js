import classNames from 'classnames/bind';

import styles from './Video.module.scss';

const cx = classNames.bind(styles);

function VideoPage() {
    return <div className={cx('wrapper')}></div>;
}

export default VideoPage;
