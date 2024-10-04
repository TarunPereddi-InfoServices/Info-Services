import React, { useState, useEffect, useCallback } from 'react';
import Carousel1 from '../../assets/images/carousel/Carousel1.png';
import Carousel2 from '../../assets/images/carousel/Carousel2.png';
import Carousel3 from '../../assets/images/carousel/Carousel3.png';
import Carousel4 from '../../assets/images/carousel/Carousel4.png';
const Landing = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const carouselData = [
    { image: Carousel1,
      title: "Transformation Excellence",
      subtitle: "Pioneering Change and Empowering Businesses to Achieve Unparalleled Growth, Innovation, and Sustainable Success in a Dynamic World.",
      type: "",
      buttonText: ""
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
    setCurrentSlide((prevSlide) => (prevSlide + 1) % carouselData.length);
  }, [carouselData.length]);
  const goToSlide = (index) => {
    setCurrentSlide(index);
  };
  useEffect(() => {
    const timer = setInterval(goToNextSlide, 2000); // Change interval to 2000ms (2 seconds)
    return () => clearInterval(timer);
  }, [goToNextSlide]);
  return (
    <div className='card'>
      <div className="relative h-screen w-full overflow-hidden">
        <div className="h-full w-full relative">
          {carouselData.map((item, index) => (
            <div
              key={index}
              className={`absolute top-0 left-0 h-full w-full transition-opacity duration-500 ${
                currentSlide === index ? 'opacity-100 z-10' : 'opacity-0 z-0'
              }`}
            >
              <img 
                src={item.image}
                alt={`Carousel image ${index + 1}`}
                className="h-full w-full object-cover"
              />
              {index === 0 ? (
                <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-4">
                  <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-center heading_font">{item.title}</h1>
                  <p className="text-base sm:text-lg md:text-xl mb-8 text-center max-w-2xl">{item.subtitle}</p>
                </div>
              ) : (
                <div className="absolute inset-0 flex flex-col justify-center items-start w-full sm:w-4/6 p-8 sm:p-12 md:p-16">
                  {item.type && <span className="bg-gradient-to-r from-[#684EB2] via-[#8F23AE] to-[#684EB2] bg-clip-text text-transparent font-semibold mb-2 heading_font text-sm sm:text-base md:text-lg">{item.type}</span>}
                  <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold mb-4 heading_font">{item.title}</h2>
                  <p className="text-white mb-6 max-w-2xl heading_font text-sm sm:text-base md:text-lg">{item.subtitle}</p>
                  {item.buttonText && (
                    <button className="bg-transparent border border-white text-white px-4 py-2 sm:px-6 sm:py-2 rounded-full hover:bg-white hover:text-black transition-colors text-sm sm:text-base">
                      {item.buttonText}
                    </button>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="absolute bottom-8 left-0 right-0 flex justify-center items-center z-20 ">
          <div className="flex justify-center items-center space-x-2 w-full max-w-xs mx-auto overflow-hidden">
            {carouselData.map((_, i) => (
              <button
                key={i}
                onClick={() => goToSlide(i)}
                className={`w-6 sm:w-8 md:w-16 h-1 ${currentSlide === i ? 'bg-white' : 'bg-gray-400'} rounded-full transition-colors`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Landing;
