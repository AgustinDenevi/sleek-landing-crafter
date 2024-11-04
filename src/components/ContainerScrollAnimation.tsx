import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface User {
  name: string;
  designation: string;
  image: string;
  badge?: string;
}

interface ContainerScrollAnimationProps {
  users: User[];
  children: React.ReactNode;
}

const ContainerScrollAnimation = ({ users, children }: ContainerScrollAnimationProps) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.5, 1], [100, 0, -100]);

  return (
    <div ref={containerRef} className="relative h-[300vh] py-40">
      <div className="sticky top-0 flex min-h-screen items-center overflow-hidden">
        <div className="absolute inset-0">
          {users.map((user, idx) => (
            <motion.div
              key={idx}
              className="absolute left-1/2 top-1/2"
              style={{
                x: `${Math.random() * 100 - 50}%`,
                y: `${Math.random() * 100 - 50}%`,
              }}
            >
              <img
                src={user.image}
                alt={user.name}
                className="h-10 w-10 rounded-full object-cover"
              />
            </motion.div>
          ))}
        </div>
        <motion.div
          className="relative mx-auto max-w-5xl px-4"
          style={{ opacity, y }}
        >
          {children}
        </motion.div>
      </div>
    </div>
  );
};

export default ContainerScrollAnimation;