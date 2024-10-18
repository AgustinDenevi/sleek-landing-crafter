import React from 'react';

interface FooterProps {
  className?: string;
}

const Footer: React.FC<FooterProps> = ({ className }) => {
  return (
    <footer className={`py-8 px-4 ${className}`}>
      <div className="container mx-auto text-center">
        <p>&copy; 2024 IsCoders S.A. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;