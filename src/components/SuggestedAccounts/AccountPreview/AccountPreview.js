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

function Preview({ data }) {
    const context = useContext(ModalContextKey);
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <Image className={cx('avatar')} src={data.avatar} alt={data.last_name} />
                <Button primary onClick={context.handleShowModalForm}>
                    Follow
                </Button>
            </div>
            <div className={cx('body')}>
                <p className={cx('nickname')}>
                    <strong>{`${data.first_name} ${data.last_name}`}</strong>
                    {data.tick && <FontAwesomeIcon className={cx('check')} icon={faCircleCheck} />}
                </p>
                <p className={cx('name')}>{data.nickname}</p>
                <p className={cx('analitics')}>
                    <strong className={cx('value')}>{data.followers_count}</strong>
                    <span className={cx('label')}>Follower</span>
                    <strong className={cx('value')}>{data.likes_count}M</strong>
                    <span className={cx('label')}>Like</span>
                </p>
            </div>
        </div>
    );
}

Preview.propTypes = {
    data: propTypes.object.isRequired,
};

export default Preview;
