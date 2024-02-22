import propTypes from 'prop-types';

import AccountItem from './AccountItem';
import classNames from 'classnames/bind';
import styles from './SuggestedAccounts.module.scss';
const cx = classNames.bind(styles);

function FollowingAccounts({ label, data = [] }) {
    return (
        <div className={cx('wrapper')}>
            <p className={cx('label')}>{label}</p>
            {data?.map((account) => (
                <AccountItem key={account.id} data={account} />
            ))}
            <p className={cx('more-btn')}>See all</p>
        </div>
    );
}
FollowingAccounts.propTypes = {
    label: propTypes.string.isRequired,
    data: propTypes.array.isRequired,
};
export default FollowingAccounts;
