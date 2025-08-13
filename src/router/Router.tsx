import { createBrowserRouter } from "react-router-dom";

import Navbar from "@/components/navbar/Navbar";
import ProtectedRoutes from "@/pages/ProtectedRoutes";
import About from "@/pages/About";
import Home from "@/pages/Home";
import Products from "@/pages/Products";
import UnauthorizedPage from "@/pages/UnauthorizedPage";
import Login from "@/components/authcomponents/Login";
import Register from "@/components/authcomponents/Register";
import Subscription from "@/pages/Subscribtion";
import { routes } from "./routes";

export const router = createBrowserRouter([
  {
    element: <ProtectedRoutes />,
    children: [
      {
        path: "/",
        element: <Navbar routes={routes} />, // passes nav links
        children: [
          { index: true, element: <Home /> },
          { path: "about", element: <About /> },
          { path: "products", element: <Products /> },
          { path: "subscribtion", element: <Subscription /> },
        ],
      },
    ],
  },
  {
    path: "/auth",
    element: <UnauthorizedPage />,
    children: [
      { index: true, element: <Login /> },
      { path: "register", element: <Register /> },
    ],
  },
]);