import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import Meteors from "./magicui/meteors";

const Hero = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative min-h-screen flex flex-col justify-center items-center text-center px-4 bg-black overflow-hidden"
    >
      <div className="absolute inset-0 w-[150vw] h-screen left-[-25vw] top-0">
        <Meteors number={60} />
      </div>
      <nav className="absolute top-0 left-0 right-0 p-4 flex justify-between items-center">
        <div className="text-white text-xl font-bold">Magic UI</div>
        <div>
          <Button variant="ghost" className="text-white mr-2">Log in</Button>
          <Button variant="outline" className="text-white">Sign up</Button>
        </div>
      </nav>
      <div className="relative z-10 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mb-4"
        >
          <span className="px-3 py-1 text-sm font-semibold bg-gray-800 text-gray-300 rounded-full">
            + Introducing Magic UI Template
          </span>
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-6xl sm:text-7xl md:text-8xl font-bold mb-6 text-white"
        >
          Magic UI is the new way to build landing pages.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-xl text-gray-300 mb-8"
        >
          Beautifully designed, animated components and templates built with Tailwind CSS, React, and Framer Motion.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <Button size="lg" className="text-lg px-6 py-3">
            Get Started for free →
          </Button>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;