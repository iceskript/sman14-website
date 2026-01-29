import React, { useState } from 'react';
import { User, Lock, Eye, EyeOff, LogIn } from 'lucide-react';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen bg-[#F0F2F5] flex items-center justify-center p-4 font-urbanist">
      <div className="flex flex-col items-center w-full max-w-[900px]">
        
        {/* Container Utama */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row w-full min-h-[500px]">
          
          {/* SISI KIRI: ILUSTRASI & LOGO */}
          <div className="w-full md:w-1/2 p-10 flex flex-col items-center justify-center border-r border-gray-100 bg-white">
            <div className="flex items-center gap-3 self-start mb-8">
              <img src="/logo-smapas.png" alt="Logo" className="w-12 h-12" />
              <div className="text-left">
                <h1 className="text-[16px] font-black text-[#547B8E] leading-tight uppercase">
                  SMA NEGERI 14 SAMARINDA
                </h1>
              </div>
            </div>
            
            <div className="w-full flex justify-center">
              {/* Tempatkan gambar yang kamu download di sini */}
              <img 
                src="/login-illustration.png" 
                alt="Admin Illustration" 
                className="max-w-[80%] h-auto"
                onError={(e) => e.target.src = "https://storyset.com/illustration/server-status/pana"} 
              />
            </div>
          </div>

          {/* SISI KANAN: FORM LOGIN */}
          <div className="w-full md:w-1/2 bg-[#5F8596] p-10 lg:p-14 flex flex-col justify-center text-white relative">
            <h2 className="text-3xl font-black text-center mb-10 tracking-widest uppercase">
              LOGIN
            </h2>

            <form className="space-y-6">
              {/* Input Email */}
              <div className="space-y-1">
                <label className="text-xs font-bold opacity-80 ml-1">Email</label>
                <div className="relative group">
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                    <User size={18} className="text-white" />
                  </div>
                  <input 
                    type="email" 
                    placeholder="admin@smapas.sch.id"
                    className="w-full bg-transparent border-b-2 border-white/30 py-3 pl-12 pr-4 outline-none focus:border-white transition-all text-sm font-medium placeholder:text-white/50"
                  />
                </div>
              </div>

              {/* Input Password */}
              <div className="space-y-1">
                <label className="text-xs font-bold opacity-80 ml-1">Password</label>
                <div className="relative group">
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                    <Lock size={18} className="text-white" />
                  </div>
                  <input 
                    type={showPassword ? "text" : "password"} 
                    placeholder="••••••••••••••••"
                    className="w-full bg-transparent border-b-2 border-white/30 py-3 pl-12 pr-10 outline-none focus:border-white transition-all text-sm font-medium placeholder:text-white/50"
                  />
                  <button 
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-2 top-1/2 -translate-y-1/2 text-white/70 hover:text-white"
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>

              {/* Remember Me */}
              <div className="flex items-center gap-2 py-2">
                <input type="checkbox" id="remember" className="accent-[#5F8596] w-4 h-4 cursor-pointer" />
                <label htmlFor="remember" className="text-xs font-bold cursor-pointer select-none">Remember Me</label>
              </div>

              {/* Login Button */}
              <button className="w-fit mx-auto bg-[#D1D9E0] text-[#5F8596] px-8 py-2.5 rounded-lg font-black text-sm flex items-center gap-2 shadow-lg active:scale-95 transition-transform">
                <LogIn size={18} /> Login
              </button>

              <div className="text-center">
                <a href="#" className="text-[10px] font-bold opacity-70 hover:opacity-100 transition-opacity">Forgot password?</a>
              </div>
            </form>
          </div>
        </div>

        {/* Footer */}
        <p className="mt-8 text-[11px] font-bold text-gray-500 uppercase tracking-widest">
          @Managed by TIM IT SMAN 14 Samarinda
        </p>
      </div>
    </div>
  );
};

export default Login;