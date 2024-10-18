import { cn } from "@/lib/utils";
import React from "react";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoCard = ({
  className,
  Icon,
  name,
  description,
  href,
  cta,
}: {
  className?: string;
  Icon?: React.ElementType;
  name: string;
  description: string;
  href?: string;
  cta?: string;
}) => {
  return (
    <div
      className={cn(
        "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent justify-between flex flex-col space-y-4",
        className
      )}
    >
      <div className="flex flex-col space-y-2">
        {Icon && (
          <Icon className="w-8 h-8 text-neutral-700 dark:text-neutral-300" />
        )}
        <h3 className="font-semibold text-xl text-neutral-800 dark:text-neutral-200">
          {name}
        </h3>
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          {description}
        </p>
      </div>
      {href && cta && (
        <a
          href={href}
          className="text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline"
        >
          {cta} →
        </a>
      )}
    </div>
  );
};