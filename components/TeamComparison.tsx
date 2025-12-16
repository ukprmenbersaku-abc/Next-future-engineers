import React, { useState } from 'react';
import { Section } from './Section';
import { Trophy, Users, ArrowRight, Gauge, Heart } from 'lucide-react';
import { TeamData } from '../types';

const teams: TeamData[] = [
  {
    id: 'A',
    name: 'Team A: Challenger',
    slogan: '勝利への執念、極限の速さ',
    description: 'Aチームの目標はシンプルかつ強大。「Honda エコ マイレッジ チャレンジ優勝」です。空気抵抗を極限まで減らし、エンジンの燃焼効率を最大化する。勝つために必要なすべての技術を注ぎ込みます。',
    color: 'bg-rose-600',
    accentColor: 'text-rose-600',
    goals: ['大会優勝', '燃費記録の更新', '極限の軽量化'],
    iconName: 'Trophy'
  },
  {
    id: 'B',
    name: 'Team B: Universal',
    slogan: '誰もが乗れる、未来のモビリティ',
    description: 'Bチームの視点は「優しさ」です。エコランカーは運転が難しいという常識を覆し、誰もが快適に乗れる車を目指します。人間工学に基づいた設計と、安全性を最優先したアプローチをとっています。',
    color: 'bg-emerald-600',
    accentColor: 'text-emerald-600',
    goals: ['誰でも運転可能', '快適な居住性', '高い安全性'],
    iconName: 'Users'
  }
];

export const TeamComparison: React.FC = () => {
  const [activeTeam, setActiveTeam] = useState<'A' | 'B'>('A');

  return (
    <div className="bg-slate-50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-100/50 skew-x-12 transform origin-top-right"></div>

      <Section id="teams">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 font-heading">
            運命の分岐点。<br/>
            <span className="text-blue-600">2つのチーム</span>、2つの哲学。
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            基礎を学んだ後、私たちはそれぞれの信念に基づいてチームを分けました。
            どちらも目指すのは「最高の車」ですが、その定義は異なります。
          </p>
        </div>

        {/* Desktop Split View */}
        <div className="hidden md:grid md:grid-cols-2 gap-8">
          {teams.map((team) => (
            <div 
              key={team.id}
              className={`group relative overflow-hidden rounded-3xl bg-white shadow-xl border border-slate-100 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1`}
            >
              <div className={`h-2 ${team.color} w-full`}></div>
              <div className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className={`p-3 rounded-2xl ${team.id === 'A' ? 'bg-rose-100 text-rose-600' : 'bg-emerald-100 text-emerald-600'}`}>
                    {team.id === 'A' ? <Trophy size={32} /> : <Users size={32} />}
                  </div>
                  <span className="text-5xl font-black text-slate-100 select-none font-heading">
                    {team.id}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-slate-900 mb-2 font-heading">{team.name}</h3>
                <p className={`font-medium mb-6 ${team.accentColor}`}>{team.slogan}</p>
                
                <p className="text-slate-600 mb-8 leading-relaxed min-h-[80px]">
                  {team.description}
                </p>

                <div className="space-y-4">
                  <h4 className="font-bold text-slate-800 text-sm uppercase tracking-wide">Key Objectives</h4>
                  {team.goals.map((goal, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className={`w-2 h-2 rounded-full ${team.color}`}></div>
                      <span className="text-slate-700">{goal}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Image at bottom */}
              <div className="mt-8 h-48 overflow-hidden relative">
                 <div className={`absolute inset-0 bg-gradient-to-t from-${team.id === 'A' ? 'rose' : 'emerald'}-900/80 to-transparent z-10`}></div>
                 <img 
                    src={team.id === 'A' ? "https://picsum.photos/seed/racing/600/300" : "https://picsum.photos/seed/comfort/600/300"} 
                    alt={`${team.name} concept`}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                 />
                 <div className="absolute bottom-4 left-4 z-20 text-white font-bold flex items-center gap-2">
                    {team.id === 'A' ? <Gauge size={18}/> : <Heart size={18}/>}
                    {team.id === 'A' ? 'Performance Focus' : 'Human Focus'}
                 </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Tab View */}
        <div className="md:hidden">
          <div className="flex gap-2 p-1 bg-slate-200 rounded-xl mb-8">
            {teams.map((team) => (
               <button
                 key={team.id}
                 onClick={() => setActiveTeam(team.id)}
                 className={`flex-1 py-3 px-4 rounded-lg font-bold text-sm transition-all ${
                   activeTeam === team.id 
                    ? 'bg-white shadow text-slate-900' 
                    : 'text-slate-500 hover:text-slate-700'
                 }`}
               >
                 Team {team.id}
               </button>
            ))}
          </div>

          <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100 animate-fade-in">
             {/* Render Active Team Card Content similar to desktop but simplified */}
             {(() => {
                const team = teams.find(t => t.id === activeTeam)!;
                return (
                  <div>
                    <div className={`h-2 ${team.color} w-full`}></div>
                    <div className="p-6">
                       <div className="flex items-center gap-4 mb-4">
                          <div className={`p-3 rounded-2xl ${team.id === 'A' ? 'bg-rose-100 text-rose-600' : 'bg-emerald-100 text-emerald-600'}`}>
                            {team.id === 'A' ? <Trophy size={24} /> : <Users size={24} />}
                          </div>
                          <h3 className="text-xl font-bold text-slate-900 font-heading">{team.name}</h3>
                       </div>
                       <p className={`font-medium mb-4 ${team.accentColor}`}>{team.slogan}</p>
                       <p className="text-slate-600 mb-6 text-sm leading-relaxed">
                          {team.description}
                       </p>
                       <div className="space-y-3 mb-6">
                          {team.goals.map((goal, idx) => (
                            <div key={idx} className="flex items-center gap-3">
                              <div className={`w-1.5 h-1.5 rounded-full ${team.color}`}></div>
                              <span className="text-slate-700 text-sm">{goal}</span>
                            </div>
                          ))}
                       </div>
                    </div>
                    <div className="h-40 overflow-hidden relative">
                         <img 
                            src={team.id === 'A' ? "https://picsum.photos/seed/racing/600/300" : "https://picsum.photos/seed/comfort/600/300"} 
                            alt={`${team.name} concept`}
                            className="w-full h-full object-cover"
                         />
                    </div>
                  </div>
                );
             })()}
          </div>
        </div>

      </Section>
    </div>
  );
};