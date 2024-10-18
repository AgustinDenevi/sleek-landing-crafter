import React from 'react';
import { motion } from 'framer-motion';

const plans = [
  {
    name: 'Standard',
    price: '$99',
    features: ['Landing page', 'Fast', 'Just one click'],
  },
  {
    name: 'Pro',
    price: '$199',
    features: ['Ecommerce page', 'Fast and complete'],
  },
  {
    name: 'Premium',
    price: '$499',
    features: ['Personalized assistance', 'Complete web page'],
  },
];

const PricingPlans = ({ className = "" }) => {
  return (
    <section id="precios" className={`py-20 px-4 ${className}`}>
      <h2 className="text-3xl font-bold text-center mb-12">Nuestros Planes</h2>
      <div className="flex flex-wrap justify-center gap-8">
        {plans.map((plan, index) => (
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-gray-800 rounded-lg shadow-lg p-8 w-full max-w-sm"
          >
            <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
            <p className="text-4xl font-bold mb-6">{plan.price}</p>
            <ul className="mb-8">
              {plan.features.map((feature) => (
                <li key={feature} className="mb-2">✓ {feature}</li>
              ))}
            </ul>
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors">
              Suscribirse
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default PricingPlans;