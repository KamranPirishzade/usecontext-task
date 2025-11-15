import ThemeButton from "./ThemeButton";
import LanguagesDropdown from "./LanguagesDropdown";

const Navbar = ({ username, language }) => {
  const menuItems = {
    en: {
      blogs: "Blogs",
      about: "About us",
      profile: "Profile",
    },
    az: {
      blogs: "Bloqlar",
      about: "Haqqımızda",
      profile: "Profil",
    },
    ru: {
      blogs: "Блоги",
      about: "О нас",
      profile: "Профиль",
    },
  };
  return (
    <div>
      <div>
        <ul className="flex min-h-18 my-5 max-w-180 m-auto gap-4 rounded-2xl bg-white justify-evenly items-center mt-10 cursor-pointer ">
          <li>{menuItems[language].blogs}</li>
          <li>{menuItems[language].about}</li>
          <li>{menuItems[language].profile}</li>
          <li>
            <ThemeButton />
          </li>
          <li className="flex items-center gap-1">
            <img src="/profile.png" width={36} />
            {username}
          </li>
          <li>
            <LanguagesDropdown />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
