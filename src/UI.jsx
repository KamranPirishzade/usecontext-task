import { useContext, useEffect } from "react";
import Signup from "./Signup";
import { UserContext } from "./context/UserContext";
import Navbar from "./Navbar";
import Blog from "./Blog";
import { LanguageContext } from "./context/LanguageContext";
import { useState } from "react";

const UI = () => {
  //   console.log(Object.keys(localStorage.getItem("user")).length);
  const [userData] = useContext(UserContext);
  const [language] = useContext(LanguageContext);
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    async function getBlogs() {
      try {
        const response = await fetch("http://localhost:3000/posts");
        const data = await response.json();

        if (!response.ok) {
          throw Error(response.status);
        }

        setBlogs(data);
      } catch (err) {
        console.error(err);
      }
    }

    getBlogs();
  }, []);

  return (
    <div className="min-h-screen dark:bg-neutral-800 dark:text-white bg-sky-100 p-5 flex flex-col items-center">
      {Object.keys(userData).length !== 0 ? (
        <div className="flex flex-col h-full px-10">
          <Navbar username={userData.username} language={language} />
          <div className="grid grid-cols-2 max-md:grid-cols-1 gap-4">
            {blogs.map((blog) => (
              <Blog
                key={blog.id}
                id={blog.id}
                title={blog.title[language]}
                content={blog.content[language]}
                author={blog.author[language]}
              />
            ))}
          </div>
        </div>
      ) : (
        <Signup language={language} />
      )}
    </div>
  );
};

export default UI;
