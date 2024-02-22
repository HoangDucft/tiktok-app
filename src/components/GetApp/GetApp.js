import classNames from 'classnames/bind';
import TippyHeadless from '@tippyjs/react/headless';
import { useState, useEffect, useContext } from 'react';

import styles from './GetApp.module.scss';
import Button from '~/components/Button';
import { ForwardStepIcon, PCIcon, SmartPhoneIcon, XMarkIcon } from '~/components/Icons';
import { Wrapper } from '~/components/Wrapper';
import { ModalContextKey } from '~/contexts/modalContext';

const cx = classNames.bind(styles);

function GetApp() {
    const context = useContext(ModalContextKey);
    const [active, setActive] = useState(false);

    const ScrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                setActive(true);
            } else {
                setActive(false);
            }
        });
    }, []);
    return (
        <div className={cx('wrapper', { active: active })}>
            <div className={cx('get-app-container')}>
                <TippyHeadless
                    interactive
                    trigger="click"
                    offset={[0, -30]}
                    placement="top-end"
                    zIndex="99"
                    render={(attrs) => (
                        <Wrapper>
                            <div tabIndex="-1" {...attrs}>
                                <div className={cx('tippy-inner')}>
                                    <div className={cx('item')}>
                                        <div className={cx('icon')}>
                                            <PCIcon />
                                        </div>
                                        <span className={cx('title')}>
                                            <strong>Get TikTok for desktop</strong>
                                        </span>
                                    </div>
                                    <span className={cx('spliter')}></span>

                                    <div className={cx('item')} onClick={context.handleShowModalGetApp}>
                                        <div className={cx('icon')}>
                                            <SmartPhoneIcon />
                                        </div>
                                        <span className={cx('title')}>
                                            <strong>Get TikTok App</strong>
                                        </span>
                                    </div>
                                </div>
                                <div className={cx('close-btn')}>
                                    <XMarkIcon />
                                </div>
                            </div>
                        </Wrapper>
                    )}
                >
                    <Button className={cx('get-app-btn')} rouded>
                        <strong>Get app</strong>
                    </Button>
                </TippyHeadless>
            </div>
            <div
                className={cx('back-to-top')}
                onClick={() => {
                    ScrollToTop();
                }}
            >
                <ForwardStepIcon />
            </div>
        </div>
    );
}

export default GetApp;
