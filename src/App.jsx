import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HashRouter } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Gallery from './pages/Gallery';
import Services from "./pages/Services";
import Hair from "./pages/Hair";
import Skin from "./pages/Skin";
import Spa from "./pages/Spa";
import Bridal from "./pages/Bridal";
import Nail from "./pages/Nail";
import Grooming from "./pages/Grooming";
import Contact from "./pages/Contact";

import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";

import "./styles/main.scss";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/services" element={<Services />} />
        <Route path="/hair" element={<Hair />} />
        <Route path="/skin" element={<Skin />} />
        <Route path="/spa" element={<Spa />} />
        <Route path="/bridal" element={<Bridal />} />
        <Route path="/nail" element={<Nail />} />
        <Route path="/grooming" element={<Grooming />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer  id="footer" />
    </>
  );
}

export default App;


