import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Navigation } from './components';
import { Attributes, Employees, Home } from './pages';

function App() {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="attributes" element={<Attributes />} />
        <Route path="employees" element={<Employees />} />
        <Route path="map" element={'<Map />'} />
      </Routes>
    </div>
  );
}

export default App;
