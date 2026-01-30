import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Sambutan from './components/Sambutan';
import LatestNews from './components/LatestNews';
import ScrollToTop from './components/ScrollToTop';
import Login from './pages/Login';
import VisiMisi from './components/VisiMisi';
import ProgramUnggulan from './components/ProgramUnggulan';
import PrestasiSiswa from './components/PrestasiSiswa';
import Testimoni from './components/Testimoni';
import DataGuru from './components/DataGuru';
import StatCounter from './components/StatCounter';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Routes>
          {/* Rute Halaman Utama */}
          <Route path="/" element={
            <div className="flex flex-col"> 
              <Navbar />
              <main>
                <Hero />
                <StatCounter />
                <Sambutan />
                <LatestNews />
                <VisiMisi />
                <ProgramUnggulan />
                <PrestasiSiswa />
                <Testimoni />
                <DataGuru />
              </main>
              <ScrollToTop />
            </div>
          } />

          {/* Rute Halaman Login */}
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;