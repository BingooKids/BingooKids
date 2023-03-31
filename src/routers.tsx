import { RouteObject } from 'react-router-dom';
import { AgreementPage } from './pages/Agreement';
import { HomePage } from './pages/Home';
import { JungleSoundsPage } from './pages/JungleSounds';
import { PandaPoemPage } from './pages/PandaPoem';
import { PandaPoemHelpPage } from './pages/PandaPoemHelp';
import { PrivacyPage } from './pages/Privacy';
export const routers: RouteObject[] = [
    {
        path: '/',
        element: <HomePage />,
    },
    {
        path: '/jungle-series',
        element: <JungleSoundsPage />,
    },
    {
        path: '/panda-poem',
        element: <PandaPoemPage />,
    },
    {
        path: '/panda-poem-intro',
        element: <PandaPoemHelpPage />,
    },
    {
        path: '/privacy',
        element: <PrivacyPage />,
    },
    {
        path: '/user-agreement',
        element: <AgreementPage />,
    },
];
