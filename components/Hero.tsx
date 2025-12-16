import React from 'react';
import { ChevronDown, Zap } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <div className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden bg-slate-900 text-white">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 opacity-40">
        <img 
          src="https://picsum.photos/1920/1080?grayscale&blur=2" 
          alt="Engineering Workshop" 
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 via-slate-900/20 to-slate-900"></div>

      <div className="relative z-10 text-center max-w-4xl px-4 animate-fade-in-up">
        <div className="flex justify-center mb-6">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30 text-sm font-medium backdrop-blur-sm">
            <Zap size={16} fill="currentColor" />
            Next Future Engineers Project
          </span>
        </div>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-slate-400 font-heading">
          未来を走る、<br className="md:hidden"/>エコランカー。
        </h1>
        <p className="text-xl md:text-2xl text-slate-300 mb-10 leading-relaxed max-w-2xl mx-auto">
          Honda エコ マイレッジ チャレンジ優勝を目指して。<br/>
          ものづくりの楽しさと厳しさを知る、一年生たちの挑戦の記録。
        </p>
        
        <a 
          href="#story"
          className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 px-8 rounded-full transition-all hover:scale-105 shadow-lg shadow-blue-900/50"
        >
          ストーリーを見る
          <ChevronDown size={20} />
        </a>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-slate-900 to-transparent"></div>
    </div>
  );
};