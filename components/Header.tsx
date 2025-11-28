import React, { useEffect, useState } from 'react';
import { MessageCircle } from 'lucide-react';
import { PHONE_NUMBER } from '../constants';
import logo from '../fotos/GLORIARTE.png';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { label: 'Catálogo', id: 'bestsellers' },
    { label: 'Galería', id: 'gallery' },
    { label: 'Variedad', id: 'more-than-crochet' },
    { label: 'Sobre mí', id: 'story' },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 w-full px-4 md:px-8 py-4 ${isScrolled ? 'py-2' : 'py-6'
        }`}
    >
      <div className={`
        mx-auto max-w-7xl bg-[#fff7e9]/95 backdrop-blur-sm 
        border-2 border-[#ff9eb5]/30
        rounded-full px-6 py-3 flex items-center justify-between shadow-lg
        transition-all duration-300
        ${isScrolled ? 'shadow-xl scale-[0.98]' : ''}
      `}>
        {/* Logo */}
        <div
          className="flex items-center gap-3 cursor-pointer group"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <div className="w-10 h-10 rounded-full overflow-hidden group-hover:rotate-12 transition-transform">
            <img src={logo} alt="Gloriarte Logo" className="w-full h-full object-cover" />
          </div>
          <span className="font-display font-bold text-2xl md:text-3xl text-[#e56b56]">Gloriarte</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 font-body font-bold text-gray-700">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => scrollTo(item.id)}
              className="hover:text-[#e56b56] transition-colors relative group"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#e56b56] transition-all group-hover:w-full"></span>
            </button>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <a
            href={`https://wa.me/${PHONE_NUMBER}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 bg-[#25D366] text-white px-4 py-2 rounded-full font-bold shadow-md hover:bg-[#20bd5a] hover:-translate-y-0.5 transition-all"
          >
            <MessageCircle size={20} />
            <span>WhatsApp</span>
          </a>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-gray-700"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <div className="space-y-1.5">
              <span className={`block w-6 h-0.5 bg-gray-600 transition-transform ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`block w-6 h-0.5 bg-gray-600 transition-opacity ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block w-6 h-0.5 bg-gray-600 transition-transform ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-4 right-4 mt-2 bg-white rounded-2xl shadow-xl p-6 md:hidden flex flex-col gap-4 z-40 border-2 border-dashed border-gray-200">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => scrollTo(item.id)}
              className="text-left font-bold text-lg text-gray-700 hover:text-[#e56b56]"
            >
              {item.label}
            </button>
          ))}
          <a
            href={`https://wa.me/${PHONE_NUMBER}`}
            className="flex justify-center items-center gap-2 bg-[#25D366] text-white px-4 py-3 rounded-full font-bold"
          >
            <MessageCircle size={20} />
            WhatsApp
          </a>
        </div>
      )}
    </header>
  );
};