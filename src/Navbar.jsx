import ThemeButton from "./ThemeButton";
import LanguagesDropdown from "./LanguagesDropdown";

const Navbar = ({ username }) => {
  return (
    <div>
      <div>
        <ul className="flex min-h-18 my-10 max-w-180 m-auto gap-4 rounded-2xl bg-white justify-evenly items-center mt-10 cursor-pointer ">
          <li>Blogs</li>
          <li>About us</li>
          <li>Profile</li>
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
