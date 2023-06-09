import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import "./index.css";
import ErrorPage from "./ErrorPage/ErrorPage";
import Home from "./components/Home/Home";
import Statistics from "./components/Statistics/Statistics";
import AppliedJobs from "./components/AppliedJobs/AppliedJobs";
import Blog from "./components/Blog/Blog";
import JobDetails from "./components/JobDetails/JobDetails";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home />,
                loader: () => fetch("/jobCategory.json"),
            },
            {
                path: "/statistics",
                element: <Statistics />,
            },
            {
                path: "/jobs",
                element: <AppliedJobs />,
            },
            {
                path: "/jobs/:id",
                element: <JobDetails />,
            },
            {
                path: "/blog",
                element: <Blog />,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
