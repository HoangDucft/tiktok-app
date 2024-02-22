import classNames from 'classnames/bind';
import propTypes from 'prop-types';

import Button from '~/components/Button';
import LayoutModal from '~/components/Modal/LayoutModal';
import styles from './ModalBlock.module.scss';
import { useState } from 'react';

const cx = classNames.bind(styles);
function ModalBlock({ handleClose, propDataModalBlock }) {
    const [isClose, setIsClose] = useState(false);

    const { nickname, first_name: firstName, last_name: lastName } = propDataModalBlock;
    const handleCloseModal = () => {
        setIsClose(true);
    };
    return (
        <LayoutModal isClose={isClose} handleClose={handleClose}>
            <div className={cx('container')}>
                <div className={cx('heading')}>
                    {firstName && lastName ? ` ${nickname} (${firstName} ${lastName})` : nickname}
                </div>
                <div className={cx('title')}>
                    They will not be able to send you messages, see your posts, or find your profile. This doesn't
                    include extended scenarios like multi-host livestreams, duets posted by others, or group chats you
                    both participate in. They will not be notified that you blocked them.
                </div>
                <div className={cx('button')}>
                    <Button className={cx('cancel-btn')} text outline onClick={handleCloseModal}>
                        Cancel
                    </Button>
                    <Button className={cx('block-btn')} outline>
                        Block
                    </Button>
                </div>
            </div>
        </LayoutModal>
    );
}
ModalBlock.propTypes = {
    handleClose: propTypes.func,
    propDataModalBlock: propTypes.object,
};

export default ModalBlock;
