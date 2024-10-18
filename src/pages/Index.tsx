import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import IconCloudSection from '../components/IconCloudSection';
import PricingPlans from '../components/PricingPlans';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header />
      <Hero />
      <IconCloudSection className="bg-gradient-to-b from-gray-900 to-gray-800" />
      <PricingPlans className="bg-gradient-to-b from-gray-800 to-gray-900" />
      <Testimonials className="bg-gradient-to-b from-gray-900 to-gray-800" />
      <Footer className="bg-gradient-to-b from-gray-800 to-gray-900" />
    </div>
  );
};

export default Index;