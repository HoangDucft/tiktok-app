import {
    AppleIcon,
    FaceBookIcon,
    GoogleIcon,
    InstagramIcon,
    KaraoTalkIcon,
    LineIcon,
    LinkedinIcon,
    QRIcon,
    UserIcon,
} from '~/components/Icons';
import LoginWithQRForm from '../baseModalForm/loginWithQRForm';
import LoginWithEmailForm from '../baseModalForm/loginWithEmailForm';
const loginData = {
    title: 'Log in to TikTok',
    data: [
        {
            icon: <QRIcon />,
            title: 'Use QR Code',
            children: {
                title: 'Login with QR Code',
                type: 'component',
                data: LoginWithQRForm,
            },
        },
        {
            icon: <UserIcon />,
            title: 'Use phone number/ email/ username',
            children: {
                title: 'Login',
                type: 'component',
                data: LoginWithEmailForm,
            },
        },
        {
            icon: <FaceBookIcon />,
            title: 'Continue with FaceBook',
            disable: true,
        },
        {
            icon: <GoogleIcon />,
            title: 'Continue with Google',
            disable: true,
        },
        {
            icon: <LinkedinIcon />,
            title: 'Continue with Twitter',
            disable: true,
        },
        {
            icon: <LineIcon />,
            title: 'Continue with Line',
            disable: true,
        },
        {
            icon: <KaraoTalkIcon />,
            title: 'Continue with Karaotalk',
            disable: true,
        },
        {
            icon: <AppleIcon />,
            title: 'Continue with Apple',
            disable: true,
        },
        {
            icon: <InstagramIcon />,
            title: 'Continue with Instagram',
            disable: true,
        },
    ],
};
export default loginData;
