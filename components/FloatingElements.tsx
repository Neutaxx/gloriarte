import React, { useEffect, useState } from 'react';
import { FloatingItem } from '../types';
import amigurumi1 from '../fotos/amigurumi1.png';
import amigurumi2 from '../fotos/amigurumi2.png';
import amigurumi3 from '../fotos/amigurumi3.png';
import amigurumi4 from '../fotos/amigurumi4.png';
import amigurumi5 from '../fotos/amigurumi5.png';


export const FloatingElements: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Floating amigurumi images - Zigzag layout (Left - Right - Left - Right)
  // Positioned at edges to avoid blocking center content
  // Order: 3, 2, 5, 4, 1
  const items: FloatingItem[] = [
    { id: 1, type: 'image', src: amigurumi3, top: '5%', left: '0%', size: '250px', delay: '0s', rotation: '12deg' },
    { id: 2, type: 'image', src: amigurumi2, top: '25%', right: '0%', size: '280px', delay: '1s', rotation: '-15deg' },
    { id: 3, type: 'image', src: amigurumi5, top: '45%', left: '0%', size: '220px', delay: '2s', rotation: '45deg' },
    { id: 4, type: 'image', src: amigurumi4, top: '65%', right: '0%', size: '260px', delay: '0.5s', rotation: '-10deg' },
    { id: 5, type: 'image', src: amigurumi1, top: '85%', left: '0%', size: '240px', delay: '3s', rotation: '20deg' },
  ];

  // Calculate opacity based on scroll position
  // Start at 0, fade in, then fade out
  const getOpacity = (itemTopPercent: number) => {
    const itemTop = (itemTopPercent / 100) * document.body.scrollHeight;
    const viewportHeight = window.innerHeight;

    // Distance of the item from the center of the viewport
    const itemCenter = itemTop;
    const viewportCenter = scrollY + viewportHeight / 2;
    const distance = Math.abs(viewportCenter - itemCenter);

    // Visible range: item is fully visible when near center, fades out as it moves away
    const maxDistance = viewportHeight * 0.8; // Adjust this factor to control when it fades out

    let opacity = 1 - (distance / maxDistance);

    // Clamp opacity between 0 and 1
    return Math.max(0, Math.min(1, opacity));
  };

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-50 w-full h-full">
      {items.map((item) => {
        // Parse top percentage for opacity calculation
        const topPercent = parseInt(item.top);
        const opacity = getOpacity(topPercent);

        return (
          <div
            key={item.id}
            className="absolute transition-transform duration-100 ease-out will-change-transform"
            style={{
              top: item.top,
              left: item.left,
              right: item.right,
              width: item.size,
              height: item.size,
              transform: `translateY(${scrollY * 0.1}px) rotate(${item.rotation})`,
              opacity: opacity,
              transition: 'opacity 0.3s ease-out, transform 0.1s ease-out'
            }}
          >
            <div className={item.id % 2 === 0 ? "animate-float" : "animate-float-delayed"}>
              {/* Images directly */}
              <img
                src={item.src}
                alt="Floating amigurumi"
                className="w-full h-full object-contain drop-shadow-2xl"
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};