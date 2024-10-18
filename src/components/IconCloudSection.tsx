import React from 'react';
import { motion } from 'framer-motion';
import { FileTextIcon } from "@radix-ui/react-icons";
import { GlobeIcon, SmartphoneIcon, BrainIcon } from 'lucide-react';

import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import AnimatedBeamMultipleOutputDemo from "@/components/example/animated-beam-multiple-outputs";
import AnimatedListDemo from "@/components/example/animated-list-demo";
import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";
import Marquee from "@/components/magicui/marquee";

const files = [
  {
    name: "custom_software.pdf",
    body: "Custom software is tailored to address specific business needs and challenges.",
  },
  {
    name: "website_design.html",
    body: "A well-designed website is crucial for establishing a strong online presence and attracting customers.",
  },
  {
    name: "mobile_app.apk",
    body: "Mobile apps provide a seamless user experience and can significantly boost customer engagement.",
  },
  {
    name: "ai_integration.py",
    body: "AI integration can automate processes, provide insights, and enhance decision-making capabilities.",
  },
  {
    name: "tech_stack.json",
    body: "Choosing the right technology stack is crucial for the success and scalability of your project.",
  },
];

const features = [
  {
    Icon: FileTextIcon,
    name: "Get a Custom Software",
    description: "Tailored software solutions to meet your specific business needs.",
    href: "#",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-1",
    background: (
      <Marquee
        pauseOnHover
        className="absolute top-10 [--duration:20s] [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] "
      >
        {files.map((f, idx) => (
          <figure
            key={idx}
            className={cn(
              "relative w-32 cursor-pointer overflow-hidden rounded-xl border p-4",
              "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
              "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
              "transform-gpu blur-[1px] transition-all duration-300 ease-out hover:blur-none",
            )}
          >
            <div className="flex flex-row items-center gap-2">
              <div className="flex flex-col">
                <figcaption className="text-sm font-medium dark:text-white ">
                  {f.name}
                </figcaption>
              </div>
            </div>
            <blockquote className="mt-2 text-xs">{f.body}</blockquote>
          </figure>
        ))}
      </Marquee>
    ),
  },
  {
    Icon: GlobeIcon,
    name: "Create your Website",
    description: "Professional website development to establish your online presence.",
    href: "#",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-2",
    background: (
      <AnimatedListDemo className="absolute right-2 top-4 h-[300px] w-full border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-105" />
    ),
  },
  {
    Icon: SmartphoneIcon,
    name: "Get your Mobile App",
    description: "Custom mobile app development for iOS and Android platforms.",
    href: "#",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-2",
    background: (
      <AnimatedBeamMultipleOutputDemo className="absolute right-2 top-4 h-[300px] border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-105" />
    ),
  },
  {
    Icon: BrainIcon,
    name: "Start with AI",
    description: "Integrate cutting-edge AI solutions into your business processes.",
    className: "col-span-3 lg:col-span-1",
    href: "#",
    cta: "Learn more",
    background: (
      <Calendar
        mode="single"
        selected={new Date(2022, 4, 11, 0, 0, 0)}
        className="absolute right-0 top-10 origin-top rounded-md border transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] group-hover:scale-105"
      />
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
        {features.map((feature, idx) => (
          <BentoCard key={idx} {...feature} />
        ))}
      </BentoGrid>
    </section>
  );
};

export default IconCloudSection;