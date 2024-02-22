import className from 'classnames/bind';
import TippyHeadless from '@tippyjs/react/headless';
import { useContext } from 'react';
import { Wrapper as PopperWrapper } from '~/components/Wrapper';

import styles from './CommentItem.module.scss';
import images from '~/assets/images';
import Image from '~/components/Image';
import { ModalContextKey } from '~/contexts/modalContext';
import { HeartIconRegular, RowShowMoreIcon, FlagIcon } from '~/components/Icons';
const cx = className.bind(styles);
function CommentItem() {
    const context = useContext(ModalContextKey);

    const renderMore = (props) => {
        return (
            <div tabIndex="-1" {...props}>
                <PopperWrapper>
                    <div className={cx('showmore-wrapper')} onClick={context.handleShowModalReport}>
                        <FlagIcon className={cx('showmore-icon-flag')} />
                        <strong className={cx('showmore-title')}>Report</strong>
                    </div>
                </PopperWrapper>
            </div>
        );
    };
    return (
        <div className={cx('comment-item')}>
            <Image className={cx('comment-avatar')} src={images.denisdangImage} />
            <div className={cx('comment-info')}>
                <div className={cx('comment-nickname')}>
                    <a href="/">Dennis Dang</a>
                </div>
                <div className={cx('comment-content')}>video so funny fufufufufufuffufufufufufufufu</div>
                <div className={cx('comment-other')}>
                    <div className={cx('comment-day')}>30/04/1975</div>
                    <div className={cx('comment-repply')}>Repply</div>
                </div>
            </div>
            <div className={cx('comment-like')}>
                <div>
                    <TippyHeadless interactive offset={[0, -6]} placement="bottom-end" render={renderMore}>
                        <div>
                            <RowShowMoreIcon className={cx('comment_showmore-icon')} />
                        </div>
                    </TippyHeadless>
                </div>
                <div onClick={context.handleShowModalForm}>
                    <HeartIconRegular className={cx('comment_heart-icon')} />
                </div>
                <div className={cx('count-hearts ')}>20.6M</div>
            </div>
        </div>
    );
}

export default CommentItem;
