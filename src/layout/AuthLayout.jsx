import React from "react";
import Footer from "../components/Footer";
import ThemeAndLang from "../containers/ThemeAndLang";
import { Outlet } from "react-router-dom";
import Container from "../containers/Container";

const AuthLayout = () => {
  return (
    <>
      <Container>
        <ThemeAndLang />
        <Outlet />
        <Footer />
      </Container>
    </>
  );
};

export default AuthLayout;
