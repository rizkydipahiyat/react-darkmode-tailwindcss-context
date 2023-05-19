import React from "react";
import { DarkModeProvider } from "./context/DarkModeContext";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import DetailHome from "./pages/DetailHome";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <DarkModeProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/:id" element={<DetailHome />} />
        </Routes>
      </BrowserRouter>
    </DarkModeProvider>
  );
};

export default App;
