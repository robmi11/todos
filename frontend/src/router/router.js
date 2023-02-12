import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Dashbord from "../pages/Dashboad";
import Nofound from "../pages/Nofound";
import Login from "../pages/Login";
import Logout from "../pages/Logout";
import Register from "../pages/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Nofound />,
    children: [
      {
        path: "dashboard",
        element: <Dashbord />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "logout",
        element: <Logout />,
      },
    ],
  },
]);

export default router;
