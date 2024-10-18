import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";

const IconCloudSection = ({ className = "" }) => {
  const services = [
    { title: "Get a Custom Software" },
    { title: "Get a Mobile App" },
    { title: "Get a Web Site" },
  ];

  return (
    <section className={`py-20 px-4 ${className}`}>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold text-center mb-12 font-mono"
      >
        Elegi el servicio que mas se ajuste a ti:
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="text-xl font-mono">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 font-mono">Descripción del servicio...</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default IconCloudSection;