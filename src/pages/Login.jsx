import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, Lock, Eye, EyeOff, LogIn, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      navigate('/admin-dashboard'); 
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-[#F0F2F5] flex items-center justify-center p-4 sm:p-6 font-urbanist overflow-hidden">
      
      {/* Wrapper Animasi Utama */}
      <motion.div 
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 2.0, 
          ease: [0.16, 1, 0.3, 1] 
        }}
        className="flex flex-col items-center w-full max-w-[905px]"
      >
        
        {/* Container Utama: 905x417 */}
        <div className="bg-white rounded-[25px] shadow-2xl overflow-hidden flex flex-col md:flex-row w-full md:h-[417px]">
          
          {/* SISI KIRI: ILUSTRASI (DIPERBAIKI AGAR TIDAK OFFSIDE) */}
          <div className="w-full md:w-1/2 h-[250px] md:h-full bg-white flex items-center justify-center p-6 overflow-hidden">
            <img 
              src="/login-visual.webp" 
              alt="Visual SMAN 14" 
              className="w-full h-full object-contain" // Menggunakan object-contain agar logo utuh & tidak terpotong
            />
          </div>

          {/* SISI KANAN: FORM LOGIN (#587F93) */}
          <div className="w-full md:w-1/2 bg-[#587F93] p-8 md:p-12 flex flex-col justify-center text-white">
            <h2 className="text-[32px] md:text-[36px] font-black text-center mb-8 md:mb-10 tracking-[0.2em] uppercase leading-none">
              LOGIN
            </h2>

            <form onSubmit={handleLogin} className="space-y-6 w-full max-w-[340px] mx-auto">
              <div className="flex flex-col gap-1">
                <span className="text-[11px] font-bold opacity-80 ml-14 uppercase">Email</span>
                <div className="relative flex items-center gap-3">
                  <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-lg shrink-0">
                    <User size={20} className="text-[#587F93]" />
                  </div>
                  <input 
                    type="email" 
                    required
                    placeholder="admin@smapas.sch.id"
                    className="flex-grow bg-transparent border-b border-white/50 py-2 outline-none text-[13px] placeholder:text-white/30 focus:border-white transition-all font-bold"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <span className="text-[11px] font-bold opacity-80 ml-14 uppercase">Password</span>
                <div className="relative flex items-center gap-3">
                  <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-lg shrink-0">
                    <Lock size={20} className="text-[#587F93]" />
                  </div>
                  <div className="relative flex-grow">
                    <input 
                      type={showPassword ? "text" : "password"} 
                      required
                      placeholder="••••••••••••••••"
                      className="w-full bg-transparent border-b border-white/50 py-2 outline-none text-[13px] placeholder:text-white/30 pr-8 focus:border-white transition-all font-bold"
                    />
                    <button 
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-0 top-1/2 -translate-y-1/2 text-white/50 hover:text-white"
                    >
                      {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                    </button>
                  </div>
                </div>
              </div>

              <div className="flex justify-center pt-2">
                <motion.button 
                  type="submit"
                  disabled={isLoading}
                  whileHover={{ scale: 1.05, backgroundColor: "#FFFFFF", color: "#587F93" }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-[110px] h-[38px] rounded-lg font-black text-[12px] flex items-center justify-center gap-2 shadow-xl transition-all
                    ${isLoading ? 'bg-gray-400 cursor-not-allowed shadow-none' : 'bg-[#D1D9E0] text-[#587F93]'}`}
                >
                  <AnimatePresence mode="wait">
                    {isLoading ? (
                      <motion.div key="loading" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                        <Loader2 size={18} className="animate-spin" />
                      </motion.div>
                    ) : (
                      <motion.div key="text" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-2">
                        <LogIn size={15} /> LOGIN
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.button>
              </div>
            </form>
          </div>
        </div>

        {/* Footer */}
        <motion.p 
          className="mt-8 text-[11px] font-bold text-[#587F93]/60 uppercase tracking-[0.2em] text-center"
        >
          @Managed by TIM IT SMAN 14 Samarinda
        </motion.p>

      </motion.div>
    </div>
  );
};

export default Login;