import ThemeButton from "./ThemeButton";
import LanguagesDropdown from "./LanguagesDropdown";
import menuItems from "./constants/navbarLabels";

const Navbar = ({ username, language }) => {
  return (
    <nav>
      <ul className="flex min-h-18 dark:bg-black my-5 p-2 max-w-180 m-auto gap-4 rounded-2xl bg-white justify-evenly items-center mt-10 cursor-pointer flex-wrap">
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
          <LanguagesDropdown />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
