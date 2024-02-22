import className from 'classnames/bind';
import { useState, useEffect, useContext, useRef } from 'react';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { useParams } from 'react-router-dom';

import images from '~/assets/images';
import Button from '~/components/Button';
import {
    CommentIcon,
    FaceBookIcon,
    LineIcon,
    LinkIcon,
    MusicIcon,
    HeartIconRegular,
    ShareIcon,
    SmileIcon,
    SpecialAIcon,
    TelegramIcon,
    TwitterIcon,
    HeartIconSolid,
    RowShowMoreIcon,
} from '~/components/Icons';
import Image from '~/components/Image';
import styles from './BrowserVideo.module.scss';
import ShareAction from '~/components/ShareAction';
import { accountService } from '~/services';
import VideoPlayer from './VideoPlayer/VideoPlayer';

const cx = className.bind(styles);
function BrowserVideo(props) {
    useEffect(() => {
        console.log(props);
    }, []);

    const currentUser = false;
    const params = useParams();

    // state hook
    const [data, setData] = useState({});
    const [videoCurr, setVideoCurr] = useState({});

    useEffect(() => {
        fetch(`https://tiktok.fullstack.edu.vn/api/users/@${params.nickname}`)
            .then((res) => res.json())
            .then((res) => {
                setData(res.data);
            });
    }, [params.nickname]);

    useEffect(() => {
        const res = data.videos?.find((video) => {
            return String(video.id) === params.id;
        });
        setVideoCurr(res);
    }, [data, params.id]);

    return (
        <div className={cx('container')}>
            <div className={cx('video-container')}>
                <VideoPlayer data={data} videoCurr={videoCurr} />
            </div>

            <div className={cx('content-container')}>
                <div className={cx('info-container')}>
                    <div className={cx('info-heading')}>
                        <div className={cx('user-info')}>
                            <Image src={data.avatar} className={cx('user-avatar')} />
                            <div className={cx('user-body')}>
                                <div className={cx('user-nickname')}>{data.nickname}</div>
                                <div className={cx('user-fullname_wrapper')}>
                                    <div className={cx('user-fullname')}>
                                        {data.first_name} {data.last_name}
                                    </div>
                                    <div className={cx('time-upload-video')}>{videoCurr?.published_at}</div>
                                </div>
                            </div>
                        </div>
                        <Button outline className={cx('follow-btn')}>
                            Follow
                        </Button>
                    </div>
                    <div className={cx('main-container')}>
                        <div className={cx('description-container')}>
                            <div className={cx('description')}>{videoCurr?.description}</div>
                            <div className={cx('hashtag')}>#khumcanco</div>
                        </div>
                        <div className={cx('music')}>
                            <div className={cx('mussic-icon_wrapper')}>
                                <MusicIcon />
                            </div>
                            <div className={cx('mussic-title')}>{videoCurr?.description}</div>
                        </div>
                        <div className={cx('interactive')}>
                            <div className={cx('counts-list')}>
                                <div className={cx('count-item')}>
                                    <HeartIconSolid className={cx('heart-icon')} />
                                </div>
                                <p>{videoCurr?.likes_count}</p>
                                <div className={cx('count-item')} style={{ marginLeft: '20px' }}>
                                    <CommentIcon className={cx('comment-icon')} />
                                </div>
                                <p>{videoCurr?.comments_count}</p>
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
                                {videoCurr?.facebook_url ||
                                    videoCurr?.website_url ||
                                    videoCurr?.youtube_url ||
                                    'https://Tiktok.com'}
                            </div>
                            <div className={cx('coppy-btn')}>Coppy link</div>
                        </div>
                    </div>
                </div>
                <div className={cx('comment-list_container')}>
                    <div className={cx('comment-item')}>
                        <Image className={cx('comment-avatar')} src={images.denisdangImage} />
                        <div className={cx('comment-info')}>
                            <div className={cx('comment-nickname')}>
                                <a href="/video">Dennis Dang</a>
                            </div>
                            <div className={cx('comment-content')}>video so funny fufufufufufuffufufufufufufufu</div>
                            <div className={cx('comment-other')}>
                                <div className={cx('comment-day')}>30/04/1975</div>
                                <div className={cx('comment-repply')}>Repply</div>
                            </div>
                        </div>
                        <div className={cx('comment-like')}>
                            {/* <TippyReport placement="bottom-end"> */}
                            <RowShowMoreIcon className={cx('comment_showmore-icon')} />
                            {/* </TippyReport> */}
                            <HeartIconRegular className={cx('comment_heart-icon')} />
                            <div className={cx('count-hearts ')}>20.6M</div>
                        </div>
                    </div>
                    <div className={cx('comment-item')}>
                        <Image className={cx('comment-avatar')} src={images.einsteinAvatar} />
                        <div className={cx('comment-info')}>
                            <div className={cx('comment-nickname')}>
                                <a href="/video">Einstein</a>
                            </div>
                            <div className={cx('comment-content')}>robot will attack people in the future</div>
                            <div className={cx('comment-other')}>
                                <div className={cx('comment-day')}>22/02/1999</div>
                                <div className={cx('comment-repply')}>Repply</div>
                            </div>
                        </div>
                        <div className={cx('comment-like')}>
                            {/* <TippyReport placement="bottom-end"> */}
                            <RowShowMoreIcon className={cx('comment_showmore-icon')} />
                            {/* </TippyReport> */}
                            <HeartIconRegular className={cx('comment_heart-icon')} />
                            <div className={cx('count-hearts ')}>100.2M</div>
                        </div>
                    </div>
                    <div className={cx('comment-item')}>
                        <Image className={cx('comment-avatar')} src={images.jackMaImage} />
                        <div className={cx('comment-info')}>
                            <div className={cx('comment-nickname')}>
                                <a href="/video">Jack Ma</a>
                            </div>
                            <div className={cx('comment-content')}>The life is not fair, you used to it</div>
                            <div className={cx('comment-other')}>
                                <div className={cx('comment-day')}>31/03/2023</div>
                                <div className={cx('comment-repply')}>Repply</div>
                            </div>
                        </div>
                        <div className={cx('comment-like')}>
                            {/* <TippyReport placement="bottom-end"> */}
                            <RowShowMoreIcon className={cx('comment_showmore-icon')} />
                            {/* </TippyReport> */}
                            <HeartIconRegular className={cx('comment_heart-icon')} />
                            <div className={cx('count-hearts ')}>670.6M</div>
                        </div>
                    </div>
                    <div className={cx('comment-item')}>
                        <Image className={cx('comment-avatar')} src={images.billGateImage} />
                        <div className={cx('comment-info')}>
                            <div className={cx('comment-nickname')}>
                                <a href="/video">Billgate</a>
                            </div>
                            <div className={cx('comment-content')}>I love money and i espect it</div>
                            <div className={cx('comment-other')}>
                                <div className={cx('comment-day')}>21/11/2003</div>
                                <div className={cx('comment-repply')}>Repply</div>
                            </div>
                        </div>
                        <div className={cx('comment-like')}>
                            {/* <TippyReport placement="bottom-end"> */}
                            <RowShowMoreIcon className={cx('comment_showmore-icon')} />
                            {/* </TippyReport> */}
                            <HeartIconRegular className={cx('comment_heart-icon')} />
                            <div className={cx('count-hearts ')}>90.6M</div>
                        </div>
                    </div>
                </div>

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
                        <div className={cx('comment-title')}>
                            <strong>Please log in to comment</strong>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default BrowserVideo;
