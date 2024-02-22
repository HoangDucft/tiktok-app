import { useEffect, useState } from 'react';
import className from 'classnames/bind';
import propTypes from 'prop-types';

import { ArrowLeftIcon, ChevronDownIcon, XMarkIcon } from '~/components/Icons';
import styles from './ModalForm.module.scss';
import LayoutModal from '~/components/Modal/LayoutModal';
import { loginData, registerData } from './dataModalForm';

const cx = className.bind(styles);

function ModalForm({ handleClose }) {
    const [tabList, setTablist] = useState([loginData]);
    const [isClose, setIsClose] = useState(false);
    const [registering, setRegistering] = useState(false);
    const [fullListRegister, setFullListRegister] = useState(false);

    let currentTab = tabList[tabList.length - 1];

    const handleCloseModal = () => {
        setIsClose(true);
    };

    const handleGoToChildrenTab = (loginItem) => {
        const hasChildren = !!loginItem.children;
        if (hasChildren) {
            setTablist([...tabList, loginItem.children]);
        }
    };
    const handleBackToChildrenTap = () => {
        const newTabList = [...tabList];
        newTabList.pop();
        setTablist(newTabList);
    };

    const handleGoToLogin = () => {
        setTablist([loginData]);
        setRegistering(false);
    };

    const handleGoToRegister = () => {
        setTablist([registerData]);
        setRegistering(true);
    };

    if (registering && !fullListRegister) {
        const isArray = Array.isArray(currentTab.data);
        // giai thich : nếu là menu cấp 1 thì sẽ không gây lỗi vì lúc đó data là một mảng nên kiểm tra là mảng là true,
        //nhưng nếu qua menu cấp 2 của thằng con thì lúc đó thằng data là một component,
        //nên lúc đó sẽ gây ra lỗi khi dùng currentTab.data.slice vì lúc đó thằng currentTab.data không phải là mảng,
        //do đó ta phải check kiểm tra xem thằng currentTab.data có phải là  một mảng không ,
        //nếu là mảng thì cắt còn ko phải thì không làm gì cả
        if (isArray) {
            currentTab = { ...currentTab }; // Lúc đầu tablist là một mảng có 1 phần tử, sau đó bỏ dấu mảng ra và rải vào đó một object mới có 6 phần tử
            // và đưa vào một object mới, suy ra currentTab giờ có 2 object , sau khi render ra phần tử data có 3 phan tử
            // thì nó sẽ load lại trang web và sẽ cắt đi một phần tử lên lần render bây giờ sẽ là phần tử có 6 phần tử
            currentTab.data = currentTab.data.slice(0, 3);
        }
    }

    return (
        <LayoutModal className={cx('modal-wrapper')} isClose={isClose} handleClose={handleClose}>
            <div className={cx('container')}>
                {tabList.length > 1 && (
                    <div
                        className={cx('back-btn')}
                        onClick={() => {
                            handleBackToChildrenTap();
                        }}
                    >
                        <ArrowLeftIcon className={cx('back-icon')} />
                    </div>
                )}
                <h1 className={cx('login-title')}>{currentTab.title}</h1>
                {currentTab.type === 'component' ? (
                    <currentTab.data />
                ) : (
                    <div className={cx('inner')}>
                        <div className={cx('login-list')}>
                            {currentTab.data?.map((loginItem, index) => {
                                return (
                                    <button
                                        className={cx('login-item', { disable: loginItem.disable })}
                                        key={index}
                                        onClick={() => handleGoToChildrenTab(loginItem)}
                                    >
                                        <div className={cx('icon')}>{loginItem.icon}</div>
                                        <span className={cx('title')}>{loginItem.title}</span>
                                    </button>
                                );
                            })}

                            {registering && !fullListRegister && tabList.length === 1 && (
                                <div className={cx('expand-btn')} onClick={() => setFullListRegister(true)}>
                                    <ChevronDownIcon />
                                </div>
                            )}
                        </div>
                    </div>
                )}

                {/* {renderForm.showMore === false && (
                    <div className={cx('term-registration')}>
                        <p className={cx('main-title')}>
                            By continuing, you agree to TikTok's
                            <a href="/">
                                <strong className={cx('sub-title')}>Terms of Service</strong>
                            </a>
                            and confirm that you have read TikTok's
                            <a href="/">
                                <strong className={cx('sub-title')}>PrivLinkcy Policy</strong>
                            </a>
                        </p>
                    </div>
                )} */}
                <div className={cx('footer')}>
                    {registering ? <span>Already have an account?</span> : <span> Don't have an account?</span>}
                    <div className={cx('register-btn')} onClick={registering ? handleGoToLogin : handleGoToRegister}>
                        {registering ? <p>Log in</p> : <p>Sign up</p>}
                    </div>
                </div>
            </div>

            <div className={cx('close')} onClick={handleCloseModal}>
                <XMarkIcon />
            </div>
        </LayoutModal>
    );
}

ModalForm.propTypes = {
    handleClose: propTypes.func,
};

export default ModalForm;
