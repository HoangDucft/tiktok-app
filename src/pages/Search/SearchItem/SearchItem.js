import className from 'classnames/bind';
import styles from './SearchItem.module.scss';
import Image from '~/components/Image/Image';

const cx = className.bind(styles);
function SearchItem({ data }) {
    return (
        <div className={cx('result-item')}>
            <Image className={cx('result-image')} src={data?.avatar} alt={data?.nickname} />
            <div className={cx('result-info')}>
                <div className={cx('nickname')}>
                    <strong>{data?.nickname}</strong>
                </div>
                <div className={cx('group-info')}>
                    <div className={cx('username')}>{data?.full_name}</div>
                    {`-`}
                    <div className={cx('follower')}>
                        <strong className={cx('follower-count')}>{data?.followers_count}</strong>
                        Follower
                    </div>
                </div>
                <div className={cx('bio')}>{data?.bio}</div>
            </div>
        </div>
    );
}

export default SearchItem;
