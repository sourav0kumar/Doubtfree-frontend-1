import { BrowserRouter,Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./components/navbar";
import Home from "./pages/home";
import LoginDemo from "./pages/login";
import Register from "./pages/register";
import Dashboard from "./pages/dashboard";

function App() {
  return (
    <>
      <div><Navbar/></div>
      <Home/>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginDemo />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        {/* <Route path="/about" element={<About />} /> */}
      </Routes>
      {/* <Footer /> */}
    </>
  );
}

export default App;





