import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Creations } from './components/Creations';
import { Story } from './components/Story';
import { Contact } from './components/Contact';
import { FloatingElements } from './components/FloatingElements';
import { ThreadLine } from './components/ThreadLine';
import { Gallery } from './components/Gallery';
import { MoreThanCrochet } from './components/MoreThanCrochet';

function App() {
  return (
    <div className="w-full min-h-screen flex justify-center p-4 md:p-8 font-sans selection:bg-[#ff9eb5] selection:text-white">
      {/* Main Container */}
      <div className="relative w-full max-w-7xl bg-[#fff7e9] rounded-[40px] md:rounded-[60px] shadow-2xl overflow-hidden min-h-[95vh] flex flex-col">
        
        {/* Decorative Floating Elements (Parallax) */}
        <FloatingElements />

        {/* Decorative Thread Lines connecting sections */}
        <ThreadLine className="top-[600px] left-[10%] w-[100px] h-[200px]" variant="curve-right" />
        <ThreadLine className="top-[1800px] right-[5%] w-[100px] h-[150px]" variant="loop" />
        <ThreadLine className="top-[3000px] left-[5%] w-[150px] h-[200px]" variant="curve-left" />

        <Header />
        
        <main className="flex-1 relative z-10">
          <Hero />
          <Creations />
          <MoreThanCrochet />
          <Gallery />
          <Story />
          <Contact />
        </main>

        <footer className="py-6 text-center text-[#e56b56]/60 font-body text-sm relative z-10">
          <p>© {new Date().getFullYear()} Gloriarte. Hecho con amor y lana.</p>
        </footer>

      </div>
    </div>
  );
}

export default App;