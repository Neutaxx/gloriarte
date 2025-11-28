import React, { useState } from 'react';
import { Send, Instagram, Facebook } from 'lucide-react';
import { PHONE_NUMBER } from '../constants';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    type: 'Muñeco Amigurumi',
    desc: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hola Gloriarte, soy ${formData.name}. Quisiera pedir: ${formData.type}. Detalles: ${formData.desc}.`;
    const url = `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  return (
    <section id="contact" className="py-12 px-4 md:px-12 mb-12">
      <div className="bg-[#e56b56] rounded-[3rem] p-8 md:p-16 text-white relative overflow-hidden shadow-xl">

        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, #fff 10px, #fff 12px)' }}>
        </div>

        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          <div className="space-y-6">
            <h2 className="font-display text-4xl md:text-6xl mb-4">Haz tu pedido en croché</h2>
            <p className="font-body text-xl opacity-90 max-w-sm">
              Cada creación es única y por encargo. Cuéntame tu idea y coordinamos todo por WhatsApp.
            </p>

            <div className="flex flex-col gap-4 pt-4">
              <div className="flex gap-4 items-center">
                <a href="https://www.instagram.com/gloriartemanualidades/" target="_blank" rel="noopener noreferrer" className="bg-white/20 p-3 rounded-full hover:bg-white/40 transition-colors animate-bounce">
                  <Instagram size={28} />
                </a>
                <span className="self-center font-bold">@gloriartemanualidades</span>
              </div>
              <div className="flex gap-4 items-center">
                <a href="https://www.instagram.com/gloriartemanualidades22/" target="_blank" rel="noopener noreferrer" className="bg-white/20 p-3 rounded-full hover:bg-white/40 transition-colors animate-bounce">
                  <Instagram size={28} />
                </a>
                <span className="self-center font-bold">@gloriartemanualidades22</span>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="bg-[#fff7e9] p-8 rounded-[2rem] text-gray-800 shadow-lg space-y-4 border-4 border-[#ff9eb5]">
            <div>
              <label className="block font-bold text-sm ml-2 mb-1 text-[#e56b56]">Tu Nombre</label>
              <input
                required
                type="text"
                className="w-full bg-white rounded-xl px-4 py-3 border-2 border-transparent focus:border-[#e56b56] outline-none transition-colors"
                placeholder="Ej: María Pérez"
                value={formData.name}
                onChange={e => setFormData({ ...formData, name: e.target.value })}
              />
            </div>

            <div>
              <label className="block font-bold text-sm ml-2 mb-1 text-[#e56b56]">¿Qué te gustaría?</label>
              <select
                id="type-select"
                className="w-full bg-white rounded-xl px-4 py-3 border-2 border-transparent focus:border-[#e56b56] outline-none appearance-none cursor-pointer"
                value={formData.type}
                onChange={e => setFormData({ ...formData, type: e.target.value })}
              >
                <option>Muñeco Amigurumi</option>
                <option>Sandalias decoradas</option>
                <option>Decoraciones para el hogar</option>
                <option>Accesorios para mascotas</option>
                <option>Otro (Describir abajo)</option>
              </select>
            </div>

            <div>
              <label className="block font-bold text-sm ml-2 mb-1 text-[#e56b56]">Detalles de tu idea</label>
              <textarea
                required
                rows={3}
                className="w-full bg-white rounded-xl px-4 py-3 border-2 border-transparent focus:border-[#e56b56] outline-none transition-colors resize-none"
                placeholder="Colores, tamaño, fecha ideal..."
                value={formData.desc}
                onChange={e => setFormData({ ...formData, desc: e.target.value })}
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all flex items-center justify-center gap-2 mt-2"
            >
              <span>Enviar a WhatsApp</span>
              <Send size={18} />
            </button>
            <p className="text-center text-xs text-gray-500 mt-2">
              Se abrirá una conversación con Gloriarte
            </p>
          </form>

        </div>
      </div>
    </section>
  );
};