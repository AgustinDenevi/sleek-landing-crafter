import React, { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

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
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 p-4">
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
    </motion.div>
  );
};

export default ContainerScrollAnimation;