import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Resume from "./components/Resume/ResumeNew";
const AppRoutes = () => {
  return (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/project" element={<Projects />} />
    <Route path="/about" element={<About />} />
    <Route path="/resume" element={<Resume />} />
    <Route path="*" element={<Navigate to="/"/>} />
  </Routes>
  );
};

export default AppRoutes;
