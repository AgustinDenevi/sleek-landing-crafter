import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Brush, Zap } from 'lucide-react';
import { Button } from './ui/button';
import { ToggleGroup, ToggleGroupItem } from './ui/toggle-group';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const MembershipSection = () => {
  const [plan, setPlan] = useState('standard');
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();
  const sectionRef = useRef<HTMLDivElement | null>(null);

  const plans = {
    standard: {
      price: '4,995',
      description: 'One request at a time. Pause or cancel anytime.',
      features: [
        'One request at a time',
        'Average 48 hour delivery',
        'Unlimited brands',
        'Webflow development',
        'Unlimited stock photos',
        'Pause or cancel anytime'
      ]
    },
    pro: {
      price: '7,995',
      description: 'Double the requests. Pause or cancel anytime.',
      features: [
        'Two requests at a time',
        'Average 48 hour delivery',
        'Unlimited brands',
        'Webflow development',
        'Unlimited stock photos',
        'Unlimited users',
        'Pause or cancel anytime'
      ]
    },
    custom: {
      price: 'Precio a consultar',
      description: 'Plan personalizado según tus necesidades.',
      features: [
        'Solicitudes personalizadas',
        'Soporte dedicado',
        'Características a medida',
        'Consulta inicial gratuita'
      ]
    }
  };

  const currentPlan = plans[plan as keyof typeof plans];

  const handleScroll = () => {
    if (sectionRef.current) {
      const rect = sectionRef.current.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <motion.section 
      id="membership-section" 
      ref={sectionRef}
      className="py-20 px-4 bg-black relative overflow-hidden"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="absolute inset-0 w-full h-full" style={{
        background: 'radial-gradient(ellipse 70% 40% at 50% 60%, rgba(120, 119, 198, 0.3), transparent)'
      }} />
      
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20, x: 100 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20, x: isVisible ? 0 : -100 }}
          transition={{ duration: 0.7 }}
          className="bg-zinc-900/50 p-8 rounded-2xl border border-zinc-800"
        >
          <div className="inline-flex px-3 py-1 rounded-full bg-blue-500/10 text-blue-500 text-sm font-medium mb-4">
            Slots available
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-8">Join IsCoders</h2>
          
          <div className="space-y-4">
            <div 
              className="bg-zinc-800/50 p-6 rounded-xl hover:bg-zinc-800/70 transition-colors cursor-pointer"
              onClick={() => window.open('https://cal-web-wzho.onrender.com/frank/15min', '_blank')}
            >
              <div className="flex justify-between items-center group">
                <div className="flex flex-col">
                  <h3 className="text-lg font-semibold mb-2">Book a 15-min intro call</h3>
                  <p className="text-zinc-400">Learn more about how IsCoders works and how it can help you.</p>
                </div>
                <FaExternalLinkAlt className="ml-2 opacity-0 transition-opacity duration-200 group-hover:opacity-80" />
              </div>
            </div>
            
            <div className="bg-zinc-800/50 p-6 rounded-xl hover:bg-zinc-800/70 transition-colors cursor-pointer">
              <h3 className="text-lg font-semibold mb-2">Refer a friend & earn</h3>
              <p className="text-zinc-400">Earn 5% monthly recurring commissions for each referral.</p>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20, x: -100 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20, x: isVisible ? 0 : 100 }}
          transition={{ duration: 0.7 }}
          className="bg-zinc-900/50 p-8 rounded-2xl border border-zinc-800"
        >
          <h2 className="text-3xl font-bold mb-6">Membership</h2>
          
          <ToggleGroup 
            type="single" 
            value={plan}
            onValueChange={(value) => value && setPlan(value)}
            className="mb-8 justify-start bg-zinc-800/50 p-1 rounded-full"
          >
            <ToggleGroupItem 
              value="standard" 
              className="rounded-full px-6 data-[state=on]:bg-black data-[state=on]:text-blue-500"
            >
              Standard
            </ToggleGroupItem>
            
            <ToggleGroupItem 
              value="pro" 
              className="rounded-full px-6 data-[state=on]:bg-black data-[state=on]:text-blue-500 flex items-center gap-1"
            >
              Pro <Zap className="w-4 h-4 text-yellow-400" />
            </ToggleGroupItem>

            <ToggleGroupItem 
              value="custom" 
              className="rounded-full px-6 data-[state=on]:bg-black data-[state=on]:text-blue-500 flex items-center justify-between gap-1"
            >
              Custom
              <Brush className="w-4 h-4 text-cyan-400" />
            </ToggleGroupItem>
          </ToggleGroup>

          <div className="mb-8">
            <div className="flex items-baseline gap-1">
              <span className="text-4xl font-bold">${currentPlan.price}</span>
              <span className="text-zinc-400">/m</span>
            </div>
            <p className="text-zinc-400">{currentPlan.description}</p>
          </div>

          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-4">What's included</h3>
            <ul className="space-y-3">
              {currentPlan.features.map((feature, index) => (
                <li key={index} className="flex items-center gap-2 text-zinc-300">
                  <span className="w-1 h-1 bg-zinc-500 rounded-full" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex items-center gap-4 justify-center">
            <Button 
              className="w-3/4 bg-white text-black hover:bg-zinc-200"
              onClick={() => navigate('/payment')}
            >
              Get started
            </Button>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default MembershipSection;