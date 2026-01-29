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

        {/* Slanted Slider Container dengan Shadow Lebih Mendalam */}
        <div className="flex flex-col lg:flex-row h-[600px] w-full lg:skew-x-[-10deg] overflow-hidden rounded-[40px] shadow-[0_40px_80px_-15px_rgba(0,0,0,0.3)] bg-gray-900 border-none ring-1 ring-black/5">
          {dataVisiMisi.map((item, index) => (
            <motion.div
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="relative h-full transition-all duration-700 ease-[0.23, 1, 0.32, 1] cursor-pointer overflow-hidden border-r border-white/5 last:border-none"
              style={{
                flex: hoveredIndex === index ? 3.5 : 1,
              }}
            >
              {/* Image Layer */}
              <div className="absolute inset-0 lg:skew-x-[10deg] scale-[1.8] transform-gpu">
                <img 
                  src={item.img} 
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-1000"
                  style={{ 
                    transform: hoveredIndex === index ? 'scale(1.15)' : 'scale(1)',
                    filter: hoveredIndex === index ? 'brightness(0.7)' : 'brightness(0.5)'
                  }}
                />
                {/* Efek Shadow di dalam (Inner Shadow) untuk menambah dimensi */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/20 to-transparent opacity-90" />
              </div>

              {/* Content Layer */}
              <div className="absolute inset-0 p-10 lg:p-16 flex flex-col justify-end lg:skew-x-[10deg] text-white">
                <motion.div layout className="relative z-10">
                  
                  <h3 className={`font-[1000] uppercase tracking-wider leading-tight transition-all duration-500 drop-shadow-md ${
                    hoveredIndex === index 
                      ? 'text-[28px] lg:text-[38px] mb-6' 
                      : 'text-[18px] lg:text-[22px] mb-0 opacity-80'
                  }`}>
                    {item.title}
                  </h3>

                  <AnimatePresence>
                    {hoveredIndex === index && (
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -10 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                      >
                        <p className="text-[15px] lg:text-[17px] font-medium leading-relaxed max-w-[450px] text-white/90 mb-8 border-l-2 border-[#00B4D8] pl-5 drop-shadow-sm">
                          {item.desc}
                        </p>
                        
                        <motion.button 
                          whileHover={{ gap: '16px', backgroundColor: '#00B4D8', color: '#ffffff' }}
                          whileTap={{ scale: 0.95 }}
                          className="flex items-center gap-3 bg-white text-black px-8 py-3.5 rounded-full font-[1000] text-[11px] uppercase tracking-[0.15em] transition-all duration-300 shadow-2xl"
                        >
                          Selengkapnya
                          <ArrowRight size={15} strokeWidth={3} />
                        </motion.button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VisiMisi;