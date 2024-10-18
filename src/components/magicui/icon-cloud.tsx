import React, { useEffect, useRef, useState } from "react";
import { createNoise3D } from "simplex-noise";

const noise3D = createNoise3D();

export interface IconCloudProps extends React.HTMLAttributes<HTMLDivElement> {
  iconSlugs: string[];
}

export default function IconCloud({
  iconSlugs,
  className,
  ...props
}: IconCloudProps) {
  const requestRef = useRef<number>();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [icons, setIcons] = useState<HTMLImageElement[]>([]);
  const [particles, setParticles] = useState<
    { x: number; y: number; z: number }[]
  >([]);

  useEffect(() => {
    const loadIcons = async () => {
      const loadedIcons = await Promise.all(
        iconSlugs.map((slug) => {
          return new Promise<HTMLImageElement>((resolve) => {
            const img = new Image();
            img.src = `https://cdn.simpleicons.org/${slug}`;
            img.onload = () => resolve(img);
          });
        })
      );
      setIcons(loadedIcons);
    };

    loadIcons();
  }, [iconSlugs]);

  useEffect(() => {
    if (!canvasRef.current || icons.length === 0) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d")!;

    const initParticles = () => {
      const newParticles = [];
      for (let i = 0; i < icons.length; i++) {
        newParticles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          z: Math.random() * 0.5 + 0.5,
        });
      }
      setParticles(newParticles);
    };

    const animate = (time: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < particles.length; i++) {
        const particle = particles[i];
        const icon = icons[i];

        particle.x +=
          noise3D(particle.x * 0.01, particle.y * 0.01, time * 0.0005) * 0.3;
        particle.y +=
          noise3D(particle.x * 0.01, particle.y * 0.01, time * 0.0005 + 100) *
          0.3;

        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        const size = 24 * particle.z;
        ctx.globalAlpha = 0.6 * particle.z;
        ctx.drawImage(
          icon,
          particle.x - size / 2,
          particle.y - size / 2,
          size,
          size
        );
      }

      requestRef.current = requestAnimationFrame(animate);
    };

    initParticles();
    requestRef.current = requestAnimationFrame(animate);

    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, [icons]);

  return (
    <div className={className} {...props}>
      <canvas
        ref={canvasRef}
        width={300}
        height={300}
        className="w-full h-full"
      />
    </div>
  );
}