import { createFileRoute } from "@tanstack/react-router";
import { useContext, useEffect } from "react";
import { UserContext } from "../context/UserContext";
import Navbar from "../components/Navbar";
import Blog from "../components/Blog";
import { LanguageContext } from "../context/LanguageContext";
import { useState } from "react";
import { useNavigate } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: UI,
});

const UI = () => {
  const [userData, setUserData] = useContext(UserContext);
  const [language] = useContext(LanguageContext);
  const [blogs, setBlogs] = useState([]);
  const navigate = useNavigate();

  if (Object.keys(userData).length == 0) {
    navigate({ to: "/signup" });
  }

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
    <div className="flex flex-col h-full px-10 items-center">
      <Navbar
        username={userData.username}
        language={language}
        setUserData={setUserData}
      />
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
  );
};
