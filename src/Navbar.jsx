import ThemeButton from "./ThemeButton";
import LanguagesDropdown from "./LanguagesDropdown";
import menuItems from "./constants/navbarLabels";

const Navbar = ({ username, language }) => {
  return (
    <div>
      <ul className="flex min-h-18 dark:bg-black my-5 p-2 max-w-180 m-auto gap-4 rounded-2xl bg-white justify-evenly items-center mt-10 cursor-pointer ">
        <li>{menuItems[language].blogs}</li>
        <li>{menuItems[language].about}</li>
        <li>{menuItems[language].profile}</li>
        <li>
          <ThemeButton />
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
    </div>
  );
};

export default Navbar;
