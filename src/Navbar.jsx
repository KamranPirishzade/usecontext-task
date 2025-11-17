import ThemeButton from "./ThemeButton";
import LanguagesDropdown from "./LanguagesDropdown";
import menuItems from "./constants/navbarLabels";

const Navbar = ({ username, language, setUserData }) => {
  return (
    <nav>
      <ul className="flex min-h-18 dark:bg-black my-5 p-2 min-w-120 m-auto gap-4 rounded-2xl bg-white justify-evenly items-center mt-10 cursor-pointer flex-wrap">
        <li className="navLink">{menuItems[language].blogs}</li>
        <li className="navLink">{menuItems[language].about}</li>
        <li className="navLink">{menuItems[language].profile}</li>
        <li>
          <ThemeButton language={language} />
        </li>
        <li className="flex items-center gap-1">
          <img
            src="/profile.png"
            className="bg-white rounded-full"
            width={36}
          />
          {username}
        </li>
        <li>
          <button
            className="cursor-pointer outline-1 px-2 py-1 rounded hover:outline-2"
            onClick={() => {
              setUserData({});
            }}
          >
            {menuItems[language].logout}
          </button>
        </li>
        <li>
          <LanguagesDropdown />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
