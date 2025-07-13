import React from 'react';

interface IconProps {
  className?: string;
}

const PythonIcon: React.FC<IconProps> = ({ className = "w-12 h-12" }) => {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <defs>
        <linearGradient id="pythonGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3776AB"/>
          <stop offset="100%" stopColor="#FFD43B"/>
        </linearGradient>
        <linearGradient id="pythonGradient2" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#FFD43B"/>
          <stop offset="100%" stopColor="#3776AB"/>
        </linearGradient>
      </defs>
      <path d="M12 2C8.5 2 6 4.5 6 8v4h6v1H5c-1.5 0-3 1-3 3v4c0 1.5 1.5 3 3 3h2v-3c0-1.5 1.5-3 3-3h6c1.5 0 3-1.5 3-3V8c0-3.5-2.5-6-6-6h-6z" fill="url(#pythonGradient1)"/>
      <path d="M12 22c3.5 0 6-2.5 6-6v-4h-6v-1h7c1.5 0 3-1 3-3V4c0-1.5-1.5-3-3-3h-2v3c0 1.5-1.5 3-3 3H8c-1.5 0-3 1.5-3 3v4c0 3.5 2.5 6 6 6h6z" fill="url(#pythonGradient2)"/>
      <circle cx="9" cy="6" r="1" fill="white"/>
      <circle cx="15" cy="18" r="1" fill="white"/>
    </svg>
  );
};

export default PythonIcon;