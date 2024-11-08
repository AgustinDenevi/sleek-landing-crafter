import React from 'react';
import Hero from '../components/Hero';
import IconCloudSection from '../components/IconCloudSection';
import PCard from '../components/AiSection';
import MembershipSection from '../components/MembershipSection';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';
import { Technologies } from '@/components/Technologies';



const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white font-kanit">
      <Hero />
      
      <IconCloudSection />
      <Technologies />
      <PCard />
      <MembershipSection />
      
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Index;