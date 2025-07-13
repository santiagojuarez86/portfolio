import React from 'react';

interface IconProps {
  className?: string;
}

const AngularIcon: React.FC<IconProps> = ({ className = "w-12 h-12" }) => {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <path d="M12 2L2 7v10l10 5 10-5V7l-10-5z" fill="#DD0031"/>
      <path d="M12 2v20l10-5V7l-10-5z" fill="#C3002F"/>
      <path d="M12 5.5L8.5 15h1.75L11 12h2l.75 3h1.75L12 5.5z" fill="white"/>
    </svg>
  );
};

export default AngularIcon;