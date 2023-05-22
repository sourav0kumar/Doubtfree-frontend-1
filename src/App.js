import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/home/Home";
import About from "./pages/About";
import LoginDemo from "./pages/login";
import Register from "./pages/register";
import Dashboard from "./pages/dashboard";
import Courses from "./pages/dashboard/courses";
import { useSelector } from "react-redux";
import { useEffect } from "react";

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
      </div>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        {isLoggedIn && (
          <>
            <Route path="/dashboard/*" element={<Dashboard />} />
          </>
        )}
        {!isLoggedIn && (
          <>
            <Route path="/login" element={<LoginDemo />} />
            <Route path="/register" element={<Register />} />
          </>
        )}
        <Route path="/courses" element={<Courses />} />
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
      {/* <Footer /> */}
    </>
  );
}

export default App;
