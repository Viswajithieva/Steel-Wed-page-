import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import About from "./Component/About.js";
import Home from "./Component/Va.js"; // Ensure correct file naming
import IWM from "./Component/IWM.js";
import Solid from "./Component/Solid.js";
import Login from "./Component/Login.js";
import Signup from "./Component/Signup.js";
import Contact from "./Component/Contact.js";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Home />} /> {/* Changed to lowercase */}
        <Route path="/about" element={<About />} />
        <Route path="/iwm" element={<IWM />} /> {/* Changed to lowercase */}
        <Route path="/solid" element={<Solid />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/contact" element={<Contact />} />

      </Routes>
    </Router>
  );
}

export default App;
