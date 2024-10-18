import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 py-8 px-4">
      <div className="container mx-auto flex flex-wrap justify-between items-center">
        <div className="w-full md:w-auto text-center md:text-left mb-4 md:mb-0">
          <p>&copy; 2024 IsCoders S.A. Todos los derechos reservados.</p>
        </div>
        <nav className="w-full md:w-auto">
          <ul className="flex justify-center md:justify-end space-x-6">
            <li><a href="#" className="hover:text-blue-400 transition-colors">Políticas</a></li>
            <li><a href="#" className="hover:text-blue-400 transition-colors">Contacto</a></li>
            <li><a href="#" className="hover:text-blue-400 transition-colors">Facebook</a></li>
            <li><a href="#" className="hover:text-blue-400 transition-colors">Twitter</a></li>
            <li><a href="#" className="hover:text-blue-400 transition-colors">LinkedIn</a></li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;