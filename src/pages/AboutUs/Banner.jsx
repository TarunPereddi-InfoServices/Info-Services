import React from 'react'

export default function Banner() {
  return (
    <div className="w-full mx-auto min-h-screen flex items-center bg-[radial-gradient(circle_at_50%_90%,_#2B67E9_-100%,_transparent_40%)] text-white py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto text-center relative z-10">
        <h1 className="text-5xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl font-thin tracking-wider mb-4 sm:mb-6 md:mb-8 leading-tight sm:leading-tight md:leading-tight lg:leading-loose">
          Discover <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-purple-600">Info Services</span>: Your Trusted Partner for Innovative IT Solutions
        </h1>
        <p className="mt-4 sm:mt-6 md:mt-8 text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 max-w-sm sm:max-w-xl md:max-w-3xl lg:max-w-4xl mx-auto font-thin leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
        </p>
      </div>
      <div className="hidden lg:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[20vh] w-1/2 h-[100vw] bg-black rounded-l-full origin-center rotate-90 -z-3 ">
      </div>
    </div>
  )
}