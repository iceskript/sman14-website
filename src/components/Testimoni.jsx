import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { Quote } from 'lucide-react';

import 'swiper/css';
import 'swiper/css/pagination';

const Testimoni = () => {
  const alumniData = [
    { id: 1, nama: "Najwaa Nur 'Azizah", universitas: "Universitas Mulawarman", pesan: "Kesan saya selama bersekolah di SMAPAS, saya mendapatkan banyak pengalaman seru dimana bisa ngobrol seru bareng teman dan juga guru-guru di SMAPAS, bimbingan belajar juga penuh dengan keseruan dan sangat membina saya untuk menjunjung prestasi saya.", img: "/alumni-1.webp"},
    { id: 2, nama: "Nama Alumni", universitas: "Universitas B", pesan: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.", img: "/alumni-2.jpg" },
    { id: 3, nama: "Nama Alumni", universitas: "Universitas C", pesan: "Pembelajaran di SMAPAS memberikan fondasi yang sangat kuat bagi karir akademik saya selanjutnya.", img: "/alumni-3.jpg" },
    { id: 4, nama: "Nama Alumni", universitas: "Universitas D", pesan: "Kekeluargaan dan bimbingan guru-guru di SMAN 14 Samarinda adalah kenangan yang tidak terlupakan.", img: "/alumni-4.jpg" },
  ];

  return (
    <section className="py-24 bg-white font-urbanist overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-5 lg:px-[100px]">
        
        {/* --- HEADER SECTION --- */}
        <div className="flex flex-col items-start mb-20">
          <div className="flex items-center gap-6 mb-2">
            <span className="text-[#888888] font-[900] tracking-[0.3em] uppercase text-[18px] lg:text-[20px] whitespace-nowrap">
              TESTIMONI
            </span>
            <div className="w-24 lg:w-32 h-[3px] bg-[#BCBCBC] rounded-full" />
          </div>
          <h2 className="text-[28px] lg:text-[36px] font-[900] text-black uppercase tracking-tight -ml-[2px]">
            ALUMNI SMAPAS
          </h2>
        </div>

        {/* --- SLIDER TESTIMONI --- */}
        <div className="relative testimoni-slider-container lg:px-12">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={60}
            slidesPerView={1}
            speed={800}
            autoplay={{ delay: 6000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            breakpoints={{ 
              1024: { slidesPerView: 2 } 
            }}
            className="!pb-28 !pt-16" 
          >
            {alumniData.map((item) => (
              <SwiperSlide key={item.id} className="h-auto pb-10">
                {/* PENYESUAIAN CARD:
                  - shadow-[0_30px_60px_rgba(0,0,0,0.12)] dipertegas agar efek card lebih muncul.
                  - drop-shadow-[0_10px_10px_rgba(0,0,0,0.05)] untuk aksen bayangan tambahan.
                */}
                <div className="relative bg-white rounded-[15px] p-10 lg:p-14 shadow-[0_30px_60px_rgba(0,0,0,0.12)] drop-shadow-[0_10px_10px_rgba(0,0,0,0.05)] border border-gray-100 flex flex-col h-full ml-10 mr-4 transition-all duration-300 hover:shadow-[0_40px_80px_rgba(0,0,0,0.15)]">
                  
                  {/* FOTO ALUMNI */}
                  <div className="absolute -top-12 -left-10 w-24 h-24 lg:w-32 lg:h-32 bg-[#D9D9D9] rounded-full border-[8px] border-white shadow-xl z-30 overflow-hidden">
                    <img 
                      src={item.img} 
                      alt={item.nama} 
                      className="w-full h-full object-cover"
                      onError={(e) => { e.target.style.display = 'none'; }}
                    />
                  </div>

                  {/* IDENTITAS */}
                  <div className="ml-14 lg:ml-20 mb-8">
                    <h3 className="text-[20px] lg:text-[24px] font-[900] text-[#1A1A1A] leading-tight uppercase">
                      {item.nama}
                    </h3>
                    <p className="text-[#666666] font-semibold text-[14px] lg:text-[16px]">
                      {item.universitas}
                    </p>
                  </div>

                  {/* PESAN */}
                  <div className="relative">
                    <Quote className="absolute -top-3 -left-7 text-[#1A1A1A] w-6 h-6 fill-current opacity-20" />
                    <p className="text-[#1A1A1A] font-medium italic leading-relaxed text-[15px] lg:text-[17px] pl-2 pr-4 relative z-10">
                      {item.pesan}
                    </p>
                    <div className="flex justify-end mt-2">
                      <Quote className="text-[#1A1A1A] w-6 h-6 fill-current opacity-20 rotate-180" />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* CUSTOM PAGINATION: 
            - Disamakan dengan bagian prestasi (bulat standar).
            - Warna biru SMAN 14 Samarinda (#00B4D8).
          */}
          <style jsx global>{`
            .testimoni-slider-container .swiper-pagination {
              bottom: 10px !important;
            }
            .testimoni-slider-container .swiper-pagination-bullet {
              width: 14px;
              height: 14px;
              background: #D1D5DB;
              opacity: 1;
              margin: 0 8px !important;
              transition: all 0.3s ease;
            }
            .testimoni-slider-container .swiper-pagination-bullet-active {
              background: #00B4D8 !important;
              width: 14px;
              border-radius: 50%;
            }
          `}</style>
        </div>
      </div>
    </section>
  );
};

export default Testimoni;