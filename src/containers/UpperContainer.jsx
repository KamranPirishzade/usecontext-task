import React from "react";

const UpperContainer = ({ children }) => {
  return (
    <div className="min-h-screen dark:bg-neutral-800 dark:text-white bg-sky-100 flex flex-col items-center">
      {children}
    </div>
  );
};

export default UpperContainer;
