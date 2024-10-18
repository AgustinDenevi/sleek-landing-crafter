import React from 'react';
import { motion } from 'framer-motion';
import HyperText from './magicui/hyper-text';
import Meteors from "./magicui/meteors";

const Hero = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative min-h-screen flex flex-col justify-center items-center text-center px-4 bg-black overflow-hidden"
    >
      <div className="absolute inset-0 w-screen h-screen left-0 top-0">
        <Meteors number={40} />
      </div>
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