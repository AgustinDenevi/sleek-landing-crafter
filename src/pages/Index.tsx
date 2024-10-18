import React from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Hero from '../components/Hero';
import IconCloudSection from '../components/IconCloudSection';
import PricingPlans from '../components/PricingPlans';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <Header />
      <Hero />
      <IconCloudSection className="bg-gradient-to-b from-black to-gray-900" />
      <PricingPlans className="bg-gradient-to-b from-gray-900 to-black" />
      <Testimonials className="bg-gradient-to-b from-black to-gray-900" />
      <Footer className="bg-gradient-to-b from-gray-900 to-black" />
    </div>
  );
};

export default Index;