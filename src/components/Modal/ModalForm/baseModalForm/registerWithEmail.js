import classNames from 'classnames/bind';
import styles from './baseModalForm.module.scss';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { EyeHideIcon, EyeShowIcon, TickBoxIcon, WarningIcon } from '~/components/Icons';
import Button from '~/components/Button/Button';
import { register } from '~/redux/slices/authSlice';

const cx = classNames.bind(styles);

const passwordRules = [
    {
        name: '8 to 20 characters',

        // state = null : default, true: ok , flase : not ok
        state: null,
        check: (password) => {
            if (password.length < 8) {
                return false;
            } else if (password.length > 20) {
                return false;
            } else if (password.length >= 8 && password.length <= 20) {
                return true;
            }
        },
    },
    {
        name: 'Letters, numbers and special characters',

        // state = null : default, true: ok , flase : not ok
        state: null,
        check: (password) => {
            const regex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&^+-])[A-Za-z\d@$!%*#?&^+-]*$/;
            return regex.test(password);
        },
    },
];

function RegisterWithEmail() {
    //input state
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    //error state ( message)
    const [isEmailError, setIsEmailError] = useState(false);
    const [emailErrorMessage, setEmailErrorMessage] = useState('');
    const [isPassWordError, setIsPassWordError] = useState(false);
    const [passwordErrorMessage, setPasswordErrorMessage] = useState('');

    //rule state
    const [ruleError, setRuleError] = useState(false);
    const [passRule, setPassrule] = useState(passwordRules);
    const [showPassRule, setShowPassRule] = useState(false);

    //other
    const [showPassword, setShowPassword] = useState(false);

    const dispatch = useDispatch();
    useEffect(() => {
        let isChanged = false;
        const newPassRules = [...passRule];

        newPassRules.forEach((rule) => {
            const checkResult = rule.check(password);
            if (checkResult !== rule.state) {
                rule.state = checkResult;
                isChanged = true;
            }
            setIsPassWordError(!checkResult);
        });

        isChanged && setPassrule(newPassRules);
    }, [password]);

    // email handler
    const handleChangeEmail = (e) => {
        const value = e.target.value;
        setEmail(value);

        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!regex.test(value)) {
            !isEmailError && setIsEmailError(true);
        } else {
            isEmailError && setIsEmailError(false);
        }
    };

    const handleBlurEmail = () => {
        if (isEmailError) {
            setEmailErrorMessage('This is not a valid email format!');
        }
    };

    const handleFocusEmail = () => {
        emailErrorMessage && setEmailErrorMessage('');
    };

    // password handler
    const handleChangePassword = (e) => {
        const value = e.target.value;
        const invalidValue = value.includes(' ');
        invalidValue || setPassword(value);

        const invalidCharacter = value.includes('"') || value.includes("'") || value.includes('`');
        if (invalidCharacter) {
            setPasswordErrorMessage('Invalid special character');
        } else {
            setPasswordErrorMessage('');
        }
    };

    const handleblurPassword = () => {
        if (password) {
            const newPassRules = [...passRule];
            let isChanged = false;

            newPassRules.forEach((rule) => {
                if (rule.state === false) {
                    rule.state = false;
                    isChanged = true;
                }
            });

            if (isChanged) {
                setRuleError(true);
                setPassrule(newPassRules);
            } else {
                setShowPassRule(false);
            }
        } else {
            setShowPassRule(false);
        }
    };

    const handleFocusPassWord = () => {
        const newPassRules = [...passRule];
        let isChanged = false;

        newPassRules.forEach((rule, index) => {
            if (rule.state === false) {
                // de check truong hop chua nhap gi vao thi khong hien icon loi len
                rule.state = null;
                isChanged = true;
            }
        });
        isChanged && setPassrule(newPassRules);
        ruleError && setRuleError(false);
        !showPassRule && setShowPassRule(true);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const registerData = {
            type: 'email',
            email: email,
            password: password,
        };

        const action = await dispatch(register(registerData));
        console.log(action);

        //reload ui when register succesful
        setTimeout(() => {
            window.location.reload();
        }, 2000);
    };

    const disableSubmit = !email || isEmailError || !password || isPassWordError;

    return (
        <form className={cx('body-register')}>
            <div className={cx('form-register-title')}>Email</div>

            <div className={cx('form-group', 'mt-6', { warning: !!emailErrorMessage })}>
                <input
                    value={email}
                    name="email"
                    placeholder="Email or TikTok ID"
                    onChange={handleChangeEmail}
                    onBlur={handleBlurEmail}
                    onFocus={handleFocusEmail}
                ></input>
                {emailErrorMessage && (
                    <div className={cx('warning-icon')}>
                        <WarningIcon />
                    </div>
                )}
            </div>
            <span className={cx('error-title')}>{emailErrorMessage}</span>

            <div className={cx('form-group', { warning: !!ruleError })}>
                <input
                    placeholder="Password"
                    name="password"
                    value={password}
                    type={showPassword ? 'text' : 'password'}
                    onChange={handleChangePassword}
                    onFocus={handleFocusPassWord}
                    onBlur={handleblurPassword}
                ></input>
                {ruleError && (
                    <div className={cx('warning-icon')}>
                        <WarningIcon />
                    </div>
                )}
                <div className={cx('show-password')} onClick={() => setShowPassword(showPassword ? false : true)}>
                    {showPassword ? <EyeShowIcon /> : <EyeHideIcon />}
                </div>
            </div>
            <span className={cx('error-title')}>{passwordErrorMessage}</span>

            {showPassRule && (
                <div className={cx('password-rule')}>
                    <p className={cx('title-rule')}>Your password must include:</p>

                    {passwordRules.map((rule, index) => (
                        <div className={cx('rule-group')}>
                            <div className={cx('container-icon')}>
                                <TickBoxIcon className={cx('pass-icon')} />
                            </div>
                            <div className={cx('rule-name', { ok: rule.state === true })}>{rule.name}</div>
                        </div>
                    ))}
                </div>
            )}

            <div className={cx('email-consent')}>
                <div>
                    <input className={cx('checkbox')} type="checkbox"></input>
                </div>
                <p>
                    Get trending content, newsletters, promotions, recommendations and account updates sent to your
                    email
                </p>
            </div>
            <Button className={cx('register-btn')} primary large onClick={handleSubmit}>
                Register
            </Button>
            <div className={cx('footer-register-title')}>
                By continuing, you agree to the TikTok
                <a href="/"> Terms of service</a>
                and confirm that you have read the TikTok
                <a href="/">Privacy Policy.</a>
            </div>
        </form>
    );
}

export default RegisterWithEmail;
