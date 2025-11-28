import React from 'react';
import { PRODUCTS } from '../constants';
import { Heart } from 'lucide-react';

export const Creations: React.FC = () => {
  const handleSelect = (productName: string) => {
    const contactSection = document.getElementById('contact');
    const selectElement = document.getElementById('type-select') as HTMLSelectElement;
    
    if (contactSection && selectElement) {
      selectElement.value = productName;
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="bestsellers" className="py-12 px-4 md:px-12 relative z-10">
      <div className="flex items-end gap-4 mb-8">
        <h2 className="font-display text-4xl md:text-5xl text-[#e56b56]">
          Creaciones que enamoran
        </h2>
        <div className="h-1 bg-[#e56b56]/20 flex-1 rounded-full mb-3 ml-4">
            <div className="h-full w-1/4 bg-[#e56b56] rounded-full"></div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {PRODUCTS.map((product) => (
          <div 
            key={product.id}
            className={`
              ${product.color} rounded-[2rem] p-4 flex flex-col gap-4 
              transition-all duration-300 hover:-translate-y-2 hover:shadow-xl group
              border-2 border-transparent hover:border-white/50
            `}
          >
            {/* Image Container */}
            <div className="aspect-square rounded-[1.5rem] bg-white/40 overflow-hidden relative shadow-inner">
               <img 
                 src={product.image} 
                 alt={product.title} 
                 className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
               />
               <div className="absolute top-3 right-3 bg-white p-2 rounded-full shadow-sm opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0">
                 <Heart size={16} className="text-red-500 fill-red-500" />
               </div>
            </div>

            {/* Info */}
            <div className="px-2 pb-2 flex-1 flex flex-col">
              <h3 className={`font-display text-xl font-bold ${product.textColor}`}>
                {product.title}
              </h3>
              <p className={`font-body text-sm mt-1 opacity-80 ${product.textColor} flex-1`}>
                {product.description}
              </p>
              
              <button 
                onClick={() => handleSelect(product.title)}
                className="mt-4 w-full bg-white/80 hover:bg-white text-gray-800 font-bold py-2 rounded-xl text-sm transition-colors border-2 border-dashed border-gray-300"
              >
                Quiero algo así
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};