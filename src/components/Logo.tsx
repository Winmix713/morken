import React from 'react';
import { Trophy } from 'lucide-react';

const Logo: React.FC = () => {
  return (
    <a
      href="/"
      className="relative flex items-center gap-3 group hover-glow rounded-lg"
      aria-label="WinMix Tipster Home"
    >
      {/* Glow element */}
      <span className="absolute -inset-1 bg-blue-500/10 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-[-1]"></span>
      
      <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-blue-600/90 to-blue-700/90 flex items-center justify-center shadow-[inset_0_1px_1px_rgba(255,255,255,0.3),0_8px_20px_rgba(59,130,246,0.3)] backdrop-blur-sm border border-blue-400/20 group-hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.3),0_8px_30px_rgba(59,130,246,0.5)] transition-all duration-300">
        <Trophy className="text-white h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
      </div>
      
      <div className="flex flex-col">
        <span className="font-bold text-lg tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-blue-100">WINMIX</span>
        <span className="text-[10px] -mt-1 text-blue-400/80 tracking-widest">TIPSTER</span>
      </div>
    </a>
  );
};

export default Logo;