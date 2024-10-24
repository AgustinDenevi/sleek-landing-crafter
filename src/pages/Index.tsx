import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import IconCloudSection from '../components/IconCloudSection';
import PCard from '../components/AiSection';
import PricingPlans from '../components/PricingPlans';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Hero />
      <IconCloudSection />
      <PCard />
      <PricingPlans />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Index;