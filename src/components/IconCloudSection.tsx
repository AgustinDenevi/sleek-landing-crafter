import React from 'react';
import { motion } from 'framer-motion';
import { cn } from "@/lib/utils";
import Marquee from "@/components/ui/marquee";
import { FaLaptopCode, FaGlobe, FaMobileAlt, FaRobot } from "react-icons/fa";

const services = [
  {
    title: "Get a Custom Software",
    description: "Tailored software solutions for your business.",
    icon: <FaLaptopCode size={32} />,
  },
  {
    title: "Get your WebSite",
    description: "Modern and responsive website design.",
    icon: <FaGlobe size={32} />,
  },
  {
    title: "Get your own App",
    description: "Mobile app development for iOS and Android.",
    icon: <FaMobileAlt size={32} />,
  },
  {
    title: "Start with AI",
    description: "Integrate AI to boost your business operations.",
    icon: <FaRobot size={32} />,
  },
];

const firstRow = services.slice(0, services.length / 2);
const secondRow = services.slice(services.length / 2);

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
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
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

const IconCloudSection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold text-center mb-12 text-white"
      >
        Elegi el servicio que más se ajuste a ti:
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2"> {/* Cambiado a gap-0 */}
        <Marquee pauseOnHover className="[--duration:20s]">
          {firstRow.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:20s]">
          {secondRow.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </Marquee>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-black"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-black"></div>
      </div>
    </section>
  );
};


export default IconCloudSection;
