import React from 'react';
import gloriaImage from '../fotos/Gloria.jpg';
import content1 from '../fotos/gloriartecontenido1.png';

export const Story: React.FC = () => {
  return (
    <section id="story" className="py-12 px-4 md:px-12">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 bg-white/50 rounded-[3rem] p-6 md:p-12 border border-white">

        {/* Left Image (2/5 cols) */}
        <div className="lg:col-span-2 relative">
          <div className="h-full min-h-[400px] rounded-[2rem] overflow-hidden relative shadow-lg group">
            <img
              src={gloriaImage}
              alt="Tejiendo"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            <div className="absolute bottom-6 left-6 text-white font-display text-2xl">
              Hecho con amor
            </div>
          </div>
        </div>

        {/* Right Content (3/5 cols) */}
        <div className="lg:col-span-3 flex flex-col justify-between gap-8">
          <div>
            <h2 className="font-display text-4xl md:text-5xl text-[#e56b56] mb-6">
              Tejiendo historias en cada puntada
            </h2>
            <p className="font-body text-lg text-gray-700 leading-relaxed mb-6">
              Detrás de Gloriarte hay manos pacientes y un corazón creativo. Llevo años transformando hilos en recuerdos tangibles.
              No soy una fábrica; soy una artesana que dedica horas a perfeccionar cada detalle, desde la expresión de un muñeco hasta el pétalo de una flor.
            </p>

            <ul className="space-y-3 font-body text-gray-600 mb-8">
              {[
                "100% Personalizado a tu gusto",
                "Materiales suaves y seguros",
                "El regalo perfecto que dura para siempre"
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-[#ff9eb5] flex items-center justify-center text-white text-xs font-bold">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Accent Mini Card */}
          <div className="bg-[#b0e0e6] rounded-[2rem] p-6 flex items-center gap-6 relative overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="w-24 h-24 bg-white/60 rounded-2xl flex-shrink-0 p-2 rotate-3">
              <img src={content1} alt="Detalle" className="w-full h-full object-cover rounded-xl" />
            </div>
            <div className="relative z-10">
              <h4 className="font-display text-xl text-[#0d5f73] font-bold">¿Tienes una idea loca?</h4>
              <p className="text-[#1a7a91] text-sm mt-1">¡Me encantan los retos! Si puedes imaginarlo, puedo tejerlo.</p>
            </div>
            <div className="absolute right-0 top-0 w-32 h-32 bg-white/20 rounded-full -translate-y-1/2 translate-x-1/2"></div>
          </div>
        </div>

      </div>
    </section>
  );
};