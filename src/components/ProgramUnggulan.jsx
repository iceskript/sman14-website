import React from 'react';
import { motion } from 'framer-motion';

const ProgramUnggulan = () => {
  const programData = [
    {
      id: 1,
      title: "Pembelajaran Berbasis Teknologi",
      desc: "Implementasi media pembelajaran inovatif untuk meningkatkan motivasi dan efektivitas belajar siswa di era digital.",
      img: "/program-1.jpg", 
    },
    {
      id: 2,
      title: "Ekstrakurikuler",
      desc: "Wadah pengembangan bakat dan minat siswa melalui berbagai kegiatan non-akademik yang variatif dan kompetitif.",
      img: "/program-2.jpg",
    },
    {
      id: 3,
      title: "Life Skills",
      desc: "Pembekalan keterampilan hidup dan karakter untuk mencetak lulusan yang mandiri dan siap menghadapi tantangan masa depan.",
      img: "/program-3.jpg",
    },
  ];

  return (
    <section className="py-24 bg-white font-urbanist overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-5 lg:px-[100px]">
        
        {/* --- HEADER SECTION --- */}
        <div className="flex flex-col items-start mb-16">
          <div className="flex items-center gap-6 mb-2">
            <span className="text-[#888888] font-[900] tracking-[0.3em] uppercase text-[18px] lg:text-[20px] whitespace-nowrap">
              Our Program
            </span>
            <div className="w-24 lg:w-32 h-[3px] bg-[#BCBCBC] rounded-full" />
          </div>
          
          <h2 className="text-[28px] lg:text-[36px] font-[900] text-black uppercase tracking-tight -ml-[1px] lg:-ml-[2px]">
            Program Unggulan
          </h2>
        </div>

        {/* --- GRID KARTU DENGAN DROP SHADOW --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {programData.map((item) => (
            <motion.div
              key={item.id}
              whileHover={{ 
                y: -15,
                // Shadow akan menguat saat di-hover untuk efek mengangkat
                shadow: "0 45px 100px rgba(0,0,0,0.12)" 
              }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="bg-white rounded-[40px] overflow-hidden flex flex-col h-full border border-[#F5F5F5] shadow-2xl drop-shadow-[0_20px_20px_rgba(0,0,0,0.05)]"
            >
              <div className="relative h-[300px] bg-[#F8F8F8] overflow-hidden group">
                <img 
                  src={item.img} 
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  onError={(e) => { e.target.style.display = 'none'; }}
                />
                <div className="absolute inset-0 opacity-[0.1] pointer-events-none">
                  <svg width="100%" height="100%">
                    <line x1="0" y1="0" x2="100%" y2="100%" stroke="black" strokeWidth="2.5" />
                    <line x1="100%" y1="0" x2="0" y2="100%" stroke="black" strokeWidth="2.5" />
                  </svg>
                </div>
              </div>

              <div className="p-10 lg:p-12 pt-8 flex flex-col flex-grow">
                {/* Shadow ditambahkan juga pada badge nomor agar konsisten */}
                <div className="w-12 h-12 bg-[#00B4D8] text-white flex items-center justify-center font-black rounded-xl mb-8 shadow-lg shadow-[#00B4D8]/30 text-xl">
                  {item.id}
                </div>
                <h3 className="text-[24px] lg:text-[26px] font-black text-[#1A1A1A] mb-5 leading-tight">
                  {item.title}
                </h3>
                <p className="text-[#666666] font-semibold leading-relaxed text-[16px] lg:text-[17px] opacity-90">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramUnggulan;