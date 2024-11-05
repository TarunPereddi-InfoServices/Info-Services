import React from "react";
import { useParams } from 'react-router-dom';
import Data from './data.json';

export default function TechnologyPage() {
  const { technology } = useParams();
  const TechnologyData = Data.TechnologyData[technology];

  if (!TechnologyData) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center pt-20">
        <h1 className="text-2xl">Technology not found</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white flex flex-col font-sans relative">
      {/* Header Spacing */}
      <div className="h-20"></div>
      
      <div className="flex-1 flex flex-col mt-[10vh] px-4 md:px-8 max-w-6xl mx-auto w-full">
        {/* Header Section */}
        <div className="mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#5A7FCC] via-[#B93AD8] to-[#8F6EDB] bg-clip-text text-transparent">
            {TechnologyData.title}
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl leading-relaxed">
            {TechnologyData.description}
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Features Section */}
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-8 shadow-2xl">
            <h2 className="text-2xl font-bold mb-6 text-[#5A7FCC]">Features</h2>
            <ul className="space-y-4">
              {TechnologyData.features.map((feature, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <span className="text-[#B93AD8] mt-1 text-xl">•</span>
                  <span className="text-gray-300">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Use Cases Section */}
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-8 shadow-2xl">
            <h2 className="text-2xl font-bold mb-6 text-[#B93AD8]">Use Cases</h2>
            <ul className="space-y-4">
              {TechnologyData.useCases.map((useCase, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <span className="text-[#5A7FCC] mt-1 text-xl">•</span>
                  <span className="text-gray-300">{useCase}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}