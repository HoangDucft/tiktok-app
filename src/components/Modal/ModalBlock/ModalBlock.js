import classNames from 'classnames/bind';
import propTypes from 'prop-types';
import { useEffect, useState } from 'react';

import Button from '~/components/Button';
import LayoutModal from '~/components/Modal/LayoutModal';
import styles from './ModalBlock.module.scss';

const cx = classNames.bind(styles);
function ModalBlock({ handleClose, propDataModalBlock }) {
    const [data, setData] = useState('');

    useEffect(() => {
        fetch(`https://tiktok.fullstack.edu.vn/api/users/@${propDataModalBlock.nickname}`)
            .then((res) => {
                return res.json();
            })
            .then((res) => {
                return setData(res.data);
            });
    }, []);

    return (
        <LayoutModal>
            <div className={cx('container')}>
                <div className={cx('heading')}>
                    {data.nickname} ({`${data.first_name} ${data.last_name}`})
                </div>
                <div className={cx('title')}>
                    They will not be able to send you messages, see your posts, or find your profile. This doesn't
                    include extended scenarios like multi-host livestreams, duets posted by others, or group chats you
                    both participate in. They will not be notified that you blocked them.
                </div>
                <div className={cx('button')}>
                    <Button className={cx('cancel-btn')} text outline onClick={handleClose}>
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
};

export default ModalBlock;
