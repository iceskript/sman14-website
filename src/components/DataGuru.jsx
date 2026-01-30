import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

const DataGuru = () => {
  const guruData = [
    { id: 1, nama: "Nama Guru, S.Pd.", jabatan: "Kepala Sekolah", img: "/guru-1.jpg" },
    { id: 2, nama: "Nama Guru, M.Pd.", jabatan: "Wakil Kepala Sekolah", img: "/guru-2.jpg" },
    { id: 3, nama: "Nama Guru, S.T.", jabatan: "Guru Mata Pelajaran", img: "/guru-3.jpg" },
    { id: 4, nama: "Nama Guru, S.Kom.", jabatan: "Guru Mata Pelajaran", img: "/guru-4.jpg" },
    { id: 5, nama: "Nama Guru, M.Si.", jabatan: "Guru Mata Pelajaran", img: "/guru-5.jpg" },
    { id: 6, nama: "Nama Guru, S.Si.", jabatan: "Guru Mata Pelajaran", img: "/guru-6.jpg" },
  ];

  return (
    <section className="py-24 bg-[#F9F9F9] font-urbanist overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-5 lg:px-[100px]">
        
        {/* --- HEADER SECTION --- */}
        <div className="text-center mb-16">
          <h2 className="text-[32px] lg:text-[40px] font-black text-[#1A1A1A] uppercase tracking-tight leading-none mb-2">
            DATA GURU
          </h2>
          <p className="text-[18px] lg:text-[22px] font-medium text-[#555]">
            SMA Negeri 14 Samarinda
          </p>
          <div className="w-24 h-[4px] bg-[#00B4D8] mx-auto mt-4 rounded-full" />
        </div>

        {/* --- SLIDER AREA --- */}
        <div className="relative group">
          
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            speed={800}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            navigation={{
              prevEl: '.prev-guru',
              nextEl: '.next-guru',
            }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 4 },
            }}
            className="!pb-12"
          >
            {guruData.map((guru) => (
              <SwiperSlide key={guru.id}>
                <motion.div
                  whileHover={{ y: -12 }}
                  className="flex flex-col items-center p-2"
                >
                  {/* KOTAK GAMBAR - GARIS X SUDAH DIHAPUS */}
                  <div className="w-full aspect-[4/5] bg-white rounded-2xl shadow-[0_25px_50px_-12px_rgba(0,0,0,0.15)] border border-white overflow-hidden mb-6 relative group/img">
                    <img 
                      src={guru.img} 
                      alt={guru.nama}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover/img:scale-110"
                      onError={(e) => { e.target.style.display = 'none'; }}
                    />
                    
                    {/* Overlay gradasi tipis untuk depth */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity duration-500" />
                  </div>

                  {/* INFO GURU */}
                  <div className="text-center px-2">
                    <h3 className="text-[19px] lg:text-[21px] font-[900] text-[#1A1A1A] leading-tight mb-1">
                      {guru.nama}
                    </h3>
                    <p className="text-[#00B4D8] font-bold text-[14px] uppercase tracking-widest">
                      {guru.jabatan}
                    </p>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigasi Panah */}
          <button className="prev-guru absolute top-1/2 -left-4 lg:-left-16 transform -translate-y-1/2 z-10 text-gray-400 hover:text-[#00B4D8] transition-all hidden md:block">
            <ChevronLeft size={60} strokeWidth={1.2} />
          </button>
          <button className="next-guru absolute top-1/2 -right-4 lg:-right-16 transform -translate-y-1/2 z-10 text-gray-400 hover:text-[#00B4D8] transition-all hidden md:block">
            <ChevronRight size={60} strokeWidth={1.2} />
          </button>
        </div>

        {/* --- TOMBOL SELENGKAPNYA --- */}
        <div className="mt-8 flex justify-center">
          <motion.button
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(0,180,216,0.3)" 
            }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#00B4D8] text-white px-12 py-4 rounded-full font-[900] text-[15px] uppercase tracking-widest transition-all"
          >
            Selengkapnya
          </motion.button>
        </div>

      </div>

      <style jsx global>{`
        .prev-guru.swiper-button-disabled,
        .next-guru.swiper-button-disabled {
          opacity: 0.15;
          cursor: not-allowed;
        }
      `}</style>
    </section>
  );
};

export default DataGuru;