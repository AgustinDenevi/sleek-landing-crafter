import React from 'react';

interface MarqueeProps {
  children: React.ReactNode;
  pauseOnHover?: boolean;
  className?: string;
}

const Marquee: React.FC<MarqueeProps> = ({ children, pauseOnHover = false, className = '' }) => {
  return (
    <div className={`overflow-hidden ${className}`}>
      <div className={`flex animate-marquee ${pauseOnHover ? 'hover:animation-play-state-paused' : ''}`}>
        {children}
        {children} {/* Duplicate children to create a seamless loop */}
      </div>
    </div>
  );
};

export default Marquee;