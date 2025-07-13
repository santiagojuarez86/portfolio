import React from 'react';

interface IconProps {
  className?: string;
}

const NodeIcon: React.FC<IconProps> = ({ className = "w-12 h-12" }) => {
  return (  
    <svg viewBox="0 0 256 292" xmlns="http://www.w3.org/2000/svg" width="256" height="292" className={className}>
      <defs>
        <linearGradient id="simpleGradient" x1="68.188%" x2="27.823%" y1="17.487%" y2="89.755%">
          <stop offset="0%" stop-color="#41873F"/>
          <stop offset="32.88%" stop-color="#418B3D"/>
          <stop offset="63.52%" stop-color="#419637"/>
          <stop offset="93.19%" stop-color="#3FA92D"/>
          <stop offset="100%" stop-color="#3FAE2A"/>
        </linearGradient>
      </defs>
      <path fill="url(#simpleGradient)" d="M134.923 1.832c-4.344-2.443-9.502-2.443-13.846 0L6.787 67.801C2.443 70.244 0 74.859 0 79.745v132.208c0 4.887 2.715 9.502 6.787 11.945l114.29 65.968c4.344 2.444 9.502 2.444 13.846 0l114.29-65.968c4.344-2.443 6.787-7.058 6.787-11.945V79.745c0-4.886-2.715-9.501-6.787-11.944L134.923 1.832Z"/>
    </svg>

  );
};

export default NodeIcon;