import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import consulting from '../../assets/images/SVG/About Us/consulting.svg';
import it from '../../assets/images/SVG/About Us/it.svg';
import transformation from '../../assets/images/SVG/About Us/transformation.svg';
import ai from '../../assets/images/SVG/About Us/ai.svg';

const timelineData = [
  { year: 2004, title: "Consulting", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", image: consulting },
  { year: 2017, title: "IT Services", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", image: it },
  { year: 2020, title: "Digital Transformation", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", image: transformation },
  { year: 2024, title: "Gen AI Strategy", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", image: ai },
];

const variants = {
  enter: (direction) => ({
    y: direction > 0 ? '100%' : '-100%',
    opacity: 0,
  }),
  center: {
    y: 0,
    opacity: 1,
  },
  exit: (direction) => ({
    y: direction < 0 ? '100%' : '-100%',
    opacity: 0,
  }),
};

const TimelineComponent = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const containerRef = useRef(null);
  const prevIndexRef = useRef(activeIndex);

  const handleScroll = useCallback(() => {
    const container = containerRef.current;
    if (!container) return;

    const sections = container.querySelectorAll('.timeline-section');
    const viewportHeight = window.innerHeight;
    const viewportCenter = viewportHeight / 2;
    const threshold = viewportHeight * 0.1;

    sections.forEach((section, index) => {
      const rect = section.getBoundingClientRect();
      const sectionCenter = rect.top + rect.height / 2;

      if (Math.abs(sectionCenter - viewportCenter) < threshold) {
        if (index !== activeIndex) {
          setDirection(index > prevIndexRef.current ? 1 : -1);
          setActiveIndex(index);
          prevIndexRef.current = index;
        }
      }
    });
  }, [activeIndex]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return (
    <div ref={containerRef} className="flex min-h-screen bg-black text-white">
      <div className="w-1/5 relative pt-[20%] pb-[16%]">
        <div className="sticky top-1/2 transform -translate-y-1/2 h-32 overflow-hidden">
          <div className="relative h-full flex items-center">
            <div className="absolute left-0 top-1/2 w-1/2 h-px bg-white"></div>
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={activeIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ type: 'spring', stiffness: 300, damping: 30, duration: 0.8 }}
                className="text-8xl font-extralight absolute right-0"
              >
                {(activeIndex + 1).toFixed(1)}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
      <div className="w-3/5 flex flex-col justify-center items-center text-center">
        {timelineData.map((item, index) => (
          <div key={index} className="timeline-section min-h-screen flex flex-col justify-center items-center px-8 py-20 relative">
          <div className="relative flex flex-col items-center">
            {index !== 0 && <><div className="h-20 w-px bg-white opacity-20"></div><div className="w-2 h-2 bg-white rounded-full my-4"></div></> }
            
            <div className="text-lg mb-3">Year {item.year}</div>
            <h2 className="text-6xl font-light mb-6">{item.title}</h2>
            <p className="text-base leading-relaxed opacity-70 max-w-3xl">{item.content}</p>
          </div>
          
              
            
          </div>
        ))}
      </div>
      <div className="w-1/3 relative pt-[20%]">
        <div className="sticky top-1/2 transform -translate-y-1/2 flex justify-center items-center h-96 w-full overflow-hidden">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={activeIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ type: 'spring', stiffness: 400, damping: 60, duration: 1.6 }}
              className="w-96 h-96 overflow-hidden absolute"
              style={{
                borderTopLeftRadius: '90px',
                borderTopRightRadius: '0px',
                borderBottomLeftRadius: '0px',
                borderBottomRightRadius: '90px',
              }}
            >
              <img
                src={timelineData[activeIndex].image}
                alt={`Image ${activeIndex + 1}`}
                className="w-full h-full object-cover"
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default TimelineComponent;