import { HeaderOnly, StretchLayout } from '~/layouts';

//pages
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';
import Live from '~/pages/Live';
import config from '~/config';
import VideoPage from '~/pages/VideoPage/VideoPage';

//public routes (no need login)
const publicRoutes = [
    {
        path: config.routes.home,
        component: Home,
    },
    {
        path: config.routes.following,
        component: Following,
    },

    {
        path: config.routes.live,
        component: Live,
    },

    {
        path: config.routes.profile,
        component: Profile,
        layout: StretchLayout,
    },
    {
        path: config.routes.search,
        component: Search,
    },
    {
        path: config.routes.upload,
        component: Upload,
        layout: HeaderOnly,
    },
    {
        path: config.routes.video,
        component: VideoPage,
        layout: null,
    },
];

// private routes (need login)
const privateRoutes = [];

export { publicRoutes, privateRoutes };
