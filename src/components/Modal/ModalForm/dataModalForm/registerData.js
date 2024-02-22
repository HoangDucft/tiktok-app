import { FaceBookIcon, GoogleIcon, KaraoTalkIcon, LineIcon, LinkedinIcon, UserIcon } from '~/components/Icons';
import { RegisterWithEmailForm } from '../baseModalForm';
const registerData = {
    title: 'Register with TikTok',
    data: [
        {
            title: 'Use phone or  email',
            icon: <UserIcon />,
            children: {
                title: 'Register',
                type: 'component',
                data: RegisterWithEmailForm,
            },
        },
        {
            title: 'Continue with Facebook',
            icon: <FaceBookIcon />,
            disable: true,
        },
        {
            title: 'Continue with Google',
            icon: <GoogleIcon />,
            disable: true,
        },
        {
            title: 'Use phone or  Twitter',
            icon: <LinkedinIcon />,
            disable: true,
        },
        {
            title: 'Continue with LINE',
            icon: <LineIcon />,
            disable: true,
        },
        {
            title: 'Continue with KaraoTalk',
            icon: <KaraoTalkIcon />,
            disable: true,
        },
    ],
};

export default registerData;
