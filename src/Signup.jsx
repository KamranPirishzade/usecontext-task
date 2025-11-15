import React, { useContext } from "react";
import { UserContext } from "./context/UserContext";

const Login = () => {
  const [userData, setUserData] = useContext(UserContext);

  function handleSubmit(e) {
    e.preventDefault();
    const user = new FormData(e.target);
    const formData = {
      email: user.get("email"),
      pass: user.get("pass"),
      username: user.get("username"),
    };

    setUserData(formData);
  }

  return (
    <div className="p-12 bg-white rounded mt-40">
      <h2 className="text-center text-3xl font-semibold">Sign up form</h2>
      <form
        action=""
        className="flex flex-col justify-center items-center min-w-60 gap-4"
        onSubmit={handleSubmit}
      >
        <div className="space-x-2 flex flex-col gap-2">
          <label htmlFor="username" className="text-xl">
            Name
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
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            className="outline-1 min-w-80 rounded px-3 py-1 focus:outline-3 focus:outline-sky-300 user-invalid:outline-red-400 user-invalid:outline-3 valid:outline-green-400 valid:outline-3"
            required
          />
        </div>
        <div className="space-x-2 flex flex-col gap-2">
          <label htmlFor="pass" className="text-xl">
            Password
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
          Sign up
        </button>
      </form>
    </div>
  );
};

export default Login;
