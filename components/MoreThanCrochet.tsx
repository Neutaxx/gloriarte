import React from 'react';
import { EXTRA_CATEGORIES } from '../constants';
import { Sparkles } from 'lucide-react';

export const MoreThanCrochet: React.FC = () => {
  return (
    <section id="more-than-crochet" className="py-12 px-4 md:px-12 relative z-10">
      <div className="flex items-center gap-3 mb-8">
        <Sparkles className="text-[#e56b56] animate-pulse" />
        <h2 className="font-display text-4xl md:text-5xl text-[#e56b56]">
          Más que croché
        </h2>
      </div>
      
      <p className="font-body text-gray-600 mb-8 max-w-2xl text-lg">
        En Gloriarte también exploramos otras técnicas y manualidades para ofrecerte detalles únicos y personalizados. ¡Descubre todo lo que podemos crear!
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {EXTRA_CATEGORIES.map((category) => (
          <div 
            key={category.id}
            className={`
              ${category.color} rounded-[2rem] p-4 flex flex-col gap-4 
              transition-all duration-300 hover:shadow-lg hover:-translate-y-1
            `}
          >
            <div className="aspect-[4/3] rounded-[1.5rem] bg-white/40 overflow-hidden relative shadow-sm">
               <img 
                 src={category.image} 
                 alt={category.title} 
                 className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" 
               />
            </div>

            <div className="px-2 pb-2">
              <h3 className={`font-display text-xl font-bold ${category.textColor}`}>
                {category.title}
              </h3>
              <p className={`font-body text-sm mt-2 opacity-90 ${category.textColor} leading-snug`}>
                {category.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};