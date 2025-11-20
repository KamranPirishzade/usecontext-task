import ProtectedRoutes from "../ProtectedRoutes";
import MainLayout from "../layout/MainLayout";
import AuthLayout from "../layout/AuthLayout";
import Signup from "../containers/signup";
import UI from "../containers/UI";

const routes = [
  {
    element: <ProtectedRoutes />,
    children: [
      {
        element: <MainLayout />,
        children: [{ element: <UI />, index: true }],
      },
    ],
  },
  {
    element: <AuthLayout />,
    children: [
      {
        element: <Signup />,
        path: "/signup",
      },
    ],
  },
];

export default routes;
