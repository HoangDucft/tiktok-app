import classNames from 'classnames/bind';
import { useState, useEffect } from 'react';
import { useContext } from 'react';
import propTypes from 'prop-types';

import SuggestedAccounts from '~/components/SuggestedAccounts/SuggestedAccounts';
import Menu, { MenuItem } from './Menu';
import styles from './Sidebar.module.scss';
import config from '~/config';
import { accountService } from '~/services';
import {
    HomeIcon,
    GroupUserIcon,
    LiveIcon,
    HomeIconActive,
    GroupUserIconActive,
    LiveIconActive,
    MusicIcon,
    HashtagIcon,
} from '~/components/Icons';
import Button from '~/components/Button';
import request from '~/utils/requestHttp';
import { ModalContextKey } from '~/contexts/modalContext';
const cx = classNames.bind(styles);

function Sidebar({ shrink }) {
    const context = useContext(ModalContextKey);
    const currentUser = false;
    const [suggestedUsers, setSuggestedUsers] = useState([]);
    useEffect(() => {
        accountService
            .getSuggestedAccount({ page: 1, perPage: 5 })
            .then((data) => {
                setSuggestedUsers(data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <aside className={cx('wrapper', { shrink: shrink })}>
            <Menu>
                <MenuItem
                    to={config.routes.home}
                    title="For you"
                    icon={<HomeIcon />}
                    activeIcon={<HomeIconActive />}
                ></MenuItem>
                <MenuItem
                    to={config.routes.following}
                    title="Following"
                    icon={<GroupUserIcon />}
                    activeIcon={<GroupUserIconActive />}
                ></MenuItem>
                <MenuItem
                    to={config.routes.live}
                    title="Live"
                    icon={<LiveIcon />}
                    activeIcon={<LiveIconActive />}
                ></MenuItem>
            </Menu>

            {currentUser === false && (
                <div className={cx('loggin')}>
                    <span className={cx('loggin-title')}>
                        Log in to follow creators, like videos, and view comments.
                    </span>
                    <Button large outline onClick={context.handleShowModalForm}>
                        Log in
                    </Button>
                </div>
            )}

            <SuggestedAccounts label="Suggested Accounts" data={suggestedUsers} />

            <div className={cx('discover')}>
                <div className={cx('discover-list')}>
                    <p className={cx('title-list')}>Discover</p>
                    <div className={cx('hashtag')}>
                        <HashtagIcon />
                        <span>HotTrend2022</span>
                    </div>
                    <div className={cx('hashtag')}>
                        {<MusicIcon />}
                        <span>Bong Hong Gai - Jack97</span>
                    </div>
                    <div className={cx('hashtag')}>
                        <HashtagIcon />
                        <span>Cuộc Sống Và Du Lịch - chill for fun</span>
                    </div>
                    <div className={cx('hashtag')}>
                        {<MusicIcon />}
                        <span>Đi về nhà - Đen Vâu</span>
                    </div>
                    <div className={cx('hashtag')}>
                        <HashtagIcon />
                        <span>gear 5 luffy</span>
                    </div>
                    <div className={cx('hashtag')}>
                        {<MusicIcon />}
                        <span>Hoàng Thùy Linh và các ca khúc hot - idol </span>
                    </div>
                    <div className={cx('hashtag')}>
                        <HashtagIcon />
                        <span>Chiến tranh Ukraina</span>
                    </div>
                    <div className={cx('hashtag')}>
                        <HashtagIcon />
                        <span>Nghịch tử giết gia đình - giấu xác tại bệnh viện bỏ hoang trong rừng </span>
                    </div>
                    <div className={cx('hashtag')}>
                        <HashtagIcon />
                        <span>Giải cứu bé Hạo Nam</span>
                    </div>
                    <div className={cx('hashtag')}>
                        {<MusicIcon />}
                        <span>Beautiful love - Anyadra ken</span>
                    </div>
                </div>
            </div>

            <div className={cx('footer')}>
                <div className={cx('link')}>
                    <a className={cx('navigation')} href="/">
                        About
                    </a>
                    <a className={cx('navigation')} href="/">
                        TikTok Browse
                    </a>
                    <a className={cx('navigation')} href="/">
                        Newsroom
                    </a>
                    <a className={cx('navigation')} href="/">
                        Contact
                    </a>
                    <a className={cx('navigation')} href="/">
                        Carrers
                    </a>
                    <a className={cx('navigation')} href="/">
                        ByteDance
                    </a>
                </div>
                <div className={cx('link')}>
                    <a className={cx('navigation')} href="/">
                        TikTok for Good
                    </a>
                    <a className={cx('navigation')} href="/">
                        Advertise
                    </a>
                    <a className={cx('navigation')} href="/">
                        Developers
                    </a>
                    <a className={cx('navigation')} href="/">
                        Transparency
                    </a>
                    <a className={cx('navigation')} href="/">
                        TikTok Rewards
                    </a>
                </div>
                <div className={cx('link')}>
                    <a className={cx('navigation')} href="/">
                        Help
                    </a>
                    <a className={cx('navigation')} href="/">
                        Safety
                    </a>
                    <a className={cx('navigation')} href="/">
                        Terms
                    </a>
                    <a className={cx('navigation')} href="/">
                        Privacy
                    </a>
                    <a className={cx('navigation')} href="/">
                        Creator Portal
                    </a>
                    <a className={cx('navigation')} href="/">
                        Community Guidelines
                    </a>
                </div>
                <span className={cx('coppy-right')}> © 2023 - Make TikTok Web By | Hoàng Đức</span>
            </div>
        </aside>
    );
}

Sidebar.propTypes = {
    shrink: propTypes.any,
};

export default Sidebar;
