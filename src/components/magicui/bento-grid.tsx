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
  background,
}: {
  className?: string;
  Icon?: React.ElementType;
  name: string;
  description: string;
  href?: string;
  cta?: string;
  background?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 rounded-3xl border border-transparent justify-between flex flex-col space-y-4 overflow-hidden relative",
        className
      )}
    >
      {background}
      <div className="relative z-10">
        <div className="flex items-center justify-between">
          {Icon && (
            <Icon className="h-8 w-8 text-primary dark:text-primary-foreground" />
          )}
          {href && (
            <a
              href={href}
              className="text-sm font-medium text-primary dark:text-primary-foreground hover:underline"
            >
              {cta}
            </a>
          )}
        </div>
        <h3 className="font-semibold text-xl mt-4 text-foreground">
          {name}
        </h3>
        <p className="font-normal text-sm text-muted-foreground mt-2 line-clamp-3">
          {description}
        </p>
      </div>
    </div>
  );
};