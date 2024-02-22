import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { useState } from 'react';
import propTypes from 'prop-types';

import styles from './Menu.module.scss';
import { Wrapper as PopperWrapper } from '~/components/Wrapper';
import MenuItem from './MenuItem';
import Header from './Header';
const cx = classNames.bind(styles);

const defaultFn = () => {};

function Menu({ children, items = [], onChange = defaultFn, hideOnClick = false }) {
    // biến items ở đây đó chính là mảng được truyền từ bên kia vào
    // dùng destructuring lấy ra object bên trong cái mảng đó
    // sau đó thì lại đặt các object đó vào trong prop data ở bên trong một mảng như phía dưới
    const [history, setHistory] = useState([{ data: items }]);

    // items đầu tiên là một mảng nhưng dùng destructuring thì lấy ra 3 cái object và bỏ mảng đi
    // 3 cái object được lưu vào prop data ( muốn lưu object vào một prop thì phải đưa vào mảng lên prop data thành một mảng có 3 object )
    // và đưa data vào một mảng ngoài cùng , data trở thành một phần tử lên phải đưa vào một object
    //console.log(history) or current ra nhìn thấy rõ cấu trúc

    //biến current bằng cái mảng history lấy đến phần tử độ dài mảng history -1 ,
    // độ dài mảng history la 1 (đó là object chứa prop data ) - 1 là về [0] : là đầu mảng cũng là cuối mảng
    const current = history[history.length - 1];

    const handleResetToFirstPage = () => {
        setHistory((prev) => prev.slice(0, 1));
    };
    const handleBack = () => {
        setHistory((prev) => prev.slice(0, prev.length - 1));
    };

    const renderItems = () => {
        return current.data.map((item, index) => {
            const isParent = !!item.children;
            return (
                <MenuItem
                    key={index}
                    data={item}
                    onClick={() => {
                        if (isParent) {
                            setHistory((prev) => [...prev, item.children]);
                        } else {
                            onChange(item);
                        }
                    }}
                ></MenuItem>
            );
        });
    };

    return (
        <Tippy
            interactive
            hideOnClick={hideOnClick}
            offset={[-90, 8]}
            delay={[0, 700]}
            onHide={handleResetToFirstPage}
            render={(attrs) => (
                <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                    <PopperWrapper className={cx('menu-poper')}>
                        {history.length > 1 && <Header title={current.title} onBack={handleBack} />}
                        <div className={cx('menu-body')}>{renderItems()}</div>
                    </PopperWrapper>
                </div>
            )}
        >
            {children}
        </Tippy>
    );
}
Menu.propTypes = {
    children: propTypes.node.isRequired,
    items: propTypes.array,
    onChange: propTypes.func,
    hideOnClick: propTypes.func,
};
export default Menu;
