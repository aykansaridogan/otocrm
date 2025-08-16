import React from 'react';
import "./index.css";
import "./App.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Sayfalar
import { Login } from './pages/login.jsx';
import HomePage from './pages/homepage.jsx'; // Bunu sen oluşturacaksın

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/homepage" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
