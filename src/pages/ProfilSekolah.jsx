import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const ProfilSekolah = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.8, 
        ease: [0.22, 1, 0.36, 1] 
      }
    }
  };

  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="pt-32 lg:pt-44 pb-24 font-urbanist bg-white min-h-screen"
    >
      
      {/* 1. HEADER TITLE */}
      <motion.div variants={itemVariants} className="max-w-[1440px] mx-auto px-5 lg:px-[60px] mb-8 lg:mb-12">
        <h1 className="text-[40px] lg:text-[56px] font-[900] text-black leading-none mb-3 tracking-tight">
          Profil Sekolah
        </h1>
        <p className="text-[16px] lg:text-[18px] text-[#999] font-medium">Beranda / Profil</p>
      </motion.div>

      {/* 2. HERO SECTION */}
      <motion.section variants={itemVariants} className="relative w-full mb-24 lg:mb-40">
        <div className="w-full h-[350px] lg:h-[600px] overflow-hidden relative z-0 bg-gray-100 rounded-tr-[60px] lg:rounded-tr-[150px]">
          <img 
            src="/gedung2.webp" 
            alt="Gedung SMAN 14 Samarinda" 
            className="w-full h-full object-cover" 
          />
        </div>

        <div className="absolute inset-0 pointer-events-none">
          <div className="max-w-[1440px] mx-auto h-full px-5 lg:px-[60px] relative">
            <div className="absolute -bottom-16 lg:-bottom-24 left-5 lg:left-[60px] w-[90%] lg:w-[65%] bg-[#587F93] text-white p-8 lg:p-14 rounded-tr-[40px] lg:rounded-tr-[100px] z-10 pointer-events-auto border-2 border-white/20 antialiased">
              <h2 className="text-[22px] lg:text-[32px] font-[800] mb-4 lg:mb-6 uppercase tracking-wider leading-tight">
                SMA Negeri 14 Samarinda
              </h2>
              <p className="text-[14px] lg:text-[16px] leading-relaxed opacity-95 text-justify font-medium">
                SMA Negeri 14 Samarinda adalah lembaga pendidikan menengah atas yang berdedikasi untuk mencetak generasi penerus bangsa yang cerdas, berkarakter, dan kompetitif.
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* 3. SECTION SAMBUTAN */}
      <motion.div variants={itemVariants} className="max-w-[1440px] mx-auto px-5 lg:px-[60px] relative z-20">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-24 mt-8">
          <div className="relative shrink-0 pt-24 isolate">
            <div className="relative w-[300px] h-[340px] lg:w-[450px] lg:h-[420px]">
              <div className="absolute inset-0 bg-[#587F93] rounded-t-[220px] rounded-bl-[120px] rounded-br-none border-b-4 border-black/10 z-0"></div>
              <div className="absolute bottom-0 left-0 w-full h-[160%] flex justify-center z-10 pointer-events-none">
                <img src="/test1.png" alt="Kepala Sekolah" className="h-full w-auto object-contain object-bottom ml-[4%]" />
              </div>
              <div className="absolute bottom-10 right-[-15px] bg-white text-[#587F93] px-8 py-2.5 rounded-l-full border-y border-l border-black/10 z-20">
                <h3 className="text-[18px] lg:text-[24px] font-[900] uppercase tracking-tighter">SAMBUTAN</h3>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start max-w-2xl pt-10">
            <span className="text-[#587F93] text-[120px] font-serif leading-none h-[60px] opacity-30">“</span>
            <p className="text-[18px] lg:text-[24px] text-[#334155] mb-10 leading-snug font-medium">
              "Sebagai pimpinan SMAN 14 Samarinda, saya mengajak seluruh elemen sekolah untuk bersinergi mewujudkan visi sekolah yang unggul dan berakhlak mulia."
            </p>
            <button 
              onClick={() => setIsExpanded(!isExpanded)}
              className="bg-[#587F93] hover:bg-[#466575] text-white px-6 py-2.5 rounded-md font-bold flex items-center gap-4 active:scale-95 text-[14px]"
            >
              {isExpanded ? 'Sembunyikan' : 'Selengkapnya'}
              <motion.div animate={{ rotate: isExpanded ? 180 : 0 }} className="bg-white text-[#587F93] p-1 rounded-full">
                <ChevronDown size={18} />
              </motion.div>
            </button>
          </div>
        </div>
      </motion.div>

      {/* 4. EXPANDED CONTENT */}
      <AnimatePresence>
        {isExpanded && (
          <motion.section 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden bg-[#587F93] text-white mt-32"
          >
            <div className="max-w-[1440px] mx-auto px-5 lg:px-[60px] py-20 grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-[28px] lg:text-[36px] font-[900] mb-10 uppercase">Visi Besar SMAN 14</h3>
                <p className="text-[16px] lg:text-[18px] leading-[2] text-justify opacity-90 font-medium">
                  Melalui program Internal Enhancement, kami bertransformasi menjadi pusat keunggulan pendidikan yang adaptif.
                </p>
              </div>
              <div className="flex flex-col justify-end">
                <p className="text-[16px] lg:text-[18px] leading-[2] opacity-90 mb-12 text-justify font-medium">
                  Sinergi antara tenaga pendidik, siswa, dan orang tua adalah kunci keberhasilan kami.
                </p>
                <div className="border-t border-white/30 pt-8">
                  <p className="font-[900] text-[22px]">Kepala Sekolah SMAN 14,</p>
                </div>
              </div>
            </div>
          </motion.section>
        )}
      </AnimatePresence>

      {/* 5. SECTION PIMPINAN */}
      <motion.section variants={itemVariants} className="w-full mt-32">
        <div className="text-center mb-16 px-5">
          <h2 className="text-[32px] lg:text-[42px] font-[900] text-black mb-3 uppercase tracking-tight">
            Pimpinan SMA Negeri 14 Samarinda
          </h2>
          <div className="w-16 h-1.5 bg-[#587F93] mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 w-full gap-0">
          {[
            { nama: "Waka Kurikulum", foto: "/waka1.png", dark: true },
            { nama: "Kepala Sekolah", foto: "/kepsek.png", dark: false },
            { nama: "Waka Kesiswaan", foto: "/waka2.png", dark: true }
          ].map((staf, index) => (
            <div key={index} className="group relative h-[500px] lg:h-[650px] overflow-hidden bg-[#587F93]">
              <img src={staf.foto} alt={staf.nama} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
              <div className={`absolute inset-0 transition-opacity duration-500 group-hover:opacity-0 z-10 ${staf.dark ? 'bg-black/45' : 'bg-[#587F93]/70'}`}></div>
              <div className="absolute bottom-12 left-0 w-full px-8 z-30 text-center transition-transform duration-500 group-hover:-translate-y-3">
                <h4 className="text-white text-[20px] lg:text-[26px] font-[800] drop-shadow-lg">{staf.nama}</h4>
                <div className="w-12 h-1 bg-white mx-auto mt-4 opacity-0 group-hover:opacity-100 group-hover:w-24 transition-all duration-700"></div>
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      {/* 6. BOTTOM SHAPE SECTION DENGAN BLOK VISI */}
      <motion.section 
        variants={itemVariants} 
        className="relative w-full pt-20 lg:pt-32 flex flex-col items-center"
      >
        <div className="relative z-20 w-full max-w-[1320px] px-5 lg:px-0">
            <div className="relative w-full h-[320px] lg:h-[520px] overflow-hidden rounded-2xl shadow-2xl">
                {/* Gambar Utama */}
                <img 
                    src="/gedung2.webp" 
                    alt="Gedung SMAN 14 Samarinda" 
                    className="w-full h-full object-cover"
                />

                {/* BLOK VISI (Di dalam gambar) */}
                <div className="absolute bottom-6 left-6 lg:bottom-12 lg:left-12 max-w-[90%] lg:max-w-[450px] bg-[#587F93]/85 backdrop-blur-md text-white p-6 lg:p-10 rounded-xl border border-white/20 z-30">
                  <h3 className="text-[24px] lg:text-[42px] font-[900] mb-3 lg:mb-4 tracking-tighter leading-none">
                    VISI
                  </h3>
                  <p className="text-[14px] lg:text-[18px] leading-relaxed font-medium opacity-95">
                    Terwujudnya Insan yang Bertaqwa, Unggul dalam Prestasi, Berbudaya Lingkungan, dan Kompetitif di Era Global
                  </p>
                </div>
            </div>
        </div>

        {/* Shape Biru di Bawah */}
        <div className="w-full h-[200px] lg:h-[300px] relative -mt-32 lg:-mt-48 z-10">
          <div 
            className="absolute inset-0 bg-[#587F93] flex items-end justify-center pb-12"
            style={{
              clipPath: 'polygon(0% 35%, 33.3% 35%, 33.3% 0%, 100% 0%, 100% 100%, 0% 100%)'
            }}
          >
            <h3 className="text-white text-[16px] lg:text-2xl font-[900] opacity-30 uppercase tracking-[0.3em] pointer-events-none">
              Area Informasi Tambahan
            </h3>
          </div>
        </div>
      </motion.section>

    </motion.div>
  );
};

export default ProfilSekolah;