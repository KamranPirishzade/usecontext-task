import React from "react";

const Blog = ({ title, content, author, id }) => {
  return (
    <div
      key={id}
      className="rounded-3xl bg-white px-6 py-8 shadow-xl space-y-2 dark:bg-black"
    >
      <h2 className="text-2xl font-bold">{title}</h2>
      <p>{content}</p>
      <p className="italic text-right">{author}</p>
      <div className="flex justify-center gap-5">
        <button className="text-4xl ring-1 ring-green-600 p-2 rounded-full aspect-square hover:ring-3 transition duration-100 ease-in">
          👍
        </button>
        <button className="text-4xl ring-1 ring-red-600 p-2 rounded-full aspect-square  hover:ring-3 transition duration-100 ease-in">
          👎
        </button>
      </div>
    </div>
  );
};

export default Blog;
