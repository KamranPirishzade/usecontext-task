import React from "react";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import ProtectedRoutes from "./ProtectedRoutes";
import UI from "./containers/UI";
import Signup from "./containers/signup";

const App = () => {
  return (
    <Routes>
      <Route element={<ProtectedRoutes />}>
        <Route path="/" element={<UI />}></Route>
      </Route>
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
};

export default App;
