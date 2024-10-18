import React, { useState } from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

export interface HyperTextProps extends HTMLMotionProps<"div"> {
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
        "relative w-fit font-mono text-white",
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
      <span className="relative">{displayText}</span>
    </motion.div>
  );
}