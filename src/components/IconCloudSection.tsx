import React from 'react';
import styled from 'styled-components';
import { FaCode, FaMobileAlt, FaGlobe } from 'react-icons/fa';
import TextReveal from './magicui/text-reveal';
import { cn } from "@/lib/utils";
import Marquee from "@/components/magicui/marquee";

const services = [
  {
    title: "Get a Custom Software",
    description: "Tailored software solutions for your business.",
    icon: <FaCode size={32} />,
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
];

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
      <div className="flex flex-row items-center gap-1">
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
    <StyledWrapper>
      <TextReveal text="Tailored Tech Solutions" className="title" />
      <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-transparent md:shadow-xl">
        <Marquee pauseOnHover className="[--duration:20s] flex gap-4">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:20s] flex gap-4">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </Marquee>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  display: flex; 
  flex-direction: column;
  align-items: center;

  .title {
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
    font-size: 30px;
    margin-bottom: 20px;
    color: white;
  }
`;

export default IconCloudSection;