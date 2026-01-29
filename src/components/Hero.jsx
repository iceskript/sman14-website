import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden font-urbanist bg-black select-none">
      
      {/* 1. Background Image */}
      <div 
        className="absolute inset-0"
        style={{ 
          backgroundImage: `url('/gedung-smapas.png')`,
          backgroundSize: 'cover', 
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />

      {/* 2. Overlay Gradasi Figma */}
      <div 
        className="absolute inset-0 opacity-80" 
        style={{ 
          background: 'linear-gradient(90deg, #000000 0%, #00B0F1 100%)',
          mixBlendMode: 'multiply' 
        }} 
      />

      {/* 3. Konten Teks */}
      <div className="relative max-w-[1440px] mx-auto h-full px-5 lg:px-[60px] flex flex-col justify-center items-start z-10">
        {/* PERBAIKAN: Ditambahkan mt-24 (mobile) dan lg:mt-32 (desktop) untuk menurunkan posisi teks */}
        <div className="max-w-[850px] w-full mt-24 lg:mt-32"> 
          <h1 className="text-[28px] md:text-[40px] lg:text-[52px] font-[900] text-white leading-[1.2] lg:leading-[1.15] tracking-tight mb-6 lg:mb-8 drop-shadow-2xl text-left">
            Selamat datang, <br />
            Di Website SMA Negeri 14 <br />
            Samarinda
          </h1>
          
          {/* PEMBAHARUAN: Link Anchor ke ID Sambutan */}
          <a href="#sambutan" className="inline-block">
            <button className="group bg-transparent hover:bg-[#00B0F1] border-2 border-white hover:border-[#00B0F1] text-white px-6 py-3 lg:px-10 lg:py-3.5 rounded-full font-bold text-[14px] lg:text-[16px] flex items-center gap-2 transition-all duration-300 shadow-lg active:scale-95 cursor-pointer">
              Selengkapnya
              <ChevronDown size={20} className="group-hover:translate-y-1 transition-transform duration-300" />
            </button>
          </a>
        </div>
      </div>

    </section>
  );
};

export default Hero;