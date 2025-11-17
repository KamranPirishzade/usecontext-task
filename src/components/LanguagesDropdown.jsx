import React, { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";

const LanguagesDropdown = () => {
  const [language, setLanguage] = useContext(LanguageContext);

  function handleLang(e) {
    setLanguage(e.target.value);
  }
  return (
    <div>
      <select
        name="lang"
        id="lang"
        className="p-2 outline-1 rounded-2xl dark:bg-black dark:outline-white"
        onChange={handleLang}
        value={language}
      >
        <option value="en">English</option>
        <option value="az">Azerbaijan</option>
        <option value="ru">Russian</option>
      </select>
    </div>
  );
};

export default LanguagesDropdown;
