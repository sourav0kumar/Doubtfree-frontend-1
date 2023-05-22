import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/home/Home";

import LoginDemo from "./pages/login";
import Register from "./pages/register";
import Dashboard from "./pages/dashboard";

import About from "./pages/About";
import Courses from "./pages/dashboard/courses";
import Contact from "./pages/Contact";
import DoubtSupport from "./pages/DoubtSupport";


function App() {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginDemo />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard/*" element={<Dashboard />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/doubtSupport" element={<DoubtSupport />} />
      </Routes>
      {/* <Footer /> */}
    </>
  );
}

export default App;
