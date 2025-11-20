import React from "react";
import { Routes, BrowserRouter, Route, useRoutes } from "react-router-dom";
import ProtectedRoutes from "./ProtectedRoutes";
import MainLayout from "./layout/MainLayout";
import AuthLayout from "./layout/AuthLayout";
import Signup from "./containers/signup";
import UI from "./containers/UI";
import routes from "./router/routes";

const App = () => {
  const AppRoutes = () => useRoutes(routes);
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
};

export default App;
