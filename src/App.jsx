import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import SensorModule from './pages/Products/SensorModule/SensorModule';
import SenseArray from './pages/Products/SensorModule/SenseArray';
import Satellite from './pages/Products/Satellite/Satellite';
import ComputingDevice from './pages/Products/ComputingDevice/ComputingDevice';
import Contact from './pages/Contact/Contact';
import './App.css';

function App() {
  return (
    <Router basename="/hertz-app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products/sensor-module" element={<SensorModule />} />
        <Route path="/products/sense-array" element={<SenseArray />} />
        <Route path="/products/satellite" element={<Satellite />} />
        <Route path="/products/computing-device" element={<ComputingDevice />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;