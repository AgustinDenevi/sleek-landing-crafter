import React from 'react';

interface MarqueeProps {
  children: React.ReactNode;
  pauseOnHover?: boolean;
  className?: string;
}

const Marquee: React.FC<MarqueeProps> = ({ children, pauseOnHover = false, className = '' }) => {
  return (
    <div className={`overflow-hidden ${className}`}>
      <div className={`flex ${pauseOnHover ? 'hover:pause' : ''}`}>
        <div className="flex animate-marquee">
          {children}
        </div>
        <div className="flex animate-marquee" aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Marquee;