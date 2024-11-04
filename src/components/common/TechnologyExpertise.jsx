import React from "react";

const TechnologyExpertise = ({
  heading1,
  description1,
  description2,
  techStackImage,
}) => {
  // info: this as well text and alignment
  return (
    <div className="flex flex-col brTLR-40 techno-expertise-container">
      <div className=" flex flex-col items-center justify-center px-4">
        <h2 className=" text-2xl md:text-4xl lg:text-5xl text-center mt-20 mb-4 z-10 leading-tight ">
          {heading1}
        </h2>
        <div className=" flex justify-center z-10 ">
          <p className="text-center techno-description text-sm md:text-1xl ">
            {description1}
            <br />
            {description2}
          </p>
        </div>
        <img src={techStackImage} className="tech-stack-img" />
      </div>
    </div>
  );
};
export default TechnologyExpertise;
