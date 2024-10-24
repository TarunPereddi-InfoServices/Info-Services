import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import consulting from '../../assets/images/SVG/About Us/consulting.svg';
import it from '../../assets/images/SVG/About Us/it.svg';
import transformation from '../../assets/images/SVG/About Us/transformation.svg';
import ai from '../../assets/images/SVG/About Us/ai.svg';
import dkdash from '../../assets/images/SVG/About Us/dk-dash-line.svg';
import dash from '../../assets/images/SVG/About Us/dash-line.svg';

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

const MobileTimelineComponent = () => {
  return (
    <div className="bg-black sticky top-[-120vh] text-white min-h-screen mt-[6rem] p-4">
      {timelineData.map((item, index) => (
        <motion.div
          key={item.year}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
          className="mb-12 relative"
        >
          <div className='flex flex-col justify-center align-center'>
          <div className={`flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} items-start md:items-stretch justify-between mb-4`}>
            <div className={`flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} mb-4 md:mb-0 md:w-1/2 justify-between relative`}>
              <div className='w-1/2 p-5'>
                <div className="text-sm text-gray-400">Year {item.year}</div>
                <h2 className="text-3xl font-light mb-2">{item.title}</h2>
                <p className="text-sm leading-relaxed opacity-70">{item.content}</p>
              </div>
              <div className='w-1/2 p-5 flex flex-col'>
              
            <div className="w-full md: h-40 overflow-hidden" style={{
              borderTopLeftRadius: index % 2 === 0 ? '6rem' : '0',
              borderTopRightRadius: index % 2 === 0 ? '0' : '6rem',
              borderBottomLeftRadius: index % 2 === 0 ? '0' : '6rem',
              borderBottomRightRadius: index % 2 === 0 ? '6rem' : '0'
            }}>
              <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
            </div>
            <div className={`text-4xl font-light mt-2 ${index % 2 === 0 ? 'self-start' : 'self-end'}`}>
                {(index + 1).toFixed(1)}
              </div>
          </div>
              
            </div>
            <div className="absolute top-0 bottom-0 w-px border-l border-dashed border-white opacity-20 hidden md:block"
                   style={{ left: index % 2 === 0 ? 'calc(100% + 1rem)' : '-1rem' }}></div>
          </div>
          {index != timelineData.length-1 ? <img src={dash} alt="dash" className='h-[80px]' /> : <></>}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

const DesktopTimelineComponent = () => {
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
    <div ref={containerRef} className="flex  sticky top-[-210vh] min-h-screen  w-screen justify-center  bg-black text-white">
      <div className="w-1/3 relative pt-[20%] pb-[16%]">
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
                className="text-8xl font-extralight absolute left-0 pl-[50%]"
              >
                {(activeIndex + 1).toFixed(1)}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
      <div className="w-1/3 flex flex-col justify-center items-center text-center">
        {timelineData.map((item, index) => (
          <>
          <div key={index} className={`timeline-section flex flex-col justify-center items-end pb-8  relative ${index == 0 ? 'mt-[30vh]' : ''} ${ index == timelineData.length-1 ? 'mb-[35vh]' : ''}`}>
            <div className="relative flex flex-col items-center">
              <div className="text-lg mb-3">Year {item.year}</div>
              <h2 className="text-6xl font-light mb-6">{item.title}</h2>
              <p className="text-base leading-relaxed opacity-70 max-w-3xl">{item.content}</p>
            </div>
          </div>
          {index != timelineData.length-1 ? <img src={dkdash} alt="dash" className='' /> : <></>}
          </>
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
                borderTopLeftRadius: '9rem',
                borderTopRightRadius: '0px',
                borderBottomLeftRadius: '0px',
                borderBottomRightRadius: '9rem',
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

export default function TimelineComponent() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return isMobile ? <MobileTimelineComponent /> : <DesktopTimelineComponent />;
}