import React from "react";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import ProtectedRoutes from "./ProtectedRoutes";
import MainLayout from "./layout/MainLayout";
import AuthLayout from "./layout/AuthLayout";
import Signup from "./containers/signup";
import UI from "./containers/UI";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<ProtectedRoutes />}>
          <Route element={<MainLayout />}>
            <Route path="/" element={<UI />} />
          </Route>
        </Route>
        <Route element={<AuthLayout />}>
          <Route path="/signup" element={<Signup />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
