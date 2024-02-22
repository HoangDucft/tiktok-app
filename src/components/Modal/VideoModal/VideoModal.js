import className from 'classnames/bind';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { useEffect, useContext } from 'react';
import TippyHeadless from '@tippyjs/react/headless';

import Button from '~/components/Button';
import {
    CommentIcon,
    FaceBookIcon,
    LineIcon,
    LinkIcon,
    MusicIcon,
    ShareIcon,
    SmileIcon,
    SpecialAIcon,
    TelegramIcon,
    TwitterIcon,
    HeartIconSolid,
} from '~/components/Icons';
import Image from '~/components/Image';
import styles from './VideoModal.module.scss';
import ShareAction from '~/components/ShareAction';
import VideoPlayer from './VideoPlayer/VideoPlayer';
import AccountPreview from '~/components/SuggestedAccounts/AccountPreview';
import { Wrapper as PopperWrapper } from '~/components/Wrapper';
import { ModalContextKey } from '~/contexts/modalContext';
import { VideoModalContextKey } from '~/contexts/VideoModalContext';
import CommentShow from './CommentShow';

const cx = className.bind(styles);
function VideoModal(props) {
    const currentUser = false;
    const { data = {}, listData } = props;
    const context = useContext(ModalContextKey);
    const { propsVideoModal, setPropsVideoModal } = useContext(VideoModalContextKey);
    const {
        id: videoId,
        created_at: createdAt,
        description,
        music: musicInfo,
        likes_count: likesCount,
        comments_count: commentsCount,
        website_url: websiteUrl,
        facebook_url: facebookUrl,
        youtube_url: youtubeURL,
        user: {
            avatar: avatarUrl,
            nickname: userName,
            first_name: firstName,
            last_name: lastName,
            tick,
            followers_count: followersCount,
        },
    } = data;

    useEffect(() => {
        console.log(propsVideoModal);
    }, []);

    const handleNextVideo = () => {
        for (let i = 0; i < listData.length - 1; i++) {
            if (listData[i].id === videoId) {
                ++i;
                const newProps = {
                    index: listData[i].id,
                    data: listData[i],
                };
                setTimeout(() => setPropsVideoModal({ ...propsVideoModal, ...newProps }));
            }
        }
    };
    const handlePrevVideo = () => {
        for (let i = listData.length - 1; i >= 0; i--) {
            if (i > 0) {
                if (listData[i].id === videoId) {
                    --i;
                    const newProps = {
                        index: listData[i].id,
                        data: listData[i],
                    };
                    setTimeout(() => setPropsVideoModal({ ...propsVideoModal, ...newProps }));
                }
                if (i === 0) {
                    break;
                }
            }
        }
    };

    const renderPreview = (props) => {
        return (
            <div tabIndex="-1" {...props}>
                <PopperWrapper>
                    <AccountPreview
                        avatarUrl={avatarUrl}
                        firstName={firstName}
                        lastName={lastName}
                        tick={tick}
                        userName={userName}
                        likesCount={likesCount}
                        followersCount={followersCount}
                    />
                </PopperWrapper>
            </div>
        );
    };

    useEffect(() => {
        window.history.replaceState(null, '', `/@${userName}/video/${videoId}`);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [videoId]);

    return (
        <div className={cx('container')}>
            <div className={cx('video-container')}>
                <VideoPlayer {...props} handleNextVideo={handleNextVideo} handlePrevVideo={handlePrevVideo} />
            </div>

            <div className={cx('content-container')}>
                <div className={cx('info-container')}>
                    <div className={cx('info-heading')}>
                        <div>
                            <TippyHeadless interactive offset={[20, -10]} render={renderPreview} placement="bottom">
                                <div className={cx('user-info')}>
                                    <Image src={avatarUrl} className={cx('user-avatar')} />
                                    <div className={cx('user-body')}>
                                        <div className={cx('user-nickname')}>{userName}</div>
                                        <div className={cx('user-fullname_wrapper')}>
                                            <div className={cx('user-fullname')}>
                                                {firstName} {lastName}
                                            </div>
                                            <div className={cx('time-upload-video')}>{createdAt}</div>
                                        </div>
                                    </div>
                                </div>
                            </TippyHeadless>
                        </div>

                        <Button outline className={cx('follow-btn')} onClick={context.handleShowModalForm}>
                            Follow
                        </Button>
                    </div>
                    <div className={cx('main-container')}>
                        <div className={cx('description-container')}>
                            <div className={cx('description')}>{description}</div>
                            <div className={cx('hashtag')}>#khumcanco</div>
                        </div>
                        <div className={cx('music')}>
                            <div className={cx('mussic-icon_wrapper')}>
                                <MusicIcon />
                            </div>
                            <div className={cx('mussic-title')}>{musicInfo}</div>
                        </div>
                        <div className={cx('interactive')}>
                            <div className={cx('counts-list')}>
                                <div className={cx('count-item')} onClick={context.handleShowModalForm}>
                                    <HeartIconSolid className={cx('heart-icon')} />
                                </div>
                                <p>{likesCount}</p>
                                <div
                                    className={cx('count-item')}
                                    style={{ marginLeft: '20px' }}
                                    onClick={context.handleShowModalForm}
                                >
                                    <CommentIcon className={cx('comment-icon')} />
                                </div>
                                <p>{commentsCount}</p>
                            </div>
                            <div className={cx('share-list')}>
                                <Tippy content="Embed" placement="top" offset={[0, 8]} zIndex="999999">
                                    <div className={cx('share-item')}>
                                        <LinkIcon className={cx('link-icon')} />
                                    </div>
                                </Tippy>
                                <Tippy content="Send to friends" placement="top" offset={[0, 8]} zIndex="999999">
                                    <div className={cx('share-item')}>
                                        <TelegramIcon className={cx('telegram-icon')} />
                                    </div>
                                </Tippy>
                                <Tippy content="Share to Facebook" placement="top" offset={[0, 8]} zIndex="999999">
                                    <div className={cx('share-item')}>
                                        <FaceBookIcon className={cx('facebook-icon')} />
                                    </div>
                                </Tippy>
                                <Tippy content="Share to Line" placement="top" offset={[0, 8]} zIndex="999999">
                                    <div className={cx('share-item')}>
                                        <LineIcon className={cx('line-icon')} />
                                    </div>
                                </Tippy>
                                <Tippy content="Share to Twitter" placement="top" offset={[0, 8]} zIndex="999999">
                                    <div className={cx('share-item')}>
                                        <TwitterIcon className={cx('twitter-icon')} />
                                    </div>
                                </Tippy>
                                <ShareAction currentUser={currentUser} placement="bottom-end" zIndex="999999">
                                    <div className={cx('share-item')}>
                                        <ShareIcon className={cx('share-icon')} />
                                    </div>
                                </ShareAction>
                            </div>
                        </div>
                        <div className={cx('link')}>
                            <div className={cx('link-titile')}>
                                {facebookUrl || websiteUrl || youtubeURL || 'https://Tiktok.com'}
                            </div>
                            <div className={cx('coppy-btn')}>Coppy link</div>
                        </div>
                    </div>
                </div>

                <CommentShow />

                {currentUser ? (
                    <div className={cx('bottom-comment_container')}>
                        <div className={cx('comment-inner')}>
                            <div className={cx('comment-input')}>
                                <div className={cx('comment-text')}>
                                    <form>
                                        <input type="text" placeholder="Add comment..."></input>
                                    </form>
                                    <SpecialAIcon className={cx('SpecialAIcon')} />
                                    <SmileIcon className={cx('smile-icon')} />
                                </div>
                            </div>
                            <div className={cx('post-btn')}>Post</div>
                        </div>
                    </div>
                ) : (
                    <div className={cx('bottom-comment_container')}>
                        <div className={cx('comment-title')} onClick={context.handleShowModalForm}>
                            <strong>Please log in to comment</strong>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default VideoModal;
