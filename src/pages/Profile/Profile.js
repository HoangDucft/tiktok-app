import { useParams } from 'react-router-dom';
import classNames from 'classnames/bind';
import { useEffect, useState, useContext, Fragment } from 'react';
import TippyHeadless from '@tippyjs/react/headless';

import Button from '~/components/Button';
import { LinkIcon, PadlockIcon, ShareIcon } from '~/components/Icons';
import styles from './Profile.module.scss';
import ShareAction from '~/components/ShareAction';
import Image from '~/components/Image';
import VideoTabs from './VideoTabs';
import Liked from './Liked';
import { accountService } from '~/services';
import { ModalContextKey } from '~/contexts/modalContext';
import { BlockIcon, FlagIcon, RowShowMoreIcon } from '~/components/Icons';
import { Wrapper } from '~/components/Wrapper';
import ProfileLoading from '~/components/Loadings/ProfileLoading/ProfileLoading';

const cx = classNames.bind(styles);
function Profile() {
    const currentUser = true;
    const [data, setData] = useState(null);
    const [video, setVideo] = useState([]);
    const [activeTab, setActiveTab] = useState('video-tabs');
    const [unFollow, setUnfollow] = useState(false);

    const params = useParams();
    const context = useContext(ModalContextKey);

    useEffect(() => {
        const fetchApi = async () => {
            const result = await accountService.getUserAccount(params.nickname);

            setData(result);
            setVideo(result.videos);
        };

        fetchApi();
    }, [params.nickname]);

    useEffect(() => {
        context.setPropDataModalBlock(data);
    });

    return (
        <Fragment>
            {data === null && <ProfileLoading />}
            {!!data && (
                <div className={cx('container')}>
                    <div className={cx('info-container')}>
                        <div className={cx('info')}>
                            <div className={cx('profile')}>
                                <div className={cx('profile-avatar')}>
                                    <Image src={data?.avatar} />2
                                </div>
                                <div className={cx('profile-text')}>
                                    <div className={cx('nickname')}>{data?.nickname}</div>
                                    <div className={cx('name')}>{`${data?.first_name} ${data?.last_name}`}</div>
                                    {currentUser ? (
                                        <Button
                                            primary
                                            className={cx('follow-btn', { active: unFollow })}
                                            onClick={() => {
                                                return unFollow ? setUnfollow(false) : setUnfollow(true);
                                            }}
                                        >
                                            {unFollow ? 'Unfollow' : 'Follow'}
                                        </Button>
                                    ) : (
                                        <Button
                                            primary
                                            className={cx('follow-btn')}
                                            onClick={context.handleShowModalForm}
                                        >
                                            Follow
                                        </Button>
                                    )}
                                </div>
                            </div>
                            <div className={cx('profile-count')}>
                                <div className={cx('profile-item')}>
                                    <strong>{data?.followings_count}</strong>
                                    <p>Following</p>
                                </div>
                                <div className={cx('profile-item')}>
                                    <strong>{data?.followers_count}</strong>
                                    <p>Follower</p>
                                </div>
                                <div className={cx('profile-item')}>
                                    <strong>{data?.likes_count}</strong>
                                    <p>Likes</p>
                                </div>
                            </div>
                            <div className={cx('profile-bio')}>{data?.bio}</div>
                            <div className={cx('profile-link')}>
                                <LinkIcon />
                                <div className={cx('link-title')}>
                                    <strong>
                                        <a href="/">{data?.website_url}</a>
                                    </strong>
                                </div>
                            </div>
                        </div>
                        <div className={cx('info-more')}>
                            <ShareAction offset={[-120, 10]} placement="top">
                                <div>
                                    <ShareIcon />
                                </div>
                            </ShareAction>
                            <TippyHeadless
                                interactive
                                offset={[-80, 2]}
                                placement="bottom"
                                zIndex="1"
                                render={(attrs) => {
                                    return (
                                        <div tabIndex="-1" {...attrs}>
                                            <Wrapper>
                                                <div className={cx('more-container')}>
                                                    <div
                                                        className={cx('modal-item')}
                                                        onClick={context.handleShowModalReport}
                                                    >
                                                        <FlagIcon />
                                                        <div className={cx('title')}>Report</div>
                                                    </div>
                                                    <div className={cx('spliter')}></div>
                                                    {currentUser ? (
                                                        <div
                                                            className={cx('modal-item')}
                                                            onClick={context.handleShowModalBlock}
                                                        >
                                                            <BlockIcon />
                                                            <div className={cx('title')}>Block</div>
                                                        </div>
                                                    ) : (
                                                        <div
                                                            className={cx('modal-item')}
                                                            onClick={context.handleShowModalForm}
                                                        >
                                                            <BlockIcon />
                                                            <div className={cx('title')}>Block</div>
                                                        </div>
                                                    )}
                                                </div>
                                            </Wrapper>
                                        </div>
                                    );
                                }}
                            >
                                <div>
                                    <RowShowMoreIcon />
                                </div>
                            </TippyHeadless>
                        </div>
                    </div>
                    <div className={cx('video-container')}>
                        <div className={cx('tabs')}>
                            <div
                                className={cx('video-tabs', { active: activeTab === 'video-tabs' })}
                                onClick={() => {
                                    setActiveTab('video-tabs');
                                }}
                            >
                                Videos
                            </div>
                            <div
                                className={cx('liked-tab', { active: activeTab === 'liked' })}
                                onClick={() => {
                                    setActiveTab('liked');
                                }}
                            >
                                <PadlockIcon className={cx('padlock-icon')} />
                                Liked
                            </div>
                            <div className={cx('underline')}></div>
                        </div>

                        {activeTab === 'video-tabs' && <VideoTabs video={video} data={data} />}
                        {activeTab === 'liked' && <Liked data={data} />}
                    </div>
                </div>
            )}
        </Fragment>
    );
}

export default Profile;
