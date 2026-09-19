import React from 'react';

interface QavenzoLogoProps {
  className?: string;
}

export const QavenzoLogo: React.FC<QavenzoLogoProps> = ({ className = 'h-7 sm:h-8' }) => {
  return (
    <div className={`flex items-center select-none ${className}`}>
      <span
        className="font-display font-black text-2xl sm:text-3xl tracking-[0.06em] text-[#FFD200] inline-block"
        style={{
          textShadow:
            '-2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 2px 2px 0 #000, 0 3px 0 #000, 3px 3px 0 #000, 0 4px 0 #000',
          WebkitTextStroke: '1px #000',
          transform: 'translateY(-1px)',
        }}
      >
        QAVENZO
      </span>
    </div>
  );
};
