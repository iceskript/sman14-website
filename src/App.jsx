import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Sambutan from './components/Sambutan';
import LatestNews from './components/LatestNews';
import ScrollToTop from './components/ScrollToTop';
import Login from './pages/Login'; // Pastikan file ini ada di src/pages/Login.jsx

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Routes>
          {/* Rute Halaman Utama */}
          <Route path="/" element={
            <>
              <Navbar />
              <Hero />
              <Sambutan />
              <LatestNews />
              <ScrollToTop />
            </>
          } />

          {/* Rute Halaman Login */}
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;