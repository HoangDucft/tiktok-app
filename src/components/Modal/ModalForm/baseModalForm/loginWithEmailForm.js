import classNames from 'classnames/bind';
import styles from './baseModalForm.module.scss';
import { useState } from 'react';
import Button from '~/components/Button/Button';
import { EyeHideIcon, EyeShowIcon } from '~/components/Icons';

const cx = classNames.bind(styles);

function LoginWithEmailForm() {
    const [showPassword, setShowPassword] = useState(false);

    //init state
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleChangEmail = (e) => {
        setEmail(e.target.value);
    };

    const handleChangePassword = (e) => {
        const value = e.target.value;
        const invalidPassword = value.includes(' ');
        invalidPassword || setPassword(e.target.value);
    };

    return (
        <div className={cx('container')}>
            <div className={cx('header-title')}>Email or Tiktok ID</div>
            <div className={cx('form-input')}>
                <input type="email" value={email} placeholder="Email or TikTok ID" onChange={handleChangEmail}></input>
            </div>
            <div className={cx('form-input')}>
                <input
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    placeholder="Password"
                    onChange={handleChangePassword}
                ></input>
                <div className={cx('show-password')} onClick={() => setShowPassword(showPassword ? false : true)}>
                    {showPassword ? <EyeShowIcon /> : <EyeHideIcon />}
                </div>
            </div>
            <div className={cx('inner-title')}>Forget password?</div>
            <Button className={cx('submit-btn', { disabled: !email || !password })} large primary>
                Login
            </Button>
        </div>
    );
}

export default LoginWithEmailForm;
