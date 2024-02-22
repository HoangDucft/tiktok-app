import className from 'classnames/bind';

import styles from './CommentShow.module.scss';
import CommentItem from '../CommentItem';

const cx = className.bind(styles);
function CommentShow() {
    return (
        <div className={cx('comment-list_container')}>
            <CommentItem />
        </div>
    );
}

export default CommentShow;
