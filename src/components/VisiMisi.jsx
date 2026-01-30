import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const VisiMisi = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const dataVisiMisi = [
    {
      title: "Unggul Berprestasi",
      desc: "Menghasilkan lulusan yang kompetitif di bidang akademik maupun non-akademik di tingkat nasional.",
      img: "/visi-1.png", 
    },
    {
      title: "Berwawasan Lingkungan",
      desc: "Menciptakan budaya sekolah yang peduli dan berbudaya lingkungan hidup secara berkelanjutan.",
      img: "/visi-2.jpg",
    },
    {
      title: "Berkarakter",
      desc: "Membentuk kepribadian siswa yang beriman, bertaqwa, dan menjunjung tinggi nilai luhur budi pekerti.",
      img: "/visi-3.jpg",
    },
  ];

  return (
    <section className="py-24 bg-white font-urbanist overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-5 lg:px-[60px]">
        
        {/* Header Section */}
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[28px] lg:text-[36px] font-[900] text-[#333] tracking-tight uppercase"
          >
            VISI & MISI
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: 60 }}
            viewport={{ once: true }}
            className="h-1 bg-[#00B4D8] mx-auto mt-4 rounded-full" 
          />
        </div>

        {/* Container Utama:
          - rounded-[20px] -> Membuat sudut sedikit melengkung (elegan).
          - skew-x tetap ada untuk efek miring.
        */}
        <div className="flex flex-col lg:flex-row h-[600px] w-full lg:skew-x-[-10deg] overflow-hidden rounded-[20px] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] bg-gray-900 border-none ring-1 ring-black/5 transform-gpu">
          {dataVisiMisi.map((item, index) => (
            <motion.div
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              // Transisi flex-grow yang smooth
              layout
              transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }} 
              className="relative h-full overflow-hidden border-r border-white/5 last:border-none cursor-pointer"
              style={{
                flex: hoveredIndex === index ? 3.5 : 1, // Logika pelebaran
              }}
            >
              {/* Image Layer - Menggunakan will-change untuk performa */}
              <div className="absolute inset-0 lg:skew-x-[10deg] scale-[1.8] transform-gpu will-change-transform">
                <img 
                  src={item.img} 
                  alt={item.title}
                  className="w-full h-full object-cover transition-all duration-1000 ease-out"
                  style={{ 
                    // Scale hanya pada gambar, tidak mempengaruhi layout parent
                    transform: hoveredIndex === index ? 'scale(1.1)' : 'scale(1)',
                    filter: hoveredIndex === index ? 'brightness(0.6)' : 'brightness(0.4)'
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
              </div>

              {/* Content Layer */}
              <div className="absolute inset-0 p-8 lg:p-12 flex flex-col justify-end lg:skew-x-[10deg] text-white pointer-events-none">
                {/* Wrapper konten agar tidak ikut 'tergencet' saat flex berubah.
                  min-w-[300px] menjaga teks tetap utuh meski container menyempit.
                */}
                <div className="relative z-10 min-w-[300px]">
                  
                  {/* Judul: Posisinya absolut/fixed relative terhadap container agar tidak lompat */}
                  <motion.h3 
                    layout="position"
                    className={`font-[900] uppercase tracking-wider leading-tight transition-colors duration-300 drop-shadow-md origin-bottom-left ${
                      hoveredIndex === index 
                        ? 'text-[32px] lg:text-[40px] mb-6 text-white' 
                        : 'text-[20px] lg:text-[24px] mb-0 text-white/70'
                    }`}
                  >
                    {item.title}
                  </motion.h3>

                  {/* Deskripsi & Tombol: Hanya muncul saat hover */}
                  <AnimatePresence mode="wait">
                    {hoveredIndex === index && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10, transition: { duration: 0.2 } }}
                        transition={{ duration: 0.4, delay: 0.1 }}
                        className="pointer-events-auto" // Aktifkan pointer events hanya pada area ini
                      >
                        <p className="text-[16px] lg:text-[17px] font-medium leading-relaxed max-w-[480px] text-white/90 mb-8 border-l-[3px] border-[#00B4D8] pl-5">
                          {item.desc}
                        </p>
                        
                        <motion.button 
                          whileHover={{ x: 5, backgroundColor: '#00B4D8', color: '#fff' }}
                          whileTap={{ scale: 0.95 }}
                          className="flex items-center gap-3 bg-white text-black px-8 py-3.5 rounded-full font-[800] text-[12px] uppercase tracking-[0.2em] transition-colors shadow-xl"
                        >
                          Selengkapnya
                          <ArrowRight size={16} strokeWidth={3} />
                        </motion.button>
                      </motion.div>
                    )}
                  </AnimatePresence>

                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VisiMisi;