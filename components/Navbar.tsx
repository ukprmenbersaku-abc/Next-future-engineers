import React from 'react';
import { Leaf } from 'lucide-react';

export const Navbar: React.FC = () => {
  const navItems = [
    { label: 'ホーム', href: '#top' },
    { label: 'ストーリー', href: '#story' },
    { label: 'チーム紹介', href: '#teams' },
    { label: '応援・連絡', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
        {/* Logo Section */}
        <a href="#top" className="flex items-center gap-3 group">
          <div className="bg-emerald-500 text-white p-2 rounded-full transition-transform group-hover:scale-110">
            <Leaf size={24} fill="currentColor" />
          </div>
          <span className="text-xl md:text-2xl font-bold text-slate-800 tracking-tight font-sans">
            Next Future Engineers
          </span>
        </a>

        {/* Navigation Links (Desktop) */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-slate-600 font-medium hover:text-emerald-600 transition-colors text-sm tracking-wide"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button (Simple implementation) */}
        <div className="md:hidden">
            <a href="#teams" className="text-sm font-bold text-emerald-600">
                MENU
            </a>
        </div>
      </div>
    </nav>
  );
};