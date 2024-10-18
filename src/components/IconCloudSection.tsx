import React from 'react';
import { motion } from 'framer-motion';
import { cn } from "@/lib/utils";
import { FaLaptopCode, FaGlobe, FaMobileAlt, FaRobot } from "react-icons/fa";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const services = [
  {
    title: "Get a Custom Software",
    description: "Tailored software solutions for your business.",
    icon: <FaLaptopCode size={32} />,
    avatar: "/avatars/01.png",
    name: "John Doe",
    username: "@johndoe"
  },
  {
    title: "Get your WebSite",
    description: "Modern and responsive website design.",
    icon: <FaGlobe size={32} />,
    avatar: "/avatars/02.png",
    name: "Jane Smith",
    username: "@janesmith"
  },
  {
    title: "Get your own App",
    description: "Mobile app development for iOS and Android.",
    icon: <FaMobileAlt size={32} />,
    avatar: "/avatars/03.png",
    name: "Mike Johnson",
    username: "@mikejohnson"
  },
  {
    title: "Start with AI",
    description: "Integrate AI to boost your business operations.",
    icon: <FaRobot size={32} />,
    avatar: "/avatars/04.png",
    name: "Emily Brown",
    username: "@emilybrown"
  },
];

const ServiceCard = ({
  title,
  description,
  icon,
  avatar,
  name,
  username,
}: {
  title: string;
  description: string;
  icon: JSX.Element;
  avatar: string;
  name: string;
  username: string;
}) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 m-4 max-w-sm">
      <div className="flex items-center mb-4">
        <Avatar className="h-10 w-10 mr-3">
          <AvatarImage src={avatar} alt={name} />
          <AvatarFallback>{name[0]}</AvatarFallback>
        </Avatar>
        <div>
          <h3 className="font-semibold text-lg">{name}</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">{username}</p>
        </div>
      </div>
      <p className="text-gray-700 dark:text-gray-300 mb-4">{description}</p>
      <div className="flex items-center text-blue-500 dark:text-blue-400">
        {icon}
        <span className="ml-2 font-medium">{title}</span>
      </div>
    </div>
  );
};

const IconCloudSection = () => {
  return (
    <section className="py-20 px-4 bg-gray-100 dark:bg-gray-900">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white"
      >
        Elige el servicio que más se ajuste a ti:
      </motion.h2>
      <div className="flex flex-wrap justify-center">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </section>
  );
};

export default IconCloudSection;