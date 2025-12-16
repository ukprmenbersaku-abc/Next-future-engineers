import React from 'react';
import { Hero } from './components/Hero';
import { PrecisionStory } from './components/PrecisionStory';
import { TeamComparison } from './components/TeamComparison';
import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar';

function App() {
  return (
    <div className="font-sans text-slate-900 antialiased selection:bg-blue-200 selection:text-blue-900 pt-20">
      <Navbar />
      <div id="top">
        <Hero />
      </div>
      <PrecisionStory />
      
      {/* Motivational Divider */}
      <div className="bg-blue-600 py-12 text-center text-white px-4">
        <p className="text-xl md:text-2xl font-bold tracking-wide italic opacity-90">
          "技術は、夢を実現するための翼だ。"
        </p>
      </div>

      <TeamComparison />
      
      <div id="contact" className="bg-slate-50 py-20 px-6 text-center">
        <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-slate-800">応援よろしくお願いします！</h2>
            <p className="text-lg text-slate-600 mb-8">
                Aチームの速さへの挑戦、Bチームの優しさへの挑戦。<br/>
                アプローチは違っても、Next Future Engineersの魂は一つです。<br/>
                私たちの活動はまだ始まったばかり。これからの成長を見守ってください。
            </p>
            <button className="bg-slate-900 hover:bg-slate-800 text-white font-bold py-4 px-10 rounded-full transition-transform hover:-translate-y-1 shadow-xl">
                活動ブログを見る
            </button>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;