import { RouteObject } from 'react-router-dom';
import { AgreementPage } from './pages/Agreement';
import { HomePage } from './pages/Home';
import { PrivacyPage } from './pages/Privacy';
export const routers: RouteObject[] = [
    {
        path: '/',
        element: <HomePage />,
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
