import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import Particles from "./magicui/particles";
import HyperText from "@/components/magicui/hyper-text";

const Hero = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative min-h-screen flex flex-col justify-center items-center text-center px-4 overflow-hidden bg-black"
    >
      <div 
        className="absolute inset-0 w-full h-full"
        style={{
          background: 'radial-gradient(ellipse 80% 50% at 50% -20%, rgba(120, 119, 198, 0.3), transparent)'
        }}
      />
      <Particles
        className="absolute inset-0"
        quantity={100}
        staticity={30}
        color="255,255,255"
        ease={50}
      />
      <nav className="absolute top-0 left-0 right-0 p-4 flex justify-between items-center z-10">
        <div className="text-white text-xl font-bold">
          <span className="text-4xl font-bold text-white">
            <HyperText text="<IsCoders />" /> {/* Sin className */}
          </span>
        </div>
        <div>
          <Button variant="ghost" className="text-white mr-2" aria-label="Log in">Log in</Button>
          <Button variant="outline" className="text-white" aria-label="Sign up">Sign up</Button>
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
            + Software Consultant
          </span>
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-6xl sm:text-7xl md:text-8xl font-bold mb-6 text-white"
        >
          <HyperText text="<IsCoders />" /> {/* Sin className */}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-xl text-gray-300 mb-8"
        >
          <i>The future is now, the future IsCoders.</i> 
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <Button size="lg" className="text-lg px-6 py-3">
            Get Started Now →
          </Button>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;
