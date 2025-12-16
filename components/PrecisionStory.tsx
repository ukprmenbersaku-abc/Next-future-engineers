import React from 'react';
import { Section } from './Section';
import { Ruler, CheckCircle2, AlertTriangle } from 'lucide-react';

export const PrecisionStory: React.FC = () => {
  return (
    <div className="bg-white">
      <Section id="story">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 text-blue-600 font-bold uppercase tracking-wider text-sm">
              <Ruler size={18} />
              Step 1: The Foundation
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
              最初に学んだのは、<br/>
              <span className="text-blue-600">「精度」</span>の重要性でした。
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              エコランカー製作において、わずか1ミリのズレが大きなエネルギーロスを生みます。
              一年生たちが最初に直面したのは、デザインのかっこよさではなく、
              徹底的に数値を追い求める「精度（Seido）」の壁でした。
            </p>
            
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 mt-6">
              <h3 className="font-bold text-slate-800 mb-3 flex items-center gap-2">
                <AlertTriangle className="text-amber-500" size={20}/>
                精度の追求とは？
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-slate-600">
                  <CheckCircle2 className="text-green-500 shrink-0 mt-1" size={18} />
                  <span>パーツ同士の摩擦を極限まで減らす加工技術</span>
                </li>
                <li className="flex items-start gap-3 text-slate-600">
                  <CheckCircle2 className="text-green-500 shrink-0 mt-1" size={18} />
                  <span>設計図通りの正確な組み立てと計測</span>
                </li>
                <li className="flex items-start gap-3 text-slate-600">
                  <CheckCircle2 className="text-green-500 shrink-0 mt-1" size={18} />
                  <span>妥協を許さないエンジニアとしての姿勢</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-full blur-xl opacity-70 group-hover:opacity-100 transition duration-500"></div>
            <img 
              src="https://picsum.photos/seed/precision/600/400" 
              alt="Students measuring parts with calipers" 
              className="relative rounded-2xl shadow-2xl transform transition duration-500 group-hover:-translate-y-2 object-cover w-full h-80"
            />
            <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur p-4 rounded-xl shadow-lg max-w-xs border border-slate-100">
              <p className="text-sm font-medium text-slate-700">
                「動けばいい」じゃない。<br/>
                「完璧に動く」を目指すんだ。
              </p>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};