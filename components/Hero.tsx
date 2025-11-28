import React from 'react';
import { ArrowDown } from 'lucide-react';

import content1 from '../fotos/gloriartecontenido1.png';
import content2 from '../fotos/gloriartecontenido2.png';
import content3 from '../fotos/cumpleaños.jpeg';
import content4 from '../fotos/personas.jpeg';

export const Hero: React.FC = () => {
  return (
    <section className="px-4 md:px-12 pt-4 pb-12 w-full">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 min-h-[600px]">

        {/* Left Panel: Brand Message */}
        <div className="bg-[#ff9eb5] rounded-[2.5rem] p-8 md:p-16 flex flex-col justify-center relative overflow-hidden group shadow-inner">
          {/* Decorative stitching */}
          <div className="absolute inset-4 border-2 border-dashed border-white/40 rounded-[2rem] pointer-events-none"></div>

          <div className="relative z-10">
            <span className="inline-block px-4 py-1 bg-white/30 text-white rounded-full text-sm font-bold mb-6 tracking-wide backdrop-blur-sm">
              HECHO 100% A MANO
            </span>
            {/* Title adjusted to not break the word manually */}
            <h1 className="font-display text-6xl md:text-8xl lg:text-9xl text-[#b03045] leading-[0.9] mb-6 drop-shadow-sm break-normal">
              GloriArte
            </h1>
            <h2 className="font-display text-2xl md:text-3xl text-white mb-6">
              Muñecos, flores y detalles tejidos con el corazón.
            </h2>
            <p className="font-body text-white/90 text-lg md:text-xl mb-10 max-w-md leading-relaxed">
              Cada puntada cuenta una historia. Creamos amigurumis personalizados y accesorios únicos por encargo.
            </p>

            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-[#b03045] px-8 py-4 rounded-full font-bold text-lg shadow-[4px_4px_0px_0px_rgba(176,48,69,0.3)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all flex items-center gap-3 w-fit"
            >
              Quiero mi creación
              <ArrowDown size={20} className="animate-bounce" />
            </button>
          </div>
        </div>

        {/* Right Panel: Showcase */}
        <div className="bg-[#e56b56] rounded-[2.5rem] relative overflow-hidden shadow-inner p-8 flex items-center justify-center">
          {/* Decorative grid */}
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: 'radial-gradient(#fff 2px, transparent 2px)',
            backgroundSize: '30px 30px'
          }}></div>

          {/* Floating compositions */}
          <div className="grid grid-cols-2 gap-4 w-full h-full max-w-md mx-auto content-center">
            <div className="space-y-4 pt-12">
              <div className="aspect-[3/4] bg-[#ffe5a0] rounded-3xl rotate-[-6deg] shadow-lg hover:rotate-0 transition-transform duration-500 overflow-hidden border-4 border-white">
                <img src={content1} alt="Amigurumi Dog" className="w-full h-full object-cover" />
              </div>
              <div className="aspect-square bg-[#b0e0e6] rounded-full p-1 translate-x-4 shadow-lg hover:scale-105 transition-transform">
                <img src={content2} alt="Crochet blanket" className="w-full h-full object-cover rounded-full border-2 border-dashed border-white" />
              </div>
            </div>
            <div className="space-y-4">
              <div className="aspect-square bg-[#d3b3e5] rounded-[2rem] p-1 -translate-x-2 shadow-lg hover:rotate-3 transition-transform">
                <img src={content3} alt="Cute Lion" className="w-full h-full object-cover rounded-[1.8rem]" />
              </div>
              <div className="aspect-[3/4] bg-[#ffcccb] rounded-3xl rotate-[6deg] shadow-lg hover:rotate-0 transition-transform duration-500 overflow-hidden border-4 border-white">
                <img src={content4} alt="Flowers" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>

          {/* Sticker decor */}
          <div className="absolute top-10 right-10 bg-yellow-300 text-yellow-800 font-bold px-4 py-2 rounded-full rotate-12 shadow-md font-body text-sm animate-pulse">
            ¡NUEVO!
          </div>
        </div>

      </div>
    </section>
  );
};