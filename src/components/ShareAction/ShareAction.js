import TippyHeadless from '@tippyjs/react/headless';
import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import propTypes from 'prop-types';

import {
    EmailIcon,
    EmbedIcon,
    FaceBookIcon,
    LineIcon,
    LinkedinIcon,
    LinkRoundedIcon,
    PaperPlaneIcon,
    PinterestIcon,
    RedditIcon,
    TelegramIcon,
    TwitterIcon,
    WhatsApp,
    ChevronDownIcon,
} from '~/components/Icons';
import { Wrapper } from '~/components/Wrapper';
import styles from './ShareAction.module.scss';

const cx = classNames.bind(styles);
function ShareAction({ children, offset, placement }) {
    const [type, setType] = useState('share');
    const [render, setRender] = useState([]);

    const SHARE_MENU = [
        {
            type: 'share',
            childrens: [
                {
                    icon: <PaperPlaneIcon />,
                    title: 'Embed',
                },
                {
                    icon: <EmbedIcon />,
                    title: 'Send to friends',
                },
                {
                    icon: <FaceBookIcon />,
                    title: 'Share to Facebook',
                },
                {
                    icon: <WhatsApp />,
                    title: 'Share to WhatsApp',
                },
                {
                    icon: <LinkRoundedIcon />,
                    title: 'Copy link',
                },
            ],
        },
        {
            type: 'share-expanded',
            showmore: true,
            childrens: [
                {
                    icon: <PaperPlaneIcon />,
                    title: 'Embed',
                },
                {
                    icon: <EmbedIcon />,
                    title: 'Send to friends',
                },
                {
                    icon: <FaceBookIcon />,
                    title: 'Share to Facebook',
                },
                {
                    icon: <WhatsApp />,
                    title: 'Share to WhatsApp',
                },
                {
                    icon: <LinkRoundedIcon />,
                    title: 'Copy link',
                },
                {
                    icon: <TwitterIcon />,
                    title: 'Share to twitter',
                },
                {
                    icon: <LinkedinIcon />,
                    title: 'Share to LinkedIn',
                },
                {
                    icon: <RedditIcon />,
                    title: 'Share to Reddit',
                },
                {
                    icon: <LinkRoundedIcon />,
                    title: 'Copy link',
                },
                {
                    icon: <TelegramIcon />,
                    title: 'Share to Telegram',
                },
                {
                    icon: <EmailIcon />,
                    title: 'Share to Email',
                },
                {
                    icon: <LineIcon />,
                    title: 'Share to Line',
                },
                {
                    icon: <PinterestIcon />,
                    title: 'Share to Pinterest',
                },
            ],
        },
    ];

    useEffect(() => {
        const current = SHARE_MENU?.find((item) => {
            return item.type === type;
        });
        setRender(current);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [type]);

    return (
        // thẻ div ở đây để fix lỗi thêm một thể div bên ngoài tippy
        <div>
            <TippyHeadless
                interactive
                placement={placement}
                offset={offset}
                delay={[0, 900]}
                render={(attrs) => (
                    <Wrapper>
                        <div className={cx('share-list')} tabIndex="-1" {...attrs}>
                            {render.childrens?.map((children, index) => (
                                <div className={cx('share-item')} key={index}>
                                    <div className={cx('share-icon')}>{children.icon}</div>
                                    <div className={cx('share-title')}>
                                        <strong>{children.title}</strong>
                                    </div>
                                </div>
                            ))}
                            {render.showmore ? null : (
                                <div
                                    className={cx('expanded-icon')}
                                    onClick={() => {
                                        setType('share-expanded');
                                    }}
                                >
                                    <ChevronDownIcon />
                                </div>
                            )}
                        </div>
                    </Wrapper>
                )}
                onHide={() => setType('share')}
            >
                {children}
            </TippyHeadless>
        </div>
    );
}
ShareAction.propTypes = {
    children: propTypes.node.isRequired,
    offset: propTypes.array,
};
export default ShareAction;
