import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ThemeAndLang from "../containers/ThemeAndLang";
import Container from "../containers/Container";
const MainLayout = () => {
  return (
    <>
      <Container>
        <ThemeAndLang />
        <Navbar />
        <Outlet />
        <Footer />
      </Container>
    </>
  );
};

export default MainLayout;
