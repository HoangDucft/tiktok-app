import classNames from 'classnames/bind';
import { Fragment } from 'react';
import styles from './VideoTabs.module.scss';
import VideoProfile from '~/components/VideoProfile';
import { UserRegularIcon } from '~/components/Icons';
import propTypes from 'prop-types';

const cx = classNames.bind(styles);

function VideoTabs({ video, data }) {
    return (
        <Fragment>
            {video.length > 0 ? (
                <div className={cx('videos')}>
                    {data.videos?.map((item, index) => {
                        return <VideoProfile data={item} videoId={index} key={index} />;
                    })}
                </div>
            ) : (
                <div className={cx('no-video')}>
                    <div className={cx('video-wrapper')}>
                        <UserRegularIcon className={cx('user-icon')} />
                        <div className={cx('no-usertitle')}>
                            <strong>No content</strong>
                        </div>
                        <div className={cx('no-user-description')}>This user has not published any videos.</div>
                    </div>
                </div>
            )}
        </Fragment>
    );
}
VideoTabs.propTypes = {
    video: propTypes.array.isRequired,
    data: propTypes.oneOfType([propTypes.string, propTypes.array, propTypes.object]),
};
export default VideoTabs;
