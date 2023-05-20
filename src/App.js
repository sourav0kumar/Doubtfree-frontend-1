import { BrowserRouter,Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";

function App() {
  return (
    <>
      <div><Navbar/></div>
      <Home/>
    </>
  );
}

export default App;





