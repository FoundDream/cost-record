import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./assets/css/reset.less";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Root from "./router/root/root.tsx";
import Statistics from "./router/statistics/statistics.tsx";
import Home from "./router/home/home.tsx";
import User from "./router/user/user.tsx";
import LoginRegister from "./router/register/register.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Navigate to="/home" replace />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/statistics",
        element: <Statistics />,
      },
      {
        path: "/user",
        element: <User />,
      },
    ],
  },
  {
    path: "/login",
    element: <LoginRegister />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
