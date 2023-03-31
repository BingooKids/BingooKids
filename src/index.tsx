import React, { useContext, useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.less';
import zhCN from 'antd/locale/zh_CN';
import {
    createBrowserRouter,
    createHashRouter,
    RouterProvider,
} from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import { ConfigProvider, theme } from 'antd';
import { ThemeConfig } from 'antd/es/config-provider/context';
import { routers } from './routers';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

function Index() {
    const themeConfig: ThemeConfig = {
        algorithm: theme.compactAlgorithm,
        token: {
            borderRadius: 14,
            colorPrimary: '#F7B500',
            colorSuccess: '#00B42A',
            colorError: '#F53F3F',
            colorWarning: '#FF7D00',
            colorInfo: '#3491FA',
            colorBgLayout: '#f2f3f5',
            colorFillQuaternary: '#00000008',
            fontFamily: 'Comfortaa',
        },
    };
    const appRouters = createHashRouter(routers);
    return (
        <React.StrictMode>
            <ConfigProvider theme={themeConfig} locale={zhCN}>
                <RouterProvider router={appRouters}></RouterProvider>
            </ConfigProvider>
        </React.StrictMode>
    );
}
root.render(<Index />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
