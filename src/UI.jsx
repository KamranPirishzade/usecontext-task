import { useContext } from "react";
import Login from "./Login";
import { UserContext } from "./context/UserContext";
import Navbar from "./Navbar";
import { ThemeContext } from "./context/ThemeContext";

const UI = () => {
  //   console.log(Object.keys(localStorage.getItem("user")).length);
  const [userData] = useContext(UserContext);
  const [theme] = useContext(ThemeContext);
  console.log(userData);
  return (
    <div className="w-screen h-screen bg-sky-100 flex justify-center items-center">
      {Object.keys(userData).length !== 0 ? (
        <div className="flex flex-col h-full">
          <Navbar />
          <h1 className="text-2xl flex-1">Hello {userData.email} </h1>
        </div>
      ) : (
        <Login />
      )}
    </div>
  );
};

export default UI;
