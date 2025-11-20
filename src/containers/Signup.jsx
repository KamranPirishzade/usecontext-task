import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";
import signUpForm from "../constants/signupLabels";
import { LanguageContext } from "../context/LanguageContext";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  isUserNameValid,
  isEmailValid,
  isPasswordValid,
} from "../utils/validations";
const Signup = () => {
  const [errors, setErrors] = useState([]);
  const [, setUserData] = useContext(UserContext);
  const [language] = useContext(LanguageContext);
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    setErrors([]);
    const user = new FormData(e.target);

    const formData = {
      email: user.get("email"),
      pass: user.get("pass"),
      username: user.get("username"),
    };

    if (isUserNameValid(formData.username) != "valid") {
      setErrors((pre) => [isUserNameValid(formData.username), ...pre]);
      return;
    }
    if (isEmailValid(formData.email) != "valid") {
      setErrors((pre) => [isEmailValid(formData.email), ...pre]);
      return;
    }

    if (isPasswordValid(formData.pass) != "valid") {
      setErrors((pre) => [isPasswordValid(formData.pass), ...pre]);
      return;
    }

    setUserData(formData);
    navigate("/");
  }

  return (
    <div className="p-12 grow max-md:p-6 bg-white text-black dark:text-white dark:bg-black rounded mt-10">
      <h2 className="text-center text-3xl max-md:text-2xl font-semibold">
        {signUpForm[language].title}
      </h2>

      <form
        action=""
        className="flex flex-col justify-center items-center min-w-60 max-md:min-w-30 gap-4"
        onSubmit={handleSubmit}
        novalidate="novalidate"
      >
        <div className="space-x-2 flex flex-col gap-2">
          <label htmlFor="username" className="text-xl max-md:text-lg">
            {signUpForm[language].name}
          </label>
          <input
            id="username"
            name="username"
            type="text"
            minLength={3}
            className="outline-1 min-w-80 max-md:min-w-70 max-sm:min-w-60 rounded px-3 py-1 focus:outline-3 focus:outline-sky-300"
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
            className="outline-1 min-w-80 max-md:min-w-70 max-sm:min-w-60   rounded px-3 py-1 focus:outline-3 focus:outline-sky-300"
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
            className="outline-1 min-w-80 max-md:min-w-70 max-sm:min-w-60  rounded px-3 py-1 focus:outline-3 focus:outline-sky-300"
          />
          {errors.length > 0
            ? errors.map((err) => (
                <p className="border-red-500 w-80 max-md:w-70 max-sm:w-60 border-2 p-1 rounded text-red-500 max-w-full">
                  {err[language]}
                </p>
              ))
            : ""}
        </div>

        <button
          type="submit"
          className="rounded bg-sky-600 text-white px-6 py-3 text-xl max-md:text-lg max-md:px-2 max-md:py-1 hover:text-black hover:bg-sky-200 transition-all duration-300"
        >
          {signUpForm[language].signIn}
        </button>
      </form>
    </div>
  );
};

export default Signup;
