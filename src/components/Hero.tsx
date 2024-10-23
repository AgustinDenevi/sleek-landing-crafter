import React from 'react';
import { motion } from 'framer-motion';
import Particles from "./magicui/particles";
import HyperText from "@/components/magicui/hyper-text";
import TextReveal from "@/components/magicui/text-reveal";

const Hero = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative min-h-screen flex flex-col justify-center items-center text-center px-4 bg-black z-10"
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
      <nav className="absolute top-0 left-0 right-0 p-4 flex justify-between items-center">
        <div className="text-white text-xl font-bold">
          <HyperText text="<IsCoders />" />
        </div>
        <div>
          <button className="text-white mr-2">Log in</button>
          <button className="text-white">Sign up</button>
        </div>
      </nav>

      <div className="relative max-w-4xl mx-auto mt-[100px]" >
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
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-2 text-white"
        >
          <HyperText text="<IsCoders />" />
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-lg sm:text-xl text-gray-300 mb-6 z-10"
        >
          <i>The future is now, the future IsCoders.</i> 
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <div className="flex items-center justify-center mb-10 ">
            <div className="relative group">
              <button className="relative inline-block p-px font-semibold leading-6 text-white bg-gray-800 shadow-2xl cursor-pointer rounded-xl shadow-zinc-900 transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95 ">
                <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 p-[2px] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <span className="relative z-10 block px-4 py-2 rounded-xl bg-gray-950">
                  <div className="relative z-10 flex items-center space-x-2">
                    <span className="transition-all duration-500 group-hover:translate-x-1">
                      Let's get started
                    </span>
                    <svg
                      className="w-6 h-6 transition-transform duration-500 group-hover:translate-x-1"
                      data-slot="icon"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        clipRule="evenodd"
                        d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
                        fillRule="evenodd"
                      />
                    </svg>
                  </div>
                </span>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;
