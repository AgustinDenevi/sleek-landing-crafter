import React from 'react';
import { motion } from 'framer-motion';
import IconCloud from './magicui/icon-cloud';

const slugs = [
  "typescript", "javascript", "dart", "java", "react", "flutter", "android",
  "html5", "css3", "nodedotjs", "express", "nextdotjs", "prisma", "amazonaws",
  "postgresql", "firebase", "nginx", "vercel", "testinglibrary", "jest",
  "cypress", "docker", "git", "jira", "github", "gitlab", "visualstudiocode",
  "androidstudio", "sonarqube", "figma",
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
        Empowering Your Workflow: Advanced Tools to Streamline and Enhance Every Step
      </motion.h2>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex justify-center"
      >
        <div className="relative flex size-full max-w-lg items-center justify-center overflow-hidden rounded-lg border border-gray-700 bg-gray-800 px-20 pb-20 pt-8">
          <IconCloud iconSlugs={slugs} />
        </div>
      </motion.div>
    </section>
  );
};

export default IconCloudSection;