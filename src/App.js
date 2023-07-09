import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
// import ChangePassword from "./pages/grid";
import Navbar from "./components/Navbar";
import Home from "./pages/home/Home";
import LoginDemo from "./pages/login";
import Register from "./pages/register";
import Dashboard from "./pages/dashboard";
import About from "./pages/About";
import Contact from "./pages/Contact";
import DoubtSupport from "./pages/DoubtSupport";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import ForgetPassword from "./pages/forget password";
import ChangePassword from "./pages/change password";
import { GetAllCourseService } from "./services/courses/get";
import ResetPassword from "./pages/reset password";
import CourseStructure from "./components/CourseStructure";
import CoursesAll from "./pages/courses all";
import Landing from "./components/compiler/compiler/Landing";
import QnA from "./pages/QnA";
import QnADesc from "./pages/sortedQnA"
import NewQ from "./pages/NewQ";
import { GetDoubtsService } from "./services/doubts/get";


function App() {
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector((state) => state.verify).result;
  useEffect(() => {
    GetAllCourseService(dispatch);
    if (isLoggedIn) {
      console.log("Logged IN");
      GetDoubtsService(dispatch);
    }
  }, []);
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />{" "}
        {isLoggedIn && (
          <>
            <Route path="/dashboard/*" element={<Dashboard />} />{" "}
          </>
        )}{" "}
        {!isLoggedIn && (
          <>
            <Route path="/login" element={<LoginDemo />} />{" "}
            <Route path="/forget-password" element={<ForgetPassword />} />{" "}
            <Route path="/change-password" element={<ChangePassword />} />{" "}
            <Route path="/register" element={<Register />} />{" "}
          </>
        )}{" "}
        <Route path="/courses" element={<CoursesAll />} />{" "}
        <Route path="/about" element={<About />} />{" "}
        <Route path="/contact" element={<Contact />} />{" "}
        <Route path="/doubtSupport" element={<DoubtSupport />} />{" "}
        <Route path="/courseContent" element={<CourseStructure />} />{" "}
        <Route path="/reset-password/:token" element={<ResetPassword />} />{" "}
        <Route path="/*" element={<Navigate to="/" />} />{" "}
        <Route path="/landing" element={<Landing />} />{" "}
        <Route path="/qna" element={<QnA />} />{" "}
        <Route path="/newq" element={<NewQ />} />{" "}
         {/* <Route path="/newq/newqdesc" element={<QnADesc  />} />{" "} */}
      </Routes>{" "}
    </>
  );
}

export default App;
