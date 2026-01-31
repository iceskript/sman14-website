// 1. TETAP PERTAHANKAN SEMUA IMPORT INI
import React, { useEffect } from 'react'; 
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Lenis from '@studio-freight/lenis'; 
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
import Footer from './components/Footer';

// 2. LOGIKA LAYOUT
const AppContent = () => {
  const location = useLocation();
  const isLoginPage = location.pathname === '/login';

  // --- INISIALISASI SMOOTH SCROLL (LENIS) - VERSI OCEAN SCHOOL ---
  useEffect(() => {
    const lenis = new Lenis({
      // Menggunakan lerp (linear interpolation) memberikan sensasi yang lebih ringan
      lerp: 0.08,              // Nilai 0.05 - 0.1 memberikan efek "meluncur" khas Ocean School
      wheelMultiplier: 1.2,    // Memberikan sedikit akselerasi agar scroll terasa enteng
      smoothWheel: true,       
      normalizeWheel: true,    // Sangat penting agar mouse Windows & Mac terasa sama
      infinite: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // FIX: Scroll ke atas otomatis saat pindah rute
    lenis.scrollTo(0, { immediate: true });

    return () => {
      lenis.destroy();
    };
  }, [location.pathname]); // Re-run saat pindah halaman

  return (
    <div className="flex flex-col min-h-screen bg-white font-inter overflow-x-hidden">
      {!isLoginPage && <Navbar />}

      <main className="flex-grow">
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <StatCounter />
              <Sambutan />
              <LatestNews />
              <VisiMisi />
              <ProgramUnggulan />
              <PrestasiSiswa />
              <Testimoni />
              <DataGuru />
            </>
          } />
          <Route path="/login" element={<Login />} />
        </Routes>
      </main>

      {!isLoginPage && <Footer />}
      <ScrollToTop />
    </div>
  );
};

// 3. FUNGSI UTAMA
function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;