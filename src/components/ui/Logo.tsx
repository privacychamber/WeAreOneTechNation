import React from 'react';

interface LogoProps {
  className?: string;
  size?: number;
}

const baseUrl = import.meta.env.BASE_URL;

export const Logo: React.FC<LogoProps> = ({ className = '', size = 40 }) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <img
        src={`${baseUrl}favicon.svg`}
        alt="WE ARE ONE TECH NATION Logo"
        width={size}
        height={size}
        style={{ width: size, height: size, objectFit: 'contain' }}
      />
    </div>
  );
};
