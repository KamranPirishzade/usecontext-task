import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";

const ThemeButton = () => {
  const [theme, setTheme] = useContext(ThemeContext);

  function handleTheme() {
    if (theme == "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }

  return (
    <label class="inline-flex items-center cursor-pointer">
      <span class="select-none text-sm font-medium text-heading">Light</span>
      <input
        type="checkbox"
        value=""
        class="sr-only peer"
        onChange={handleTheme}
        checked={theme == "dark" ? true : false}
      />
      <div class="relative outline-1  mx-3 w-9 h-5 bg-neutral-quaternary peer-focus:outline rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-buffer after:content-[''] after:absolute after:top-0.5 after:start-0.5 after:bg-black after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-brand"></div>
      <span class="select-none text-sm font-medium text-heading">Dark</span>
    </label>
  );
};

export default ThemeButton;
