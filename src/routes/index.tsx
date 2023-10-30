import { useRoutes } from 'react-router-dom';
import Page404 from '@/pages/Page404';
import LoadingScreen from '@/components/LoadingScreen';
import React from 'react';

const Loadable = (Component: any) => {
    return (props: any) => (
        <React.Suspense fallback={<LoadingScreen />}>
            <Component {...props} />
        </React.Suspense>
    );
}

const Router = () => {
    return useRoutes([
    {
        path: "/",
        element: <HomeApp />,
    },
    {
        path: "*",
        element: <Page404 />,
    }
    ]);
}

const HomeApp = Loadable(React.lazy(() => import('@/pages/Home')))

export default Router;