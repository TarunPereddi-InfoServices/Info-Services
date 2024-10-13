import React, { useState, useEffect, useCallback }  from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Rectangle1 from '../../assets/images/Industry/Rectangle1.png';
import Rectangle2 from '../../assets/images/Industry/Rectangle2.png';
import Rectangle3 from '../../assets/images/Industry/Rectangle3.png';
import Rectangle4 from '../../assets/images/Industry/Rectangle4.png';
import Rectangle5 from '../../assets/images/Industry/Rectangle5.png';
import Rectangle6 from '../../assets/images/Industry/Rectangle6.png';
import Rectangle7 from '../../assets/images/Industry/Rectangle7.png';
const industries = [
  {
    title: "Media & Entertainment",
    image: Rectangle1,
    description: "Lorem ipsum dolor sit amet consectetur. Odio cursus tortor id lectus enim ultricies lectus amet. Id eu nunc non risus diam mi. Eu pharetra eu ornare pellentesque et ultrices ut tellus. Purus risus mauris aliquam turpis tristique et id pellentesque elementum. Non sagittis neque nibh mauris ut diam turpis habitant. Quis laoreet vitae id egestas mattis vel.",
  },
  {
    title: "Supply Chain",
    image: Rectangle2,
    description: "Lorem ipsum dolor sit amet consectetur. Odio cursus tortor id lectus enim ultricies lectus amet. Id eu nunc non risus diam mi. Eu pharetra eu ornare pellentesque et ultrices ut tellus. Purus risus mauris aliquam turpis tristique et id pellentesque elementum. Non sagittis neque nibh mauris ut diam turpis habitant. Quis laoreet vitae id egestas mattis vel.",
  },
  {
    title: "Manufacturing",
    image: Rectangle3,
    description: "Lorem ipsum dolor sit amet consectetur. Odio cursus tortor id lectus enim ultricies lectus amet. Id eu nunc non risus diam mi. Eu pharetra eu ornare pellentesque et ultrices ut tellus. Purus risus mauris aliquam turpis tristique et id pellentesque elementum. Non sagittis neque nibh mauris ut diam turpis habitant. Quis laoreet vitae id egestas mattis vel.",
  },
  {
    title: "Retail",
    image: Rectangle4,
    description: "Lorem ipsum dolor sit amet consectetur. Odio cursus tortor id lectus enim ultricies lectus amet. Id eu nunc non risus diam mi. Eu pharetra eu ornare pellentesque et ultrices ut tellus. Purus risus mauris aliquam turpis tristique et id pellentesque elementum. Non sagittis neque nibh mauris ut diam turpis habitant. Quis laoreet vitae id egestas mattis vel.",
  },
  {
    title: "Automotive",
    image: Rectangle5,
    description: "Lorem ipsum dolor sit amet consectetur. Odio cursus tortor id lectus enim ultricies lectus amet. Id eu nunc non risus diam mi. Eu pharetra eu ornare pellentesque et ultrices ut tellus. Purus risus mauris aliquam turpis tristique et id pellentesque elementum. Non sagittis neque nibh mauris ut diam turpis habitant. Quis laoreet vitae id egestas mattis vel.",
  },
  {
    title: "Banking",
    image: Rectangle6,
    description: "Lorem ipsum dolor sit amet consectetur. Odio cursus tortor id lectus enim ultricies lectus amet. Id eu nunc non risus diam mi. Eu pharetra eu ornare pellentesque et ultrices ut tellus. Purus risus mauris aliquam turpis tristique et id pellentesque elementum. Non sagittis neque nibh mauris ut diam turpis habitant. Quis laoreet vitae id egestas mattis vel.",
  },
  {
    title: "Managed Health Care",
    image: Rectangle7,
    description: "Lorem ipsum dolor sit amet consectetur. Odio cursus tortor id lectus enim ultricies lectus amet. Id eu nunc non risus diam mi. Eu pharetra eu ornare pellentesque et ultrices ut tellus. Purus risus mauris aliquam turpis tristique et id pellentesque elementum. Non sagittis neque nibh mauris ut diam turpis habitant. Quis laoreet vitae id egestas mattis vel.",
  },
];
const IndustryCard = ({ title, image, description,isMobile ,currentSlide, goToSlide }) => {
  if (isMobile) {
    return (
      <motion.div
      className="absolute top-0 left-0 w-full h-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="h-full flex flex-col">
        {/* Grey background at the top */}
        <div className=" relative flex-1 bg-[#151515]" />
        {/* Main content container */}
        <div className="relative flex-1 bg-[#151515]">
          {/* Background image with gradient overlay */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${image})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
          {/* Content */}
          <div className="relative h-full flex flex-col justify-center items-center px-8 text-center">
            <h3 className="text-3xl font-light text-white mb-6">{title}</h3>
            <p className="text-white/90 text-sm leading-relaxed mb-8">
              {description}
            </p>
            <button className="self-center border border-white text-white rounded-full px-8 py-2.5 text-sm">
              View More
            </button>

            <div className="absolute bottom-16 left-0 right-0 z-30">
              <div className="flex justify-center items-center space-x-3  px-6">
                {industries.map((_, i) => (
              <button
                key={i}
                onClick={() => goToSlide(i)}
                className={`w-12 h-[2px] transition-all ${
                  currentSlide === i ? 'bg-white' : 'bg-gray-600'
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
          </div>
        </div>
      </div>
    </motion.div>
    );
  }
  return (
    <motion.div
      className="relative h-[650px] w-[180px] overflow-hidden group"
      whileHover={{ width: 310 }}
      transition={{ duration: 0.9, ease:  [0.25, 0.8, 0.5, 1] }}
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0 grayscale group-hover:grayscale-0 transition-all duration-500"
        style={{ backgroundImage: `url(${image})` }}
      />
      {/* Title animation - sliding left and disappearing */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center z-40"
        initial={{ x: 0, opacity: 1 }}
        whileHover={{ x: -100, opacity: 0 }}
        transition={{ duration: 0.9 }}
      >
        <h3 className="text-white text-2xl font-bold transform -rotate-90 whitespace-nowrap">
          {title}
        </h3>
      </motion.div>
      <motion.div
        className="absolute bottom-10 w-full px-4 pb-6 pt-2 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 flex flex-col items-center"
        initial={{ y: 50 }}
        whileHover={{ y: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Blur effect */}
        <div className="absolute inset-0 backdrop-blur-md bg-gradient-to-t from-[rgba(0,0,0,0.7)] to-transparent" />
        <div className="relative text-white text-center z-10">
          <h3 className="text-2xl font-bold">{title}</h3>
          <p>{description}</p>
        </div>
      </motion.div>
    </motion.div>
  );
};
const Industry = () => {
          const [isMobile, setIsMobile] = useState(false);
          const [currentSlide, setCurrentSlide] = useState(0);
          useEffect(() => {
            const handleResize = () => {
              setIsMobile(window.innerWidth < 768);
            };
            handleResize();
            window.addEventListener('resize', handleResize);
            return () => window.removeEventListener('resize', handleResize);
          }, []);
          const goToNextSlide = useCallback(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % industries.length);
          }, []);
          const goToSlide = (index) => {
            setCurrentSlide(index);
          };
          useEffect(() => {
            if (isMobile) {
              const timer = setInterval(goToNextSlide, 2000);
              return () => clearInterval(timer);
            }
          }, [isMobile, goToNextSlide]);
          if (isMobile) {
            return (
              <div className="bg-[#151515] h-screen relative overflow-hidden">
              <div className="pt-12 px-6 mb-8">
              <h1 className="text-[32px] font-extralight text-white">
                Industries
                </h1>
                </div>
                <div className="relative h-[calc(50vh-140px)]">
                <AnimatePresence initial={false} mode="wait">
                <IndustryCard 
                  key={currentSlide} 
                  {...industries[currentSlide]} 
                  isMobile={isMobile} 
                  currentSlide={currentSlide}
                  goToSlide={goToSlide}
            />
          </AnimatePresence>
        </div>
        <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between px-4 z-30">
          <button 
            onClick={() => goToSlide((currentSlide - 1 + industries.length) % industries.length)} 
            className="text-white/70 hover:text-white transition-colors"
            aria-label="Previous slide"
          >
          </button>
          <button 
            onClick={() => goToSlide((currentSlide + 1) % industries.length)} 
            className="text-white/70 hover:text-white transition-colors"
            aria-label="Next slide"
          >
          </button>
        </div>
        </div>
    );
          }
  return (
<div className="sticky top-0 z-0 h-screen overflow-hidden">
    <div className="bg-[#151515] min-h-screen flex flex-col items-center justify-center p-8 rounded-t-[50px]">
      <h1 className="text-6xl font-extralight text-white mb-4 text-center">Industries</h1>
      <p className="text-base font-normal text-[#878787] mb-8 text-center">Crafting responsive designs for user engagement</p>
      <div className="flex justify-center space-x-4 overflow-x-auto pb-4">
        {industries.map((industry, index) => (
          <IndustryCard key={index} {...industry} />
        ))}
      </div>
    </div>
</div>
  );
};
export default Industry;
