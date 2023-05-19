import React, { useContext } from "react";
import { DarkModeContext } from "../context/DarkModeContext";

const Home = () => {
  const { theme } = useContext(DarkModeContext);

  return (
    <div
      className={`${
        theme === "light" ? "bg-slate-900 text-slate-200" : "bg-slate-200"
      }`}>
      <div className="container mx-auto py-6 px-4">
        <h1 className="text-3xl font-semibold mb-4">Halaman Utama</h1>
        <p>Selamat datang di website Dark Mode!</p>
      </div>
    </div>
  );
};

export default Home;
