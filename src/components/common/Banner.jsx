import React from "react";


const Banner = ({ heading, topic, description }) => {
    return (
        <div className=" flex flex-col items-center justify-center px-4">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extralight text-center mb-4 z-10 leading-tight">
                {heading}
            </h1>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extralight text-center mb-4 z-10 leading-tight text-gray-400">
                {topic}
            </h1>
            <p className="bannerDescription text-center mt-[10vh] w-full text-sm md:text-1xl font-light">
                {description}
            </p>
        </div>
    );
};
export default Banner;
