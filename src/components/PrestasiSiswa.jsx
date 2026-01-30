import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const PrestasiSiswa = () => {
  const prestasiData = [
    {
      id: 1,
      nama: "NAMA SISWA/I",
      prestasi: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi",
      img: "/siswa-1.jpg", 
    },
    {
      id: 2,
      nama: "NAMA SISWA/I",
      prestasi: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi",
      img: "/siswa-2.jpg",
    },
    {
      id: 3,
      nama: "NAMA SISWA/I",
      prestasi: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi",
      img: "/siswa-3.jpg",
    },
    {
      id: 4,
      nama: "NAMA SISWA/I",
      prestasi: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi",
      img: "/siswa-4.jpg",
    },
  ];

  return (
    <section className="py-24 bg-white font-urbanist overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-5 lg:px-[100px]">
        
        {/* --- HEADER SECTION --- */}
        <div className="flex flex-col items-start mb-16">
          <div className="flex items-center gap-6 mb-2">
            <span className="text-[#888888] font-[900] tracking-[0.3em] uppercase text-[18px] lg:text-[20px] whitespace-nowrap">
              ACHIEVEMENT
            </span>
            <div className="w-24 lg:w-32 h-[3px] bg-[#BCBCBC] rounded-full" />
          </div>
          
          <h2 className="text-[28px] lg:text-[36px] font-[900] text-black uppercase tracking-tight -ml-[1px] lg:-ml-[2px]">
            PRESTASI SISWA/I
          </h2>
        </div>

        {/* --- SLIDER PRESTASI --- */}
        <div className="relative prestasi-slider-container">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={40}
            slidesPerView={1}
            speed={600}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="!pb-24"
          >
            {prestasiData.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="bg-white rounded-[40px] overflow-hidden flex flex-col h-full border border-[#F5F5F5] shadow-2xl drop-shadow-[0_20px_20px_rgba(0,0,0,0.05)] mb-10">
                  
                  {/* Image Area - Bersih tanpa garis X */}
                  <div className="relative h-[300px] bg-[#F8F8F8] overflow-hidden">
                    <img 
                      src={item.img} 
                      alt={item.nama}
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                      onError={(e) => { e.target.src = 'https://via.placeholder.com/600x400?text=Foto+Siswa'; }}
                    />
                  </div>

                  {/* Content Area */}
                  <div className="p-10 text-center flex flex-col flex-grow items-center">
                    <h3 className="text-[22px] lg:text-[24px] font-[900] text-[#1A1A1A] mb-4 uppercase tracking-tight">
                      {item.nama}
                    </h3>
                    <p className="text-[#666666] font-semibold leading-relaxed text-[15px] lg:text-[16px] opacity-90 max-w-[300px]">
                      {item.prestasi}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Styles untuk Dots Pagination sesuai Gambar */}
          <style jsx global>{`
            .prestasi-slider-container .swiper-pagination {
              bottom: 0px !important;
            }
            .prestasi-slider-container .swiper-pagination-bullet {
              width: 14px;
              height: 14px;
              background: #D1D5DB;
              opacity: 1;
              margin: 0 8px !important;
              transition: all 0.3s ease;
            }
            .prestasi-slider-container .swiper-pagination-bullet-active {
              background: #00B4D8; /* Warna Biru SMAN 14 Samarinda */
              width: 14px;
              border-radius: 50%;
            }
          `}</style>
        </div>

      </div>
    </section>
  );
};

export default PrestasiSiswa;