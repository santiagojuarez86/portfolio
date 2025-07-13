import React from 'react';

interface IconProps {
  className?: string;
}

const VueIcon: React.FC<IconProps> = ({ className = "w-12 h-12" }) => {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <path d="M12 2L2 7v10l10 5 10-5V7l-10-5z" fill="#4FC08D"/>
      <path d="M2 7l10 5v10l-10-5V7z" fill="#35495E"/>
      <path d="M12 12l10-5v10l-10 5V12z" fill="#41B883"/>
      <path d="M12 2l-2 3.5L12 12l2-6.5L12 2z" fill="#35495E"/>
    </svg>
  );
};

export default VueIcon;