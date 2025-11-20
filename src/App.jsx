import React from "react";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import ProtectedRoutes from "./ProtectedRoutes";
import UI from "./containers/UI";
import Signup from "./containers/signup";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<ProtectedRoutes />}>
          <Route path="/" element={<UI />}></Route>
        </Route>
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
