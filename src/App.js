// App.js
import React from "react";
import "./App.css";
import './components/utils/Main.css'
import Header from "./components/Header";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Portfolio from './components/Portfolio/Portfolio';
import Blogs from './components/Blogs/Blogs';
import Contact from './components/Contact/Contact';
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Header />
      <div className="page-contant">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
