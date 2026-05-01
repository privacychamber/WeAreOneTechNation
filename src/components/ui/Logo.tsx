import React from 'react';

interface LogoProps {
  className?: string;
  size?: number;
}

export const Logo: React.FC<LogoProps> = ({ className = '', size = 40 }) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="drop-shadow-[0_0_8px_rgba(79,109,255,0.5)]"
      >
        <path
          d="M50 15L90 85H10L50 15Z"
          stroke="#4F6DFF"
          strokeWidth="4"
          strokeLinejoin="round"
        />
        <path
          d="M50 30L75 75H25L50 30Z"
          fill="#4F6DFF"
          fillOpacity="0.2"
          stroke="#7DD3FC"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <circle cx="50" cy="55" r="8" fill="#4F6DFF" className="animate-pulse" />
      </svg>
    </div>
  );
};
