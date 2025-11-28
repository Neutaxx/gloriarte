import React from 'react';
import { GALLERY_ITEMS } from '../constants';

export const Gallery: React.FC = () => {
  return (
    <section id="gallery" className="py-12 px-4 md:px-12 bg-white/30 rounded-[3rem] mx-4 md:mx-0 my-8">
      <div className="text-center mb-10">
        <h2 className="font-display text-4xl md:text-5xl text-[#e56b56] mb-4">
          Galería de inspiración
        </h2>
        <p className="font-body text-gray-600 max-w-lg mx-auto">
          Un pequeño vistazo a la magia que hemos creado. Cada pieza tiene su propia historia y personalidad.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {GALLERY_ITEMS.map((item) => (
          <div 
            key={item.id}
            className="group relative aspect-square rounded-[2rem] overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-all duration-300"
          >
            <img 
              src={item.src} 
              alt={item.title} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
            />
            
            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-[#e56b56]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
              <span className="font-display text-white text-lg md:text-xl font-bold text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                {item.title}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};