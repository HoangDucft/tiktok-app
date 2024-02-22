import { useState, useEffect, useMemo } from 'react';
import className from 'classnames/bind';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';

import {
    AppleIcon,
    ChevronDownIcon,
    FaceBookIcon,
    GoogleIcon,
    InstagramIcon,
    KaraoTalkIcon,
    LineIcon,
    LinkedinIcon,
    QRIcon,
    UserIcon,
    XMarkIcon,
} from '~/components/Icons';
import styles from './ModalForm.module.scss';
import LayoutModal from '~/components/Modal/LayoutModal';
const cx = className.bind(styles);

function ModalForm({ handleClose }) {
    const [modalForm, setModalForm] = useState('login');
    const [renderForm, setRenderForm] = useState([]);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const MODAL_MENU = useMemo(
        () => [
            {
                type: 'login',
                title: 'Log in to TikTok',
                childrens: [
                    {
                        icon: <QRIcon />,
                        title: 'Use QR Code',
                    },
                    {
                        icon: <UserIcon />,
                        title: 'Use phone/ email/ username',
                    },
                    {
                        icon: <FaceBookIcon />,
                        title: 'Continue with FaceBook',
                    },
                    {
                        icon: <GoogleIcon />,
                        title: 'Continue with Google',
                    },
                    {
                        icon: <LinkedinIcon />,
                        title: 'Continue with Twitter',
                    },
                    {
                        icon: <LineIcon />,
                        title: 'Continue with Line',
                    },
                    {
                        icon: <KaraoTalkIcon />,
                        title: 'Continue with Karaotalk',
                    },
                    {
                        icon: <AppleIcon />,
                        title: 'Continue with Apple',
                    },
                    {
                        icon: <InstagramIcon />,
                        title: 'Continue with Instagram',
                    },
                ],
            },
            {
                type: 'register',
                title: 'Sign up for TikTok',
                showMore: true,
                childrens: [
                    {
                        title: 'Use phone or  email',
                        icon: <UserIcon />,
                    },
                    {
                        title: 'Continue with Facebook',
                        icon: <FaceBookIcon />,
                    },
                    {
                        title: 'Continue with Google',
                        icon: <GoogleIcon />,
                    },
                ],
            },
            {
                type: 'register-expanded',
                title: 'Sign up for TikTok',
                childrens: [
                    {
                        title: 'Use phone or  email',
                        icon: <UserIcon />,
                    },
                    {
                        title: 'Continue with Facebook',
                        icon: <FaceBookIcon />,
                    },
                    {
                        title: 'Continue with Google',
                        icon: <GoogleIcon />,
                    },
                    {
                        title: 'Use phone or  Twitter',
                        icon: <LinkedinIcon />,
                    },
                    {
                        title: 'Continue with LINE',
                        icon: <LineIcon />,
                    },
                    {
                        title: 'Continue with KaraoTalk',
                        icon: <KaraoTalkIcon />,
                    },
                ],
            },
        ],
        [],
    );

    useEffect(() => {
        const currentForm = MODAL_MENU.find((form) => {
            return form.type === modalForm;
        });
        setRenderForm(currentForm);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [modalForm]);

    return (
        <LayoutModal>
            <div className={cx('wrapper')}>
                <div className={cx('container')}>
                    <div className={cx('inner')}>
                        <h1 className={cx('login-title')}>{renderForm.title}</h1>
                        <div className={cx('login-list')}>
                            {renderForm.childrens?.map((children, index) => {
                                return (
                                    <button className={cx('login-item')} key={index}>
                                        <div className={cx('icon')}>{children.icon}</div>
                                        <span className={cx('title')}>{children.title}</span>
                                    </button>
                                );
                            })}
                            {renderForm.showMore && (
                                <>
                                    <div className={cx('expand-btn')} onClick={() => setModalForm('register-expanded')}>
                                        <ChevronDownIcon />
                                    </div>
                                    <p className={cx('main-title')}>
                                        By continuing, you agree to TikTok's
                                        {
                                            <Link to="">
                                                <strong className={cx('sub-title')}>Terms of Service</strong>
                                            </Link>
                                        }
                                        and confirm that you have read TikTok's
                                        {
                                            <Link to="">
                                                <strong className={cx('sub-title')}>PrivLinkcy Policy</strong>
                                            </Link>
                                        }
                                    </p>
                                </>
                            )}
                        </div>
                    </div>
                    <div className={cx('footer')}>
                        {modalForm === 'login' ? (
                            <>
                                <span> Don't have an account?</span>
                                <p onClick={() => setModalForm('register')}>Sign up</p>
                            </>
                        ) : (
                            <>
                                <span>Already have an account?</span>
                                <p onClick={() => setModalForm('login')}>Log in</p>
                            </>
                        )}
                    </div>
                </div>

                <div className={cx('close')} onClick={handleClose}>
                    <XMarkIcon />
                </div>
            </div>
        </LayoutModal>
    );
}

ModalForm.propTypes = {
    handleClose: propTypes.func,
};

export default ModalForm;
