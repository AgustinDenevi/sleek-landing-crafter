import React from 'react';
import { motion } from 'framer-motion';
import HyperText from './magicui/hyper-text';

const Hero = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="min-h-screen flex flex-col justify-center items-center text-center px-4 bg-gradient-to-br from-gray-900 to-gray-800"
    >
      <HyperText
        className="text-6xl font-bold mb-4 text-white font-mono"
        text="IsCoders S.A."
      />
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="text-2xl italic mb-8 font-mono"
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
    </motion.section>
  );
};

export default Hero;