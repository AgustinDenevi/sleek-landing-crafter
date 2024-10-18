import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export interface HyperTextProps extends React.HTMLAttributes<HTMLDivElement> {
  text: string;
}

export default function HyperText({
  text,
  className,
  ...props
}: HyperTextProps) {
  const [isHovered, setIsHovered] = useState(false);

  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const [displayText, setDisplayText] = useState(text);

  const animateText = () => {
    let iteration = 0;
    const interval = setInterval(() => {
      setDisplayText(prevText =>
        prevText
          .split("")
          .map((letter, index) => {
            if (index < iteration) {
              return text[index];
            }
            return letters[Math.floor(Math.random() * 26)];
          })
          .join("")
      );

      if (iteration >= text.length) {
        clearInterval(interval);
      }
      iteration += 1 / 3;
    }, 30);
  };

  return (
    <motion.div
      className={cn(
        "relative w-fit overflow-hidden bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent",
        className
      )}
      onMouseEnter={() => {
        setIsHovered(true);
        animateText();
      }}
      onMouseLeave={() => {
        setIsHovered(false);
        setDisplayText(text);
      }}
      {...props}
    >
      <span className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 blur-xl" />
      <span className="relative">{displayText}</span>
    </motion.div>
  );
}