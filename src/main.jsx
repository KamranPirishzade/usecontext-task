import "./css/App.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { UserProvider } from "./context/UserContext";
import { ThemeProvider } from "./context/ThemeContext";
import { LanguageProvider } from "./context/LanguageContext";
import Footer from "./components/Footer";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import ThemeAndLang from "./containers/ThemeAndLang";
import UpperContainer from "./containers/UpperContainer";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <UserProvider>
      <ThemeProvider>
        <LanguageProvider>
          <UpperContainer>
            <ThemeAndLang />
            <App />
            <Footer />
          </UpperContainer>
        </LanguageProvider>
      </ThemeProvider>
    </UserProvider>
  </StrictMode>
);
