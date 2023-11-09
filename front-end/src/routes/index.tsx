import { useRoutes } from "react-router-dom";
import Page404 from "@/pages/Page404";
import LoadingScreen from "@/components/LoadingScreen";
import React from "react";
import Layout from "@/layouts";

const Loadable = (Component: any) => {
  return (props: any) => (
    <React.Suspense fallback={<LoadingScreen />}>
      <Component {...props} />
    </React.Suspense>
  );
};

const Router = () => {
  return useRoutes([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <HomeApp /> },
        { path: "/login", element: <LoginApp /> },
        { path: "/register", element: <RegisterApp /> },
        {
          path: "*",
          element: <Page404 />,
        },
      ],
    },
    // {
    //   path: "/",
    //   element: <HomeApp />,
    // },
    {
      path: "*",
      element: <Page404 />,
    },
  ]);
};

const HomeApp = Loadable(React.lazy(() => import("@/pages/HomePage")));
const LoginApp = Loadable(React.lazy(() => import("@/pages/LoginPage")));
const RegisterApp = Loadable(React.lazy(() => import("@/pages/RegisterPage")));

export default Router;
