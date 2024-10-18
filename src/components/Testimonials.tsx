import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    name: 'Juan Pérez',
    role: 'CEO, TechStart',
    content: 'IsCoders transformó nuestra presencia en línea. Su landing page nos ayudó a aumentar las conversiones en un 50%.',
    image: 'https://randomuser.me/api/portraits/men/1.jpg',
  },
  {
    name: 'María González',
    role: 'Fundadora, EcoShop',
    content: 'Gracias a la tienda en línea creada por IsCoders, nuestras ventas se han duplicado. ¡Increíble servicio!',
    image: 'https://randomuser.me/api/portraits/women/1.jpg',
  },
];

const Testimonials = ({ className = "" }) => {
  return (
    <section className={`py-20 px-4 ${className}`}>
      <h2 className="text-3xl font-bold text-center mb-12">Lo que dicen nuestros clientes</h2>
      <div className="flex flex-wrap justify-center gap-8">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.name}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-gray-700 rounded-lg shadow-lg p-6 w-full max-w-md"
          >
            <div className="flex items-center mb-4">
              <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full mr-4" />
              <div>
                <h3 className="font-bold">{testimonial.name}</h3>
                <p className="text-sm text-gray-400">{testimonial.role}</p>
              </div>
            </div>
            <p className="italic">&ldquo;{testimonial.content}&rdquo;</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;