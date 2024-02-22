import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import { faKeyboard } from '@fortawesome/free-regular-svg-icons';
import { useContext } from 'react';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import styles from './Header.module.scss';
import images from '~/assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faPlus,
    faLanguage,
    faCircleQuestion,
    faUser,
    faCoins,
    faGear,
    faSignOut,
} from '@fortawesome/free-solid-svg-icons';

import Button from '~/components/Button';
import Menu from '~/components/Menu';
import Image from '~/components/Image';
import config from '~/config';
import Search from '~/layouts/components/Search';
import { ColumnShowMoreIcon, InboxIcon, MessageIcon, UploadIcon } from '~/components/Icons';
import { ModalContextKey } from '~/contexts/modalContext';

const cx = classNames.bind(styles);

function Header({ stretch }) {
    const currentUser = true;
    const context = useContext(ModalContextKey);

    const handleChange = (menuItem) => {
        console.log(menuItem);
    };

    const MENU_ITEMS = [
        {
            icon: <FontAwesomeIcon icon={faLanguage}></FontAwesomeIcon>,
            title: 'English',
            children: {
                title: 'Language',
                data: [
                    {
                        type: 'language',
                        code: 'EN',
                        title: 'English',
                    },
                    {
                        type: 'language',
                        code: 'VI',
                        title: 'Tiếng Việt',
                    },
                ],
            },
        },
        {
            icon: <FontAwesomeIcon icon={faCircleQuestion}></FontAwesomeIcon>,
            title: 'Feedback and help',
            to: '/feedback',
        },
        {
            icon: <FontAwesomeIcon icon={faKeyboard}></FontAwesomeIcon>,
            title: 'keyboard shortcuts',
        },
    ];

    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>,
            title: 'View profile',
            to: '/hvd102020iku',
        },
        {
            icon: <FontAwesomeIcon icon={faCoins}></FontAwesomeIcon>,
            title: 'Get coins',
            to: '/getcoin',
        },
        {
            icon: <FontAwesomeIcon icon={faGear}></FontAwesomeIcon>,
            title: 'Setting',
            to: '/setting',
        },
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faSignOut}></FontAwesomeIcon>,
            title: 'Log out',
            to: '/logout',
            separate: true,
        },
    ];

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner', { stretch: stretch })}>
                <Link to={config.routes.home} className={cx('logo-link')}>
                    <img src={images.logo} alt="TikTok" />
                </Link>

                <Search />

                <div className={cx('actions')}>
                    {currentUser ? (
                        <>
                            <Tippy content="Upload video" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <UploadIcon className={cx('upload-icon')} />
                                </button>
                            </Tippy>
                            <Tippy content="Message" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <MessageIcon className={cx('message-icon')} />
                                </button>
                            </Tippy>
                            <Tippy content="Inbox" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <InboxIcon className={cx('inbox-icon')} />
                                    <span className={cx('badge')}>12</span>
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button
                                text
                                onClick={context.handleShowModalForm}
                                leftIcon={<FontAwesomeIcon icon={faPlus} />}
                            >
                                Upload
                            </Button>
                            <Button primary onClick={context.handleShowModalForm}>
                                Log in
                            </Button>
                        </>
                    )}

                    <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleChange}>
                        {currentUser ? (
                            <Image
                                className={cx('user-avatar')}
                                src="https://scontent.fdad1-4.fna.fbcdn.net/v/t39.30808-1/324334893_535464408543422_5974447694415723186_n.jpg?stp=dst-jpg_p320x320&_nc_cat=103&ccb=1-7&_nc_sid=7206a8&_nc_ohc=cOWyiATN4AYAX-_j4ZS&_nc_ht=scontent.fdad1-4.fna&oh=00_AfC68vULHq0_tQ2Wmq63ob3Bz2CMJAzCJcJdGsj5rFyFxw&oe=63DEADCC"
                                alt="Hvd102020iku"
                            ></Image>
                        ) : (
                            <button className={cx('more-btn')}>
                                <ColumnShowMoreIcon />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
