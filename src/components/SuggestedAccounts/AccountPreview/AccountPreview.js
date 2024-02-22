import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import propTypes from 'prop-types';
import { useContext } from 'react';

import classNames from 'classnames/bind';
import Button from '~/components/Button';
import Image from '~/components/Image';
import styles from './AccountPreview.module.scss';
import { ModalContextKey } from '~/contexts/modalContext';
const cx = classNames.bind(styles);

function Preview({ avatarUrl, firstName, lastName, tick, userName, likesCount, followersCount }) {
    const context = useContext(ModalContextKey);
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <Image className={cx('avatar')} src={avatarUrl} alt={lastName} />
                <Button primary onClick={context.handleShowModalForm}>
                    Follow
                </Button>
            </div>
            <div className={cx('body')}>
                <p className={cx('nickname')}>
                    <strong>{`${firstName} ${lastName}`}</strong>
                    {tick && <FontAwesomeIcon className={cx('check')} icon={faCircleCheck} />}
                </p>
                <p className={cx('name')}>{userName}</p>
                <p className={cx('analitics')}>
                    <strong className={cx('value')}>{followersCount}</strong>
                    <span className={cx('label')}>Follower</span>
                    <strong className={cx('value')}>{likesCount}M</strong>
                    <span className={cx('label')}>Like</span>
                </p>
            </div>
        </div>
    );
}

Preview.propTypes = {
    children: propTypes.element,
    className: propTypes.string,
    avatarUrl: propTypes.string,
    userName: propTypes.string,
    fullName: propTypes.string,
    tick: propTypes.bool,
    bio: propTypes.string,
};

export default Preview;
