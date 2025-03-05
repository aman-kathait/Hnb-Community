import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./Home";
import Login from "./Login";
import Feed from "./Feed";
import Profile from "./Profile";

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        children: [
            {
                path: "/feed",
                element: <Feed />
            },
            {
                path: "/",
                element: <Profile />
            }
        ]   
    },
    {
        path: "/login",
        element: <Login />
    }
]);

const Body = () => {
  return <RouterProvider router={appRouter} />;
};

export default Body;