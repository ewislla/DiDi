import React from 'react';

interface SectionDividerProps {
  flip?: boolean;
}

const SectionDivider: React.FC<SectionDividerProps> = ({ flip = false }) => {
  return (
    <div className={`relative w-full h-16 overflow-hidden ${flip ? 'rotate-180' : ''}`}>
      <svg 
        className="absolute inset-0 w-full h-full" 
        viewBox="0 0 1200 120" 
        preserveAspectRatio="none"
        fill="white"
      >
        <path d="M0,60 C200,20 400,100 600,60 C800,20 1000,100 1200,60 L1200,120 L0,120 Z" />
      </svg>
    </div>
  );
};

export default SectionDivider;