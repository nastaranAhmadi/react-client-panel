import { useRoutes } from "react-router-dom";
import AuthLayout from "Layouts/AuthLayout";
import MainLayout from "Layouts/MainLayout";

import Login from "Views/Login";
import Register from "Views/Register";
import Home from "Views/Home";
import About from "Views/About";

export default function Router() {
  let element = useRoutes([
    {
      element: <AuthLayout />,
      children: [
        { path: "/", element: <Login /> },
        { path: "signup", element: <Register /> },
      ],
    },
    {
      element: <MainLayout />,
      children: [
        { path: "home", element: <Home /> },
        { path: "about", element: <About /> },
      ],
    },
  ]);
  return element;
}
