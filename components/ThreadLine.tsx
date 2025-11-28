import React from 'react';

interface ThreadLineProps {
  className?: string;
  variant?: 'straight' | 'curve-left' | 'curve-right' | 'loop';
}

export const ThreadLine: React.FC<ThreadLineProps> = ({ className = '', variant = 'straight' }) => {
  let pathD = "";
  
  switch(variant) {
    case 'curve-left':
      pathD = "M10,0 C10,50 -20,100 10,150";
      break;
    case 'curve-right':
      pathD = "M10,0 C10,50 40,100 10,150";
      break;
    case 'loop':
      pathD = "M0,20 C50,20 50,80 0,80 C-50,80 -50,20 0,20";
      break;
    default:
      pathD = "M10,0 L10,150";
  }

  return (
    <div className={`absolute pointer-events-none opacity-60 z-0 ${className}`}>
      <svg width="100%" height="100%" viewBox="0 0 50 150" fill="none" preserveAspectRatio="none">
        <path 
          d={pathD} 
          stroke="#e56b56" 
          strokeWidth="2" 
          strokeDasharray="6 4"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
};