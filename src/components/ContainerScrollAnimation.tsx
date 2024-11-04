import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { cn } from '@/lib/utils';

interface User {
  name: string;
  designation: string;
  image: string;
  badge?: string;
}

interface Props {
  users: User[];
}

const ContainerScrollAnimation: React.FC<Props> = ({ users }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0.3, 1]);

  return (
    <motion.div
      ref={containerRef}
      className="h-[80vh] flex items-center justify-center relative"
      style={{
        scale,
        opacity
      }}
    >
      {/* Tablet Frame */}
      <div className={cn(
        "relative rounded-[40px] border-[16px] border-black bg-black p-4 max-w-[1024px] w-full mx-auto",
        "before:absolute before:content-[''] before:top-0 before:left-1/2 before:-translate-x-1/2",
        "before:h-[16px] before:w-[120px] before:bg-black before:rounded-b-[16px]",
        "shadow-2xl"
      )}>
        {/* Screen Content */}
        <div className="bg-white rounded-[24px] overflow-hidden h-[60vh]">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 overflow-y-auto h-full">
            {users.map((user, idx) => (
              <motion.div
                key={idx}
                className="relative group"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
              >
                <img
                  src={user.image}
                  alt={user.name}
                  className="w-full h-auto rounded-lg transition-transform duration-300 group-hover:scale-105"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ContainerScrollAnimation;