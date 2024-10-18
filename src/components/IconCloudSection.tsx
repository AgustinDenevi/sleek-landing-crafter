import React from 'react';
import { motion } from 'framer-motion';
import { FaLaptopCode, FaGlobe, FaMobileAlt, FaRobot } from "react-icons/fa";
import { BentoGrid, BentoCard } from "./magicui/bento-grid";
import Marquee from "./magicui/marquee";
import { cn } from "@/lib/utils";

const ServiceCard = ({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: JSX.Element;
}) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4 mx-2",
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
        "transform-gpu blur-[1px] transition-all duration-300 ease-out hover:blur-none"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        {icon}
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {title}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">
            {description}
          </p>
        </div>
      </div>
    </figure>
  );
};

const services = [
  {
    Icon: FaLaptopCode,
    name: "Get a Custom Software",
    description: "Tailored software solutions for your business.",
    href: "#",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-2",
    background: (
      <Marquee
        pauseOnHover
        className="absolute top-10 [--duration:20s] [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] "
      >
        {[...Array(5)].map((_, idx) => (
          <ServiceCard
            key={idx}
            title="Custom Software"
            description="Tailored solutions for your business needs"
            icon={<FaLaptopCode size={24} />}
          />
        ))}
      </Marquee>
    ),
  },
  {
    Icon: FaGlobe,
    name: "Get your WebSite",
    description: "Modern and responsive website design.",
    href: "#",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-1",
    background: (
      <div className="absolute inset-0 flex items-center justify-center">
        <FaGlobe size={64} className="text-primary/20" />
      </div>
    ),
  },
  {
    Icon: FaMobileAlt,
    name: "Get your own App",
    description: "Mobile app development for iOS and Android.",
    href: "#",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-1",
    background: (
      <div className="absolute inset-0 flex items-center justify-center">
        <FaMobileAlt size={64} className="text-primary/20" />
      </div>
    ),
  },
  {
    Icon: FaRobot,
    name: "Start with AI",
    description: "Integrate AI to boost your business operations.",
    className: "col-span-3 lg:col-span-2",
    href: "#",
    cta: "Learn more",
    background: (
      <Marquee
        pauseOnHover
        className="absolute bottom-10 [--duration:20s] [mask-image:linear-gradient(to_bottom,transparent_40%,#000_100%)] "
      >
        {[...Array(5)].map((_, idx) => (
          <ServiceCard
            key={idx}
            title="AI Integration"
            description="Boost your business with AI"
            icon={<FaRobot size={24} />}
          />
        ))}
      </Marquee>
    ),
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
      <BentoGrid>
        {services.map((service, idx) => (
          <BentoCard key={idx} {...service} />
        ))}
      </BentoGrid>
    </section>
  );
};

export default IconCloudSection;
