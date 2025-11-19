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

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <UserProvider>
      <ThemeProvider>
        <LanguageProvider>
          <BrowserRouter>
            <div className="min-h-screen dark:bg-neutral-800 dark:text-white bg-sky-100 flex flex-col items-center">
              <ThemeAndLang />
              <App />
              <Footer />
            </div>
          </BrowserRouter>
        </LanguageProvider>
      </ThemeProvider>
    </UserProvider>
  </StrictMode>
);
