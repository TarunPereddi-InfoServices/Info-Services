import React from 'react'
import whoWeAre from '../../assets/images/SVG/InfoPanel/WhoWeAre.svg'
import ourMission from '../../assets/images/SVG/InfoPanel/OurMission.svg'
import ourCoreValues from '../../assets/images/SVG/InfoPanel/OurCoreValues.svg'

const infoPanelData = [
  {
    imageUrl: ourCoreValues,
    title: "Who We Are",
    description: "A modern engineering-led software development company that offers digital transformation, technology and cloud solutions from ideation to execution."
  },
  {
    imageUrl: whoWeAre,
    title: "Our Mission",
    description: "Helping clients innovate at speed, execute at scale and drive real business value with technology. Ensure employees happiness as they are integral part of our business."
  },
  {
    imageUrl: ourMission,
    title: "Our Core Values",
    description: "Remind ourselves do what is right, take ownership, inspire passion, focus on outcomes and fuel innovation while driving amazing outcomes for our clients."
  }
];

export default function Component() {
  return (
    <div className="bg-black text-white p-4 sm:p-8 min-h-screen flex items-center justify-center">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        {infoPanelData.map((panel, index) => (
          <InfoPanel
            key={index}
            imageUrl={panel.imageUrl}
            title={panel.title}
            description={panel.description}
          />
        ))}
      </div>
    </div>
  )
}

function InfoPanel({ imageUrl, title, description }) {
  return (
    <div className="group relative rounded-3xl p-[1px] bg-transparent hover:bg-gradient-to-r from-[#732FFC] via-[#AE3AD9] to-[#FF4CB6]">
      <div className="relative flex flex-col items-center justify-center text-center p-6 sm:p-8 bg-[#151515] rounded-3xl z-10 h-full lg:h-[45vh] transition-all duration-300 group-hover:bg-black opacity-100">
        <img src={imageUrl} alt="" className="mb-4 w-12 h-12" />
        <h2 className="text-xl sm:text-2xl font-light mb-4">{title}</h2>
        <p className="text-gray-400 text-sm sm:text-base">{description}</p>
      </div>
    </div>
  )
}