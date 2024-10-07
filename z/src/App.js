import './App.css';
import Home from './assist/home/home';
import Nav from './assist/nav/nav';
import Footer from "./assist/footer/footer";
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Shop from './pages/Shop';
import News from './pages/News';
import ContactUs from './pages/ContactUs';

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Shop" element={<Shop />} />
        <Route path="/News" element={<News />} />
        <Route path="/ContactUs" element={<ContactUs />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
