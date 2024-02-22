import propTypes from 'prop-types';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';

import Image from '~/components/Image';
import { CommentIcon, HeartIconSolid, MusicIcon, ShareSolidIcon } from '~/components/Icons';
import Button from '~/components/Button';
import styles from './LoadVideo.module.scss';
import Video from '~/components/Video';
import ShareAction from '~/components/ShareAction';
import { ModalContextKey } from '~/contexts/modalContext';

const cx = classNames.bind(styles);

function AccountItem({ videoId, data }) {
    const context = useContext(ModalContextKey);

    return (
        <div className={cx('wrapper')}>
            <Link to={`/@${data.user.nickname}`}>
                <div className={cx('avatar')}>
                    <Image className={cx('avatar-image')} src={data.user.avatar} alt={data.last_name} />
                </div>
            </Link>
            <div className={cx('video-content')}>
                <div className={cx('info-wrapper')}>
                    <div className={cx('text-info')}>
                        <div className={cx('author')}>
                            <Link to={`/@${data.user.nickname}`}>
                                <div className={cx('nickname')}>
                                    <strong>{data.user.nickname}</strong>
                                </div>
                            </Link>
                            <div className={cx('fullname')}>{` ${data.user.first_name} ${data.user.last_name}`}</div>
                        </div>
                        <div className={cx('caption')}>{data.description}</div>
                        <div className={cx('music')}>
                            {<MusicIcon />}
                            <span className={cx('sound-name')}>
                                <strong> nhạc nền - {`${data.music}`}</strong>
                            </span>
                        </div>
                    </div>
                    <Button small outline onClick={context.handleShowModalForm}>
                        Follow
                    </Button>
                </div>
                <div className={cx('video-wrapper')}>
                    <Video videoId={videoId} data={data} />
                    <div className={cx('actions')}>
                        <div className={cx('action-btn')}>
                            <span className={cx('icon')} onClick={context.handleShowModalForm}>
                                <HeartIconSolid />
                            </span>
                            <span>
                                <strong>{data.likes_count}</strong>
                            </span>
                        </div>
                        <div className={cx('action-btn')} onClick={context.handleShowModalForm}>
                            <span className={cx('icon')}>
                                <CommentIcon />
                            </span>
                            <span>
                                <strong>{data.comments_count}</strong>
                            </span>
                        </div>
                        <ShareAction placement="top" offset={[90, 6]}>
                            <div className={cx('action-btn')}>
                                <span className={cx('icon')}>
                                    <ShareSolidIcon />
                                </span>
                                <span>
                                    <strong>{data.shares_count}</strong>
                                </span>
                            </div>
                        </ShareAction>
                    </div>
                </div>
            </div>
        </div>
    );
}

AccountItem.propTypes = {
    data: propTypes.object.isRequired,
};

export default AccountItem;
