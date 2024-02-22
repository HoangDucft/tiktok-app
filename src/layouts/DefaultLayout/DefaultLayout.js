import propTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './DefaultLayout.module.scss';
import Sidebar from '../components/Sidebar';
import Header from '~/layouts/components/Header';
import { ArrowRightIcon } from '~/components/Icons';
import GetApp from '~/components/GetApp/GetApp';

const cx = classNames.bind(styles);
function DefaultLayout({ children }) {
    return (
        <>
            <div className={cx('wrapper')}>
                <Header />
                <div className={cx('container')}>
                    <Sidebar />
                    <div className={cx('content')}>{children}</div>
                </div>
            </div>
            <GetApp />
        </>
    );
}
DefaultLayout.propTypes = {
    children: propTypes.node.isRequired,
};
export default DefaultLayout;
