import { Fragment, useState, useEffect } from 'react';
import className from 'classnames/bind';
import propTypes from 'prop-types';

import styles from './ModalReport.module.scss';
import Header from './Header';
import Button from '../../Button';
import LayoutModal from '../LayoutModal';

const cx = className.bind(styles);

function ModalReport({ handleClose, items = [] }) {
    const [typeReport, setTypeReport] = useState(false);
    const [history, setHistory] = useState([{ data: items }]);

    const current = history[history.length - 1];
    const handleBack = () => {
        setHistory((prev) => prev.slice(0, prev.length - 1));
    };

    useEffect(() => {
        current.data?.find((children) => {
            // console.log(children);
            if (children.type === 'send-report') {
                setTypeReport(true);
            } else {
                setTypeReport(false);
            }
        });
    }, [current]);

    return (
        <LayoutModal>
            <div className={cx('wrapper')}>
                <Header history={history} title="Báo cáo" handleClose={handleClose} onBack={handleBack} />
                {typeReport === true ? (
                    <div className={cx('container')}>
                        <div className={cx('warning-title')}>Chúng tôi không cho phép: </div>
                        <div className={cx('warning-list')}>
                            {current.data?.map((item, index) => {
                                return (
                                    <div className={cx('text-item')} key={index}>
                                        <li className={cx('text-title')}>{item.title}</li>
                                    </div>
                                );
                            })}
                        </div>
                        <div className={cx('send-report')}>
                            <Button className={cx('send-btn')} primary small>
                                Gửi
                            </Button>
                        </div>
                    </div>
                ) : (
                    <div className={cx('container')}>
                        <div className={cx('report-title')}>Vui lòng chọn tình huống</div>
                        <div className={cx('report-list')}>
                            {current.data?.map((item, index) => {
                                const isParent = !!item.children;
                                return (
                                    <Fragment key={index}>
                                        <div
                                            className={cx('report-item')}
                                            onClick={() => {
                                                if (isParent) {
                                                    setHistory((prev) => [...prev, item.children]);
                                                }
                                            }}
                                        >
                                            <div className={cx('title')}>{item.title}</div>
                                            <div className={cx('icon')}>{item.icon}</div>
                                        </div>
                                    </Fragment>
                                );
                            })}
                        </div>
                    </div>
                )}
            </div>
        </LayoutModal>
    );
}

ModalReport.propTypes = {
    handleClose: propTypes.func,
    item: propTypes.array,
};

export default ModalReport;
