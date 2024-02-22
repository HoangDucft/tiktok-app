import Tippy from '@tippyjs/react/headless';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import propTypes from 'prop-types';

import styles from './SuggestedAccounts.module.scss';
import { Wrapper as PopperWrapper } from '~/components/Wrapper';
import AccountPreview from './AccountPreview';
import Image from '~/components/Image';
import { Link } from 'react-router-dom';

// import propTypes from 'prop-types'
const cx = classNames.bind(styles);

function AccountItem({ data }) {
    const {
        likes_count: likesCount,
        avatar: avatarUrl,
        nickname: userName,
        first_name: firstName,
        last_name: lastName,
        followers_count: followersCount,
        tick,
    } = data;

    const renderPreview = (props) => {
        return (
            <div tabIndex="-1" {...props}>
                <PopperWrapper>
                    <AccountPreview
                        avatarUrl={avatarUrl}
                        firstName={firstName}
                        lastName={lastName}
                        tick={tick}
                        userName={userName}
                        likesCount={likesCount}
                        followersCount={followersCount}
                    />
                </PopperWrapper>
            </div>
        );
    };

    return (
        <Link to={`/@${data.nickname}`}>
            <div>
                <Tippy
                    interactive
                    delay={[800, 0]}
                    appendTo={document.body}
                    offset={[-20, 0]}
                    placement="bottom"
                    render={renderPreview}
                >
                    <div className={cx('account-item')}>
                        <Image className={cx('avatar')} src={avatarUrl} alt={lastName} />
                        <div className={cx('item-info')}>
                            <p className={cx('nick-name')}>
                                <strong>{data.nickname}</strong>
                                {tick && <FontAwesomeIcon className={cx('check')} icon={faCircleCheck} />}
                            </p>
                            <p className={cx('title-name')}>{`${firstName} ${lastName}`}</p>
                        </div>
                    </div>
                </Tippy>
            </div>
        </Link>
    );
}
AccountItem.propTypes = {
    data: propTypes.any,
};
export default AccountItem;
