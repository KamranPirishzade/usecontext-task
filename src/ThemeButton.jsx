import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";
import themeLabels from "./constants/themeLabels";
import { LanguageContext } from "./context/LanguageContext";

const ThemeButton = () => {
  const [theme, setTheme] = useContext(ThemeContext);
  const [language] = useContext(LanguageContext);

  function handleTheme() {
    if (theme == "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }

  return (
    <label className="inline-flex items-center cursor-pointer">
      <span className="select-none text-sm font-medium text-heading">
        {themeLabels[language].light}
      </span>
      <input
        type="checkbox"
        value=""
        className="sr-only peer"
        onChange={handleTheme}
        checked={theme == "dark" ? true : false}
      />
      <div className="relative outline-1  mx-3 w-9 h-5 bg-neutral-quaternary peer-focus:outline rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-buffer after:content-[''] after:absolute after:top-0.5 after:start-0.5 after:bg-black dark:after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-brand"></div>
      <span className="select-none text-sm font-medium text-heading">
        {themeLabels[language].dark}
      </span>
    </label>
  );
};

export default ThemeButton;
