import React from "react";
import ThemeButton from "../components/ThemeButton";
import LanguagesDropdown from "../components/LanguagesDropdown";

const ThemeAndLang = () => {
  return (
    <div className="flex gap-3 m-3 ml-auto ">
      <ThemeButton />
      <LanguagesDropdown />
    </div>
  );
};

export default ThemeAndLang;
