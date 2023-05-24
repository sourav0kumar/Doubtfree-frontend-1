import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
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
import { useSelector } from "react-redux";
import { useEffect } from "react";
import ForgetPassword from "./pages/forget password";
import ChangePassword from "./pages/change password";
import Upload_test from "./upload_test";

function App() {
  const { isLoggedIn } = useSelector((state) => state.verify).result;
  useEffect(() => {
    if (isLoggedIn) {
      console.log("Logged IN");
    }
  }, []);
  return (
    <>
      <div>
        <Navbar />
      </div>{" "}
      <Routes>
        <Route path="/" element={<Home />} />{" "}
        
        {isLoggedIn && (
          <>
            <Route path="/dashboard/*" element={<Dashboard />} />{" "}
          </>
        )}{" "}

            {/* <Route path="/dashboard/*" element={<Dashboard />} />{" "} */}

        {!isLoggedIn && (
          <>
            <Route path="/login" element={<LoginDemo />} />{" "}
            <Route path="/forget-password" element={<ForgetPassword />} />{" "}
            <Route path="/change-password" element={<ChangePassword />} />{" "}
            <Route path="/register" element={<Register />} />{" "}
          </>
        )}{" "}


        <Route path="/courses" element={<Courses />} />{" "}
        <Route path="/about" element={<About />} />{" "}
        <Route path="/contact" element={<Contact />} />{" "}
        <Route path="/test" element={<Upload_test />} />{" "}
        <Route path="/doubtSupport" element={<DoubtSupport />} />{" "}
        <Route path="/*" element={<Navigate to="/" />} />{" "}
      </Routes>{" "}
      {/* <Footer /> */}{" "}
    </>
  );
}

export default App;
