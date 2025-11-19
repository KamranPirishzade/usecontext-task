import { Navigate, Outlet } from "react-router-dom";
import { UserContext } from "./context/UserContext";
import { useContext } from "react";

const ProtectedRoutes = () => {
  const [userData] = useContext(UserContext);
  let auth = { token: Object.keys(userData).length !== 0 };

  return auth.token ? <Outlet /> : <Navigate to="/signup" />;
};

export default ProtectedRoutes;
