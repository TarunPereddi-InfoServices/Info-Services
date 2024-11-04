import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Disneylogo from '../../assets/images/logo/Disneylogo.png';
import kcflogo from '../../assets/images/logo/kcflogo.png';
import ciscologo from '../../assets/images/logo/ciscologo.png';
import Vlocitylogo from '../../assets/images/logo/Vlocitylogo.png';
import TDAmeritradelogo from '../../assets/images/logo/TDAmeritradelogo.png';

const testimonials = [
  {
    name: 'Disney',
    logo: Disneylogo,
    text: "Info Services' world class Big Data solution offerings & scalable development solutions enabled us to meet our needs in building our digital transformation capabilities.",
  },
  {
    name: 'KCF',
    logo: kcflogo,
    text: "Info Services has helped us assess and improve our platform and engineering organization. Their insights and recommendations for driving meaningful change have been precious to us.",
  },
  {
    name: 'CISCO',
    logo: ciscologo,
    text: "Info Services' singular focus to redefine CPQ development and solution consulting for our sales cycle enabled us to become a 'capability' driven organization.",
  },
  {
    name: 'VELOCITY',
    logo: Vlocitylogo,
    text: "Info Services built and ran a digital transformation initiative from purpose fit assessment to capability development that helped vastly improve our DevOps strategy.",
  },
  {
    name: 'TD AMERITRADE',
    logo: TDAmeritradelogo,
    text: "Info Services' ability to build 'Out of the Box' solutions as well as custom solutions for our Trading Platform, provided us the agility required to ensure a great user experience.",
  },
];

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  if (!isMobile) {
    return (

      <div className="flex relative justify-center min-h-screen bg-[#151515] text-white">
        <div className="flex-1 min-h-screen p-10 space-y-20 scrollbar-hide pt-32 no-scrollbar">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className={`gradient-border w-[563px] p-14 bg-[#1C1C1C] rounded-2xl ${
                index % 2 === 1 ? 'ml-auto' : 'mr-auto'
              }`}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex justify-between items-center mb-4">
                <h5 className="text-4xl font-light">{testimonial.name}</h5>
                <img src={testimonial.logo} alt={`${testimonial.name} logo`} className="w-16 h-16 rounded-full" />
              </div>
              <p className="text-lg font-light">{testimonial.text}</p>
            </motion.div>
          ))}
        </div>
        <div className='w-1/2 relative'>
          <div className="flex flex-col sticky top-0 p-40">
            <motion.h2
              className="text-7xl font-light leading-tight"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Hear it from our Clients
            </motion.h2>
            <motion.p
              className="mt-6 text-xl font-light max-w-[80%]"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </motion.p>
          </div>
        </div>
      </div>
     
    );
  }

  return (
    <div className=" sticky top-[-10%] z-0 min-h-screen overflow  bg-[#151515] relative  flex flex-col min-h-screen text-white px-6 py-12 rounded-t-[50px] ">
      <div className="flex flex-col  mb-12 px-9">
        <motion.h2
          className="text-4xl font-light leading-tight mb-4  text-center "
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Hear it from our Clients
        </motion.h2>
        <motion.p
          className="text-base font-light "
          style={{ maxWidth: "650px" }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </motion.p>
      </div>
      <div className="flex-grow flex flex-col justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="bg-[#1C1C1C] rounded-3xl p-8 mb-12 lg:border-none border border-white"
          >
            <div className="flex flex-col mb-6">
              <img 
                src={testimonials[currentIndex].logo} 
                alt={`${testimonials[currentIndex].name} logo`} 
                className="w-16 h-16 rounded-full mb-4"
              />
              <h5 className="text-3xl font-light">{testimonials[currentIndex].name}</h5>
            </div>
            <p className="text-sm font-light">{testimonials[currentIndex].text}</p>
          </motion.div>
        </AnimatePresence>
        <div className="flex justify-center space-x-4">
          <button
            onClick={prevSlide}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors border border-white lg:border-none"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors border border-white lg:border-none"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>

  );
};

export default Testimonial;