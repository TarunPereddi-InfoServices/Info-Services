import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import image1 from '../../assets/images/Capabilities/cloudnative.svg';
import image2 from '../../assets/images/Capabilities/coginitiveai.svg';
import image3 from '../../assets/images/Capabilities/xops.svg';
import image4 from '../../assets/images/Capabilities/salesforce.svg';
import image5 from '../../assets/images/Capabilities/generativeai.svg';
import image6 from '../../assets/images/Capabilities/businessintelligence.svg';

const capabilities = [
  { 
    title: "Gen AI", 
    icon: image1,
    description: "Harness the power of generative AI to create innovative solutions and drive business growth."
  },
  { 
    title: "Cognitive AI", 
    icon: image2,
    description: "Upgrade, optimize, and enhance your performance with an AI-driven transformation. The technology adds progressive intelligence to your business dimensions."
  },
  { 
    title: "Xops", 
    icon: image3,
    description: "Take the next step in IT management. Unify, manage, and automate different business applications and processes with end-to-end XOps integrations."
  },
  { 
    title: "Salesforce", 
    icon: image4,
    description: "Leverage Salesforce to streamline your sales processes and enhance customer relationships."
  },
  { 
    title: "Generative AI", 
    icon: image5,
    description: "Unlock new possibilities with generative AI, creating content and solutions that push the boundaries of innovation."
  },
  { 
    title: "Business Intelligence", 
    icon: image6,
    description: "Transform raw data into actionable insights, driving informed decision-making across your organization."
  },
];

const CapabilityCard = ({ title, icon, isActive, onHover, onLeave }) => (
  <motion.div
    className={`p-4 rounded-xl flex items-center justify-center lg:h-32 cursor-pointer ${
      isActive ? 'bg-gradient-to-r from-[#684EB2] via-[#8F23AE] to-[#684EB2] text-white' : 'bg-[#EFEFEF] text-black'
    }`}
    initial={{ scale: 1 }}
    whileHover={{ scale: 1.05 }}
    transition={{
      type: "spring",
      stiffness: 400,
      damping: 10,
    }}
    onHoverStart={onHover}
    onHoverEnd={onLeave}
  >
    {!isActive && (
      <motion.div
        className="flex items-center space-x-4"
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.2 }}
      >
        <div className="w-12 h-12 rounded-lg flex items-center justify-center">
          <img src={icon} alt={title} className="w-10 h-10" />
        </div>
        <span className="text-lg font-medium">{title}</span>
      </motion.div>
    )}

    {isActive && (
      <motion.span
        className="absolute inset-0 flex items-center justify-center text-lg font-medium"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.2 }}
      >
        Know More
      </motion.span>
    )}
  </motion.div>
);

const Capabilities = () => {
  const [activeCapability, setActiveCapability] = useState(null);

  return (
    <div className="sticky top-0 z-0 h-screen overflow-hidden">
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4 sm:p-8 overflow-hidden rounded-t-[50px]">
      <div className="w-full max-w-7xl">
        <h1 className="text-4xl sm:text-6xl font-light bg-gradient-to-r from-[#684EB2] via-[#8F23AE] to-[#684EB2] inline-block text-transparent bg-clip-text mb-8 sm:mb-12">
          Capabilities
        </h1>
      </div>
      
      <div className="flex flex-col lg:flex-row space-y-8 lg:space-y-0 lg:space-x-16 w-full max-w-7xl">
        <div className="grid grid-cols-2 sm:grid-cols-2  lg:grid-cols-3 gap-6 w-full lg:w-3/5">
          {capabilities.map((capability) => (
            <CapabilityCard
              key={capability.title}
              {...capability}
              isActive={activeCapability === capability}
              onHover={() => setActiveCapability(capability)}
              onLeave={() => setActiveCapability(null)}
            />
          ))}
        </div>

        <div className="flex flex-col justify-center items-start w-full lg:w-2/5 p-4 sm:p-10 h-[20rem]">
          <motion.div
            key={activeCapability ? activeCapability.title : 'default'}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="text-left"
          >
            {activeCapability ? (
              <>
                <h3 className="text-lg text-gray-700 mb-2">{activeCapability.title}</h3>
                <p className="text-2xl sm:text-4xl font-extralight text-gray-800 mb-6">
                  {activeCapability.description}
                </p>
              </>
            ) : (
              <>
                <h3 className="text-lg text-gray-700 mb-2">Capabilities</h3>
                <p className="text-2xl sm:text-4xl font-extralight text-gray-800 mb-6">
                  Lorem ipsum dolor sit amet, consectetur{' '}
                  <span className="bg-gradient-to-r from-[#684EB2] via-[#8F23AE] to-[#684EB2] text-transparent bg-clip-text">
                    adipiscing elit.
                  </span>{' '}
                  Vestibulum fermentum sit amet nibh sed cursus. Vestibulum est nunc.
                </p>
                <Button 
                  variant="outline" 
                  className="text-xl sm:text-2xl font-extralight rounded-full border-zinc-800 text-zinc-600 px-8 py-4 sm:px-12 sm:py-7 hover:bg-gradient-to-r from-[#684EB2] via-[#8F23AE] to-[#684EB2] hover:text-white transition-all duration-300 ease-in-out bg-[length:200%_100%] hover:bg-[100%_0] cursor-pointer"
                >
                  View More Capabilities
                </Button>
              </>
            )}
          </motion.div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Capabilities;
