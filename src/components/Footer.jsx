import React from "react";

const Footer = () => {
  return (
    <div className="min-h-20 p-10 mt-20 w-full  bg-white  dark:text-white dark:bg-black flex flex-col items-center justify-center text-black gap-2">
      <h2 className="font-bold tracking-widest">BLOG</h2>
      <ul className="flex max-w-130 gap-5">
        <li>Link 1</li>
        <li>Link 2</li>
        <li>Link 3</li>
        <li>Link 4</li>
        <li>Link 5</li>
      </ul>
      <small className="mt-10">Copyright &copy; 2025</small>
    </div>
  );
};

export default Footer;
