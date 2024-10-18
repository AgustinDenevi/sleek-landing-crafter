import React from 'react';
import { motion } from 'framer-motion';
import { CodeIcon, GlobeIcon, SmartphoneIcon, BrainIcon } from 'lucide-react';
import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";

const services = [
  {
    Icon: CodeIcon,
    name: "Get a Custom Software",
    description: "Tailored software solutions to meet your specific business needs.",
    href: "#",
    cta: "Learn more",
    className: "col-span-2",
  },
  {
    Icon: GlobeIcon,
    name: "Create your Website",
    description: "Professional website development to establish your online presence.",
    href: "#",
    cta: "Learn more",
    className: "col-span-1",
  },
  {
    Icon: SmartphoneIcon,
    name: "Get your Mobile App",
    description: "Custom mobile app development for iOS and Android platforms.",
    href: "#",
    cta: "Learn more",
    className: "col-span-1",
  },
  {
    Icon: BrainIcon,
    name: "Start with AI",
    description: "Integrate cutting-edge AI solutions into your business processes.",
    href: "#",
    cta: "Learn more",
    className: "col-span-2",
  },
];

const IconCloudSection = () => {
  return (
    <section className="py-20 px-4">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold text-center mb-12"
      >
        Elegi el servicio que mas se ajuste a ti:
      </motion.h2>
      <BentoGrid className="max-w-6xl mx-auto">
        {services.map((service, idx) => (
          <BentoCard key={idx} {...service} />
        ))}
      </BentoGrid>
    </section>
  );
};

export default IconCloudSection;