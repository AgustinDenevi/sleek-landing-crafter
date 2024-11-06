import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 py-8 px-4 w-full">
      <div className="container mx-auto flex flex-wrap justify-between items-center">
        <div className="w-full w-auto text-center md:text-left mb-4 md:mb-0">
          <p>&copy; 2024 IsCoders S.A. All rights reserved.</p>
        </div>
        <nav className="w-full md:w-auto">
          <ul className="flex justify-center md:justify-end space-x-6">
            <li><a href="#" className="hover:text-blue-400 transition-colors">Politics</a></li>
            <li><a href="#membership-section" className="hover:text-blue-400 transition-colors">Contact</a></li>
            <li><a href="https://www.facebook.com/profile.php?id=100064803767481" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">Facebook</a></li>
            <li><a href="https://www.instagram.com/is.code.rs/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">Instagram</a></li>
            <li><a href="https://www.linkedin.com/company/iscoders/mycompany/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">LinkedIn</a></li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;