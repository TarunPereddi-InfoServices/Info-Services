import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import image11 from '../../assets/images/CaseStudies/image1/01.svg';
import image12 from '../../assets/images/CaseStudies/image1/02.svg';
import image13 from '../../assets/images/CaseStudies/image1/03.svg';
import image14 from '../../assets/images/CaseStudies/image1/04.svg';

import image21 from '../../assets/images/CaseStudies/image2/01.svg';
import image22 from '../../assets/images/CaseStudies/image2/02.svg';
import image23 from '../../assets/images/CaseStudies/image2/03.svg';
import image24 from '../../assets/images/CaseStudies/image2/04.svg';

import image31 from '../../assets/images/CaseStudies/image3/01.svg';
import image32 from '../../assets/images/CaseStudies/image3/02.svg';
import image33 from '../../assets/images/CaseStudies/image3/03.svg';
import image34 from '../../assets/images/CaseStudies/image3/04.svg';

import image41 from '../../assets/images/CaseStudies/image4/01.svg';
import image42 from '../../assets/images/CaseStudies/image4/02.svg';
import image43 from '../../assets/images/CaseStudies/image4/03.svg';
import image44 from '../../assets/images/CaseStudies/image4/04.svg';

import image51 from '../../assets/images/CaseStudies/image5/01.svg';
import image52 from '../../assets/images/CaseStudies/image5/02.svg';
import image53 from '../../assets/images/CaseStudies/image5/03.svg';
import image54 from '../../assets/images/CaseStudies/image5/04.svg';

import image61 from '../../assets/images/CaseStudies/image6/01.svg';
import image62 from '../../assets/images/CaseStudies/image6/02.svg';
import image63 from '../../assets/images/CaseStudies/image6/03.svg';
import image64 from '../../assets/images/CaseStudies/image6/04.svg';

const caseStudiesData  = [
  {
    title: "Ad-Streaming Analytics",
    description: "It has continuously improved its product offerings and services across generations.",
    images: [image11, image12, image13, image14],
  },
  {
    title: "Powering iGuroo's EdTech dream",
    description: "It has continuously improved its product offerings and services across generations.",
    images: [image21, image22, image23, image24]
  },
  {
    title: "IoT platform adoption and migration",
    description: "It has continuously improved its product offerings and services across generations.",
    images: [image31, image32, image33, image34]
  },
  {
    title: "Content Knowledge Graph (CKG)",
    description: "It has continuously improved its product offerings and services across generations.",
    images: [image41, image42, image43, image44]
  },
  {
    title: "Implementation of test automation framework",
    description: "It has continuously improved its product offerings and services across generations.",
    images: [image51, image52, image53, image54]
  },
  {
    title: "KCF envisions a world where its customers have...",
    description: "It has continuously improved its product offerings and services across generations.",
    images: [image61, image62, image63, image64]
  }
];
const CaseStudyCard = ({ title, description, images, isWide,index }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  // Determine if the animation should be bottom-to-top or top-to-bottom
  const isBottomToTop = index === 1 || index === 3; // 2nd and 4th cards
  return (
    <motion.div 
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 2 }}
      className={`relative overflow-hidden rounded-lg mx-auto ${
        isWide ? 'w-full md:w-[66%]' : 'w-full md:w-[32%]'
      } h-[50vh] bg-[#151515]`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-full overflow-hidden group">
        {isWide ? (
          // Wide cards (1st and last) use the original fade animation
          <div className="slide">
            <AnimatePresence initial={false}>
              <motion.img
                key={currentImageIndex}
                src={images[currentImageIndex]}
                alt={title}
                className={`absolute w-full h-full object-cover transition-all duration-500 ease-in-out ${
                  isHovered ? 'brightness-50' : 'brightness-40 grayscale'
                }`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 2 }}
              />
            </AnimatePresence>
          </div>
        ) : (
          // Small cards use directional sliding animation
          <div className="relative h-full">
            {images.map((img, imgIndex) => (
              <motion.img
                key={imgIndex}
                src={img}
                alt={title}
                className={`absolute w-full h-full object-cover transition-all duration-500 ease-in-out ${
                  isHovered ? 'brightness-50' : 'brightness-40 grayscale'
                }`}
                style={{
                  top: isBottomToTop 
                    ? `${imgIndex * 100}%` 
                    : `-${(images.length - 1 - imgIndex) * 100}%`,
                }}
                animate={{
                  y: isBottomToTop
                    ? `-${currentImageIndex * 100}%`
                    : `${currentImageIndex * 100}%`,
                }}
                transition={{
                  duration: 0.5,
                  ease: "easeInOut"
                }}
              />
            ))}
          </div>
        )}
      </div>
      {/* Dark Overlay */}
      <div 
        className={`absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent transition-opacity duration-300 ${
          isHovered ? 'opacity-70' : 'opacity-80'
        }`}
      ></div>
      {/* Text Content */}
      <div className="absolute inset-x-0 bottom-0 p-6 flex flex-col justify-end min-h-[40%] z-10">
        <h3 className="text-s underline underline-offset-1 font-normal mb-2 text-[#DFDFDF] opacity-70 ">Case Studies</h3>
        <h2 className="text-2xl font-sans font-bold mb-2 bg-gradient-to-r from-[#684EB2] via-[#8F23AE] to-[#684EB2] inline-block text-transparent bg-clip-text hover:bg-gradient-to-l">{title}</h2>
        <p className="text-base text-[#FFFFFF] font-normal opacity-80 hover:opacity-100  transition duration-300 ease-in-out ${
          isWide ? 'w-[70%]' : 'w-full'
        } line-clamp-3`}>">{description}</p>
      </div>
    </motion.div>
  );
};
const CaseStudies = () => {
  return (
    <div className="bg-[#151515] min-h-screen p-8">
      <div className="max-w-7xl mx-auto">
        {/* First Row */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          {caseStudiesData.slice(0, 3).map((study, index) => (
            <CaseStudyCard key={index} {...study} isWide={index === 0} index={index} />
          ))}
        </div>
        {/* Second Row */}
        <div className="flex flex-col md:flex-row gap-4">
          {caseStudiesData.slice(3, 6).map((study, index) => (
            <CaseStudyCard key={index} {...study} isWide={index === 2}index={index + 3}  />
          ))}
        </div>
      </div>
    </div>
  );
};
export default CaseStudies;
