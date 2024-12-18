
import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Analytics from "./analytics.jsx";
import Student from "./Student.jsx";
import Sidebar from "./sidebar.jsx";
import Navbar from "./navbar.jsx";
import Boxes from "./Boxes.jsx";
import "./style.css";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Analytics />} />
      <Route path="/Sidebar" element={<Sidebar />} />
      <Route path="/Student" element={<Student />} />
      <Route path="/Navbar" element={<Navbar />} />
      <Route path="/Boxes" element={<Boxes />} />
    </Routes>
  </BrowserRouter>
);
