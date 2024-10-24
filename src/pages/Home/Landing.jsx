import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Carousel1 from '../../assets/images/carousel/Carousel1.png';
import Carousel2 from '../../assets/images/carousel/Carousel2.png';
import Carousel3 from '../../assets/images/carousel/Carousel3.png';
import Carousel4 from '../../assets/images/carousel/Carousel4.png';

const OverlappingCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [previousSlide, setPreviousSlide] = useState(0);

  // Carousel data with updated image sources
  const carouselData = [
    {
      image: Carousel1,
      title: "Transformation Excellence",
      subtitle: "Pioneering Change and Empowering Businesses to Achieve Unparalleled Growth, Innovation, and Sustainable Success in a Dynamic World."
    },
    {
      image: Carousel2,
      title: "Personalized Learning Gets Smarter with AI-powered Solution",
      subtitle: "A Digital Learning Platform sought to enhance its user experience by introducing a personalized learning feature.",
      type: "Case Study",
      buttonText: "Read The Case Study"
    },
    {
      image: Carousel3,
      title: "Evolution of Time to Knowledge",
      subtitle: "A Digital Learning Platform sought to enhance its user experience by introducing a personalized learning feature.",
      type: "Whitepaper",
      buttonText: "Read The Whitepaper"
    },
    {
      image: Carousel4,
      title: "Building an OCR-Based Chatbot with Vertex AI, LangChain, ChromaDB, Gradio, GCS, and multithreading",
      subtitle: "A Digital Learning Platform sought to enhance its user experience by introducing a personalized learning feature.",
      type: "Blog",
      buttonText: "Read the Blog"
    }
  ];

  const goToNextSlide = useCallback(() => {
    setPreviousSlide(currentSlide);
    setCurrentSlide((prevSlide) => (prevSlide + 1) % carouselData.length);
  }, [currentSlide, carouselData.length]);

  const goToSlide = (index) => {
    setPreviousSlide(currentSlide);
    setCurrentSlide(index);
  };

  useEffect(() => {
    const timer = setInterval(goToNextSlide, 5000);
    return () => clearInterval(timer);
  }, [goToNextSlide]);

  const SlideContent = ({ slide, index }) => {
    if (index === 0) {
      return (
        <>
          <img
            src={slide.image}
            alt={`Carousel image ${index + 1}`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-4">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-light mb-4 text-center heading_font">
              {slide.title}
            </h1>
            <p className="text-base mb-8 text-center max-w-xl">
              {slide.subtitle}
            </p>
          </div>
        </>
      );
    }

    return (
      <>
        <img
          src={slide.image}
          alt={`Carousel image ${index + 1}`}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-start w-full sm:w-4/6 p-8 sm:p-12 md:p-16">
          {slide.type && (
            <button className="bg-purple-600 text-white px-6 py-1 rounded-full font-extralight mb-4 text-sm">
              {slide.type}
            </button>
          )}
          <h2 className="text-white text-3xl sm:text-4xl md:text-5xl max-w-[707px] font-normal mb-4 heading_font">
            {slide.title}
          </h2>
          <p className="text-white mb-6 max-w-[800px] heading_font text-sm sm:text-base md:text-base">
            {slide.subtitle}
          </p>
          {slide.buttonText && (
            <button className="bg-transparent border border-white text-white px-4 py-2 sm:px-6 sm:py-2 rounded-full hover:bg-purple-500 hover:border-transparent hover:text-white transition-colors text-sm sm:text-base">
              {slide.buttonText}
            </button>
          )}
        </div>
      </>
    );
  };

  return (
    <div className="sticky top-0 z-0 h-screen">
      {/* Static background layer */}
      <div className="absolute inset-0">
        <SlideContent slide={carouselData[previousSlide]} index={previousSlide} />
      </div>

      {/* Animated overlay layer */}
      <AnimatePresence initial={false}>
        <motion.div
          key={currentSlide}
          className="absolute inset-0"
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          transition={{ type: 'tween', ease: 'easeInOut', duration: 1 }}
          onAnimationComplete={() => setPreviousSlide(currentSlide)}
        >
          <SlideContent slide={carouselData[currentSlide]} index={currentSlide} />
        </motion.div>
      </AnimatePresence>

      {/* Navigation dots */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center items-center z-20">
        <div className="flex justify-center items-center space-x-2 w-full max-w-xs mx-auto overflow-hidden">
          {carouselData.map((_, i) => (
            <button
              key={i}
              onClick={() => goToSlide(i)}
              className={`w-6 sm:w-8 md:w-16 h-1 ${
                currentSlide === i ? 'bg-white' : 'bg-gray-400'
              } rounded-full transition-colors`}
              aria-label={`Go to slide ${i + 1}`}
            >
              <span className="sr-only">Go to slide {i + 1}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OverlappingCarousel;