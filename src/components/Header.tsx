import React from 'react';
import { motion } from 'framer-motion';
import HyperText from './magicui/hyper-text';

const Header = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 bg-gray-800 bg-opacity-90 z-50"
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <HyperText text="IsCoders" className="text-2xl font-bold font-mono" />
        <nav>
          <ul className="flex space-x-6">
            {['Inicio', 'Precios', 'Características', 'Contacto'].map((item) => (
              <li key={item}>
                <a href={`#${item.toLowerCase()}`} className="hover:text-blue-400 transition-colors font-mono">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </motion.header>
  );
};

export default Header;