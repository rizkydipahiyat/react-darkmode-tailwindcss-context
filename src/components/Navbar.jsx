import React, { useContext, useEffect } from "react";
import { DarkModeContext } from "../context/DarkModeContext";

const Navbar = () => {
  const { theme, toggleDarkMode } = useContext(DarkModeContext);

  return (
    <nav
      className={
        theme === "light" ? "bg-slate-900 text-slate-200" : "bg-slate-200"
      }>
      <div className="container mx-auto py-4 px-6 flex justify-between items-center">
        <h1 className="text-xl font-semibold">Website</h1>
        <button
          className="px-3 py-2 rounded bg-blue-500 text-white"
          onClick={toggleDarkMode}>
          {theme === "light" ? "Light Mode" : "Dark Mode"}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
