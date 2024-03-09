import React, { useState } from "react";
import "./App.css";
import About from "./pages/About";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import SignupLogin from "./pages/Signup";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import "rsuite/dist/rsuite.min.css";
// import Footer from "./components/Footer";
export default function App() {
  const [loading, setLoading] = useState(true);
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home setLoading={setLoading} />} />
          <Route
            exact
            path="/about"
            element={<About setLoading={setLoading} />}
          />
          <Route
            exact
            path="/contact"
            element={<Contact setLoading={setLoading} />}
          />
          <Route
            exact
            path="/signup"
            element={<SignupLogin setLoading={setLoading} />}
          />
        </Routes>

        {/* <Footer /> */}
      </Router>
    </>
  );
}
