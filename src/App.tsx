import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import HMSProductPage from './pages/HMSProductPage';
import SchoolProductPage from './pages/SchoolProductPage';

function App() {
  return (
    <div className="min-h-screen">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products/hms" element={<HMSProductPage />} />
        <Route path="/products/school-management" element={<SchoolProductPage />} />
      </Routes>
    </div>
  );
}

export default App;