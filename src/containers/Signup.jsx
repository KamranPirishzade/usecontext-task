import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";
import signUpForm from "../constants/signupLabels";
import { LanguageContext } from "../context/LanguageContext";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Signup = () => {
  const [errors, setErrors] = useState([]);
  const [, setUserData] = useContext(UserContext);
  const [language] = useContext(LanguageContext);
  const navigate = useNavigate();

  function isEmailValid(email) {
    const validEmailRegex =
      /^[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;
    if (!email) return false;

    const emailParts = email.split("@");

    if (emailParts.length !== 2) return "Email should contain one @ symbol";

    const account = emailParts[0];
    const domain = emailParts[1];

    if (account.length > 64)
      return "Account length should not be over 64 characters";
    else if (domain.length > 255)
      return "Domain length should not be over 64 characters";

    const domainParts = domain.split(".");

    if (domainParts.some((part) => part.length > 63))
      return "Email domain is not valid";

    if (!validEmailRegex.test(email))
      return "Please enter a valid email address";

    return "valid";
  }

  function isUserNameValid(username) {
    if (username.length < 3) {
      return "Username is too short.";
    }
    if (username.length > 20) {
      return "Username is too long.";
    }

    const pattern = /^[a-zA-Z0-9._]+$/;
    if (!pattern.test(username)) {
      return "Username contains invalid characters. Only letters, numbers, dots, and underscores are allowed.";
    }

    if (username.startsWith(".") || username.startsWith("_")) {
      return "Username cannot start with a dot or underscore.";
    }
    if (username.endsWith(".") || username.endsWith("_")) {
      return "Username cannot end with a dot or underscore.";
    }

    return "valid";
  }

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
      setErrors((pre) => ["Please enter valid email", ...pre]);
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
            className="outline-1 min-w-80 max-md:min-w-70 max-sm:min-w-60 rounded px-3 py-1 focus:outline-3 focus:outline-sky-300 user-invalid:outline-red-400 user-invalid:outline-3 valid:outline-green-400 valid:outline-3"
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
            className="outline-1 min-w-80 max-md:min-w-70 max-sm:min-w-60   rounded px-3 py-1 focus:outline-3 focus:outline-sky-300 user-invalid:outline-red-400 user-invalid:outline-3 valid:outline-green-400 valid:outline-3"
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
            className="outline-1 min-w-80 max-md:min-w-70 max-sm:min-w-60  rounded px-3 py-1 focus:outline-3 focus:outline-sky-300  user-invalid:outline-red-400 user-invalid:outline-3 valid:outline-green-400 valid:outline-3"
          />
        </div>
        {errors.length > 0 ? errors.map((err) => <p>{err}</p>) : ""}
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
