import ThemeButton from "./ThemeButton";

const Navbar = () => {
  return (
    <div>
      <div>
        <ul className="flex min-h-20 gap-4 rounded-2xl bg-white justify-evenly items-center mt-10 cursor-pointer ">
          <li>Blogs</li>
          <li>About us</li>
          <li>Profile</li>
          <li>
            <ThemeButton />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
