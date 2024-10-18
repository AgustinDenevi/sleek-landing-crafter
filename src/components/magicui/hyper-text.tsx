import React from "react";
import { cn } from "@/lib/utils";

export interface HyperTextProps extends React.HTMLAttributes<HTMLDivElement> {
  text: string;
}

export default function HyperText({
  text,
  className,
  ...props
}: HyperTextProps) {
  return (
    <div
      className={cn(
        "relative w-fit overflow-hidden bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent",
        className
      )}
      {...props}
    >
      <span className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 blur-xl" />
      <span className="relative">{text}</span>
    </div>
  );
}