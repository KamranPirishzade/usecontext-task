import { createFileRoute } from "@tanstack/react-router";
import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";
import ThemeButton from "../components/ThemeButton";
import LanguagesDropdown from "../components/LanguagesDropdown";
import signUpForm from "../constants/signupLabels";
import { LanguageContext } from "../context/LanguageContext";
import { useNavigate } from "@tanstack/react-router";

export const Route = createFileRoute("/signup")({
  component: Signup,
});

const Signup = () => {
  const [userData, setUserData] = useContext(UserContext);
  const [language] = useContext(LanguageContext);
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    const user = new FormData(e.target);
    const formData = {
      email: user.get("email"),
      pass: user.get("pass"),
      username: user.get("username"),
    };

    setUserData(formData);
    navigate({ to: "/" });
  }

  return (
    <div className="p-12 bg-white dark:bg-black rounded mt-30">
      <h2 className="text-center text-3xl font-semibold">
        {signUpForm[language].title}
      </h2>

      <form
        action=""
        className="flex flex-col justify-center items-center min-w-60 gap-4"
        onSubmit={handleSubmit}
      >
        <div className="space-x-2 flex flex-col gap-2">
          <label htmlFor="username" className="text-xl">
            {signUpForm[language].name}
          </label>
          <input
            id="username"
            name="username"
            type="text"
            minLength={3}
            className="outline-1 min-w-80 rounded px-3 py-1 focus:outline-3 focus:outline-sky-300 user-invalid:outline-red-400 user-invalid:outline-3 valid:outline-green-400 valid:outline-3"
            required
          />
        </div>
        <div className="space-x-2 flex flex-col gap-2">
          <label htmlFor="email" className="text-xl">
            {signUpForm[language].email}
          </label>
          <input
            id="email"
            name="email"
            type="email"
            className="outline-1 min-w-80 rounded px-3 py-1 focus:outline-3 focus:outline-sky-300 user-invalid:outline-red-400 user-invalid:outline-3 valid:outline-green-400 valid:outline-3"
            pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
            required
          />
        </div>
        <div className="space-x-2 flex flex-col gap-2">
          <label htmlFor="pass" className="text-xl">
            {signUpForm[language].password}
          </label>
          <input
            id="pass"
            name="pass"
            type="password"
            minLength={8}
            className="outline-1 min-w-80 rounded px-3 py-1 focus:outline-3 focus:outline-sky-300  user-invalid:outline-red-400 user-invalid:outline-3 valid:outline-green-400 valid:outline-3"
            required
          />
        </div>
        <button
          type="submit"
          className="rounded bg-sky-600 text-white px-6 py-3 text-xl hover:text-black hover:bg-sky-200 transition-all duration-300"
        >
          {signUpForm[language].signIn}
        </button>
      </form>
      <div className="flex justify-between mt-5">
        <ThemeButton />
        <LanguagesDropdown />
      </div>
    </div>
  );
};
