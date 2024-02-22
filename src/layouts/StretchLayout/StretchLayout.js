import propTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './StretchLayout.module.scss';
import Sidebar from '~/layouts/components/Sidebar';
import Header from '~/layouts/components/Header';
import { ArrowRightIcon } from '~/components/Icons';
import GetApp from '~/components/GetApp/GetApp';

const cx = classNames.bind(styles);
function StretchLayout({ children }) {
    return (
        <>
            <div className={cx('wrapper')}>
                <Header stretch />
                <div className={cx('container')}>
                    <Sidebar shrink />
                    <div className={cx('content')}>{children}</div>
                </div>
            </div>
            <GetApp />
        </>
    );
}
StretchLayout.propTypes = {
    children: propTypes.node.isRequired,
};
export default StretchLayout;
