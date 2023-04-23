import "./App.css";
import NavBar from "./components/NavBar";
import "./styles/ComponentStyles.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutPage from "./pages/AboutPage.jsx";
import HomePage from "./pages/HomePage.jsx";
import Features from "./pages/Features.jsx";
import Started from "./pages/Started";
import Signup from "./components/Auth/Signup";
import Login from "./components/Auth/Login";
import Dashboard from "./pages/Dashboard";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   fetch("https://bookapi-3arg.onrender.com/all")
  //     .then((response) => response.json())
  //     .then(data => setData(data)).catch(err => console.log(err))
  // }, [])

  // useEffect(() => {
  //   axios
  //     .get("https://bookapi-3arg.onrender.com/all")
  //     .then((res) => {
  //       console.log(res);
  //       setData(res.data);
  //       console.log(data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/features" element={<Features />} />
          <Route path="/started" element={<Started />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
