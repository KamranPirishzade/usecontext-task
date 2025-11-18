import { Outlet, createRootRoute, Link } from "@tanstack/react-router";
import { UserProvider } from "../context/UserContext";
import { ThemeProvider } from "../context/ThemeContext";
import { LanguageProvider } from "../context/LanguageContext";
import "../css/App.css";
import LanguagesDropdown from "../components/LanguagesDropdown";
import ThemeButton from "../components/ThemeButton";

export const Route = createRootRoute({
  component: () => (
    <>
      <UserProvider>
        <ThemeProvider>
          <LanguageProvider>
            <div className="min-h-screen dark:bg-neutral-800 dark:text-white bg-sky-100 p-5 flex flex-col items-center">
              <div className="flex gap-3 ml-auto">
                <LanguagesDropdown />
                <ThemeButton />
              </div>
              <Outlet />
            </div>
          </LanguageProvider>
        </ThemeProvider>
      </UserProvider>
    </>
  ),
});
