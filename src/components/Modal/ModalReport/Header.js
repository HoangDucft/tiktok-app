import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './ModalReport.module.scss';
import propTypes from 'prop-types';
import { ArrowLeftIcon, XMarkIcon } from '~/components/Icons';

const cx = classNames.bind(styles);

function Header({ title, history, handleClose, onBack }) {
    return (
        <div className={cx('header')}>
            {history.length > 1 && (
                <button className={cx('back-btn')} onClick={onBack}>
                    <ArrowLeftIcon />
                </button>
            )}
            <h4 className={cx('header-title')}>{title}</h4>
            <div className={cx('close')} onClick={handleClose}>
                <XMarkIcon />
            </div>
        </div>
    );
}
Header.propTypes = {
    title: propTypes.string.isRequired,
    onBack: propTypes.func,
};
export default Header;
