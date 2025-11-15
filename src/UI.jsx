import { useContext } from "react";
import Signup from "./Signup";
import { UserContext } from "./context/UserContext";
import Navbar from "./Navbar";
import { ThemeContext } from "./context/ThemeContext";
import Blog from "./Blog";

const UI = () => {
  //   console.log(Object.keys(localStorage.getItem("user")).length);
  const [userData] = useContext(UserContext);
  const [theme] = useContext(ThemeContext);
  console.log(userData);
  return (
    <div className="min-h-screen bg-sky-100 flex flex-col items-center">
      {Object.keys(userData).length !== 0 ? (
        <div className="flex flex-col h-full px-10">
          <Navbar username={userData.username} />
          <div className="grid grid-cols-2 gap-4">
            <Blog
              title="AI"
              content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci debitis architecto consequatur commodi ab amet, fuga quam impedit dolore quae deleniti a obcaecati similique quasi, praesentium et soluta laboriosam consectetur."
              author="Kamran"
            />
            <Blog
              title="AI"
              content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci debitis architecto consequatur commodi ab amet, fuga quam impedit dolore quae deleniti a obcaecati similique quasi, praesentium et soluta laboriosam consectetur."
              author="Kamran"
            />
          </div>
        </div>
      ) : (
        <Signup />
      )}
    </div>
  );
};

export default UI;
