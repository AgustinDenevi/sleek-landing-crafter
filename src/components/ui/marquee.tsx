import React, { ReactNode } from 'react';
import { cn } from "@/lib/utils";

interface MarqueeProps {
  children: ReactNode;
  direction?: 'left' | 'right';
  pauseOnHover?: boolean;
  reverse?: boolean;
  speed?: number;
  className?: string;
}

const Marquee: React.FC<MarqueeProps> = ({
  children,
  direction = 'left',
  pauseOnHover = false,
  reverse = false,
  speed = 20,
  className,
}) => {
  const marqueeClass = cn(
    "flex overflow-hidden",
    direction === 'left' ? "animate-marquee" : "animate-marquee-reverse",
    pauseOnHover && "hover:[animation-play-state:paused]",
    className
  );

  const contentClass = cn(
    "flex min-w-full items-center justify-around",
    reverse && "flex-row-reverse"
  );

  return (
    <div className={marqueeClass} style={{ '--duration': `${speed}s` } as React.CSSProperties}>
      <div className={contentClass}>
        {children}
      </div>
      <div className={contentClass} aria-hidden="true">
        {children}
      </div>
    </div>
  );
};

export default Marquee;