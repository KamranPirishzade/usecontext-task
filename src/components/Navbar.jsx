import ThemeButton from "./ThemeButton";
import LanguagesDropdown from "./LanguagesDropdown";
import menuItems from "../constants/navbarLabels";
import { useContext, useState } from "react";
import { LanguageContext } from "../context/LanguageContext";

const Navbar = ({ username, setUserData }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [language] = useContext(LanguageContext);

  return (
    <nav className="relative max-md:min-w-90 max-sm:min-w-70 min-w-150">
      <ul className="flex min-h-18 max-sm:min-h-12 dark:bg-black my-5 p-2 m-auto gap-4 max-md:gap-1 flex-wrap rounded-2xl bg-white justify-evenly items-center mt-2 cursor-pointer">
        <li className="navLink max-md:hidden">{menuItems[language].blogs}</li>
        <li className="navLink max-md:hidden">{menuItems[language].about}</li>
        <li className="navLink max-md:hidden">{menuItems[language].profile}</li>

        <li className="flex items-center gap-3 max-md:gap-1 max-sm:hidden">
          <div className="flex items-center gap-2">
            <img
              src="/profile.png"
              className="bg-white rounded-full max-md:w-6"
              width={36}
            />
            {username}
          </div>

          <div>
            <button
              className="cursor-pointer outline-1 px-2 py-1 rounded hover:outline-2 max-md:text-sm max-md:px-1 max-md:py-0.5"
              onClick={() => {
                setUserData({});
              }}
            >
              {menuItems[language].logout}
            </button>
          </div>
        </li>
        <li
          className={`burger hidden ml-auto mx-2 max-md:block max-md:w-2 ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="bg-black dark:bg-white"></span>
          <span className="bg-black dark:bg-white"></span>
          <span className="bg-black dark:bg-white"></span>
        </li>
      </ul>
      {menuOpen && (
        <div className="dark:bg-gray-600 bg-gray-300 rounded-2xl w-full p-3 absolute hidden max-md:block">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <img
                src="/profile.png"
                className="bg-white rounded-full max-md:w-6"
                width={36}
              />
              {username}
            </div>

            <div>
              <button
                className="cursor-pointer outline-1 px-2 py-1 rounded hover:outline-2 max-md:text-sm max-md:px-1 max-md:py-0.5"
                onClick={() => {
                  setUserData({});
                }}
              >
                {menuItems[language].logout}
              </button>
            </div>
          </div>
          <div>{menuItems[language].blogs}</div>
          <div>{menuItems[language].about}</div>
          <div>{menuItems[language].profile}</div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
