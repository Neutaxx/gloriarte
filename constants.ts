import { Product } from './types';
import content1 from './fotos/gloriartecontenido1.png';
import content2 from './fotos/gloriartecontenido2.png';
import content3 from './fotos/gloriartecontenido3.png';
import content4 from './fotos/gloriartecontenido4.png';

const CONTENT_IMAGES = [content1, content2, content3, content4];

export const PHONE_NUMBER = "573204657989";

import croche1 from './fotos/croche1.jpeg';
import croche2 from './fotos/croche2.jpeg';
import croche3 from './fotos/croche3.jpeg';

export const PRODUCTS: Product[] = [
  {
    id: "p1",
    title: "Pack pinguinos",
    description: "Pack de productos tiernos diseñados para bebes.",
    image: croche1,
    color: "bg-[#ffe5a0]", // Pastel Yellow
    textColor: "text-amber-800"
  },
  {
    id: "p2",
    title: "Portagafas tierno y seguro",
    description: "Portagafas en croche para mantenerlas seguras y viendose lindas.",
    image: croche2,
    color: "bg-[#b0e0e6]", // Pastel Blue
    textColor: "text-sky-800"
  },
  {
    id: "p3",
    title: "Stitch",
    description: "Hacemos a tu personaje favorito.",
    image: CONTENT_IMAGES[2], // Keeping original 3rd image as placeholder/Stitch if it was
    color: "bg-[#ffcccb]", // Pastel Red
    textColor: "text-red-900"
  },
  {
    id: "p4",
    title: "Ariel la sirenita",
    description: "Hacemos a tu personaje favorito.",
    image: croche3,
    color: "bg-[#d3b3e5]", // Pastel Purple
    textColor: "text-purple-900"
  }
];

import sandaliasImg from './fotos/sandaliasdecoradas.jpeg';
import mesaImg from './fotos/mesadecoraciones.jpeg';
import accesoriosImg from './fotos/diferentesaccesorios.jpeg';
import mascotasImg from './fotos/ropamascotas.jpeg';

export const EXTRA_CATEGORIES = [
  {
    id: "e1",
    title: "Sandalias decoradas",
    description: "Diseños únicos para lucir en tus pies.",
    image: sandaliasImg,
    color: "bg-[#ffdfba]", // Peach
    textColor: "text-orange-900"
  },
  {
    id: "e2",
    title: "Decoraciones para tu hogar",
    description: "Embellece tus espacios con detalles hechos a mano.",
    image: mesaImg,
    color: "bg-[#ffffba]", // Pale Yellow
    textColor: "text-yellow-900"
  },
  {
    id: "e3",
    title: "Accesorios variados",
    description: "Pide lo que quieras, ¡lo hacemos realidad!",
    image: accesoriosImg,
    color: "bg-[#baffc9]", // Pale Green
    textColor: "text-green-900"
  },
  {
    id: "e4",
    title: "Accesorios para mascotas",
    description: "Consentimos a tus peluditos con accesorios especiales.",
    image: mascotasImg,
    color: "bg-[#bae1ff]", // Pale Blue
    textColor: "text-blue-900"
  }
];

import prod1 from './fotos/productos1.jpeg';
import prod2 from './fotos/productos2.jpeg';
import prod3 from './fotos/productos3.jpeg';
import prod4 from './fotos/productos4.jpeg';
import prod5 from './fotos/productos5.jpeg';
import prod6 from './fotos/productos6.jpeg';
import prod7 from './fotos/productos7.jpeg';
import prod8 from './fotos/productos8.jpeg';
import prod9 from './fotos/productos9.jpeg';
import prod10 from './fotos/productos10.jpeg';
import prod11 from './fotos/productos11.jpeg';
import prod12 from './fotos/productos12.jpeg';

export const GALLERY_ITEMS = [
  { id: 1, title: "Messi", src: prod1 },
  { id: 2, title: "Ramo Spiderman", src: prod2 },
  { id: 3, title: "Totoro", src: prod4 },
  { id: 4, title: "Pantuflas Reno", src: prod5 },
  { id: 5, title: "Arte en Croché", src: prod6 },
  { id: 6, title: "Mini tú en Croché", src: prod7 },
  { id: 7, title: "Sombreros Personalizados", src: prod8 },
  { id: 8, title: "Estilo Artesanal", src: prod9 },
  { id: 9, title: "Capibaras", src: prod10 },
  { id: 10, title: "Para bebés", src: prod11 },
  { id: 11, title: "Ramo Snoopy", src: prod12 },
  { id: 12, title: "La novia", src: prod3 } // Reusing prod1 to fill the 12th slot
];

export const COLORS = {
  background: "#ffb9d0",
  container: "#fff7e9",
  primary: "#e56b56", // Terracotta
  secondary: "#ff9eb5", // Darker Pink
  accent: "#fcd34d", // Yellow
};