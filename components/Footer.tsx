import React from 'react';
import { Twitter, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        
        <div className="text-center md:text-left">
          <h4 className="text-2xl font-bold text-white mb-2">Next Future Engineers</h4>
          <p className="text-sm text-slate-500">
            Empowering the next generation of creators.<br/>
            Project Eco-Run © {new Date().getFullYear()}
          </p>
        </div>

        <div className="flex gap-6">
          <a href="#" className="hover:text-blue-400 transition-colors bg-slate-800 p-3 rounded-full">
            <Twitter size={20} />
          </a>
          <a href="#" className="hover:text-blue-400 transition-colors bg-slate-800 p-3 rounded-full">
            <Mail size={20} />
          </a>
        </div>
        
      </div>
    </footer>
  );
};