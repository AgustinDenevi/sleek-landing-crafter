import React, { useCallback, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import HyperText from './magicui/hyper-text';
import Meteors from './magicui/meteors';
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { ISourceOptions, Engine } from "@tsparticles/engine";

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const particlesOptions: ISourceOptions = {
    fullScreen: {
      enable: true,
      zIndex: -1
    },
    background: {
      color: {
        value: "transparent",
      },
    },
    fpsLimit: 120,
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: "push",
        },
        onHover: {
          enable: true,
          mode: "repulse",
        },
        resize: true,
      },
      modes: {
        push: {
          quantity: 4,
        },
        repulse: {
          distance: 200,
          duration: 0.4,
        },
      },
    },
    particles: {
      color: {
        value: "#ffffff",
      },
      links: {
        color: "#ffffff",
        distance: 150,
        enable: true,
        opacity: 0.5,
        width: 1,
      },
      move: {
        direction: "none",
        enable: true,
        outModes: {
          default: "bounce",
        },
        random: false,
        speed: 0.5,
        straight: false,
        attract: {
          enable: true,
          rotate: {
            x: mousePosition.x * 0.0001,
            y: mousePosition.y * 0.0001
          }
        },
      },
      number: {
        density: {
          enable: true,
          area: 800,
        },
        value: 80,
      },
      opacity: {
        value: 0.5,
      },
      shape: {
        type: "circle",
      },
      size: {
        value: { min: 1, max: 5 },
      },
    },
    detectRetina: true,
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative min-h-screen w-screen flex flex-col justify-center items-center text-center px-4 bg-black overflow-hidden"
    >
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={particlesOptions}
      />
      <Meteors number={20} />
      <div className="relative z-10">
        <HyperText
          className="text-6xl font-bold mb-4 text-white font-mono"
          text="IsCoders S.A."
        />
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="text-2xl italic mb-8 font-mono text-white"
        >
          The future is one, the future IsCoders
        </motion.h2>
        <motion.a
          href="#precios"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full transition-colors font-mono"
        >
          Empezar ahora
        </motion.a>
      </div>
    </motion.section>
  );
};

export default Hero;