import React from "react";

const LanguagesDropdown = () => {
  return (
    <div>
      <select name="lang" id="lang" className="p-2 outline-1 rounded-2xl">
        <option value="en">English</option>
        <option value="az">Azerbaijan</option>
        <option value="ru">Russian</option>
      </select>
    </div>
  );
};

export default LanguagesDropdown;
