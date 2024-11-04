import React from "react";
import DataAnalyticsBanner from "./DataAnalyticsBanner";
import DarkLight from "./DarkLight";
import DataAnalyticsCaseStudy from "./DataAnalyticsCaseStudy";
import DataAnalyticsVideoSection from "./DataAnalyticsVideoSection";
import DataAnalyticsWhatWeOffer from "./DataAnalyticsWhatWeOffer";
import DataAnalyticsTechnologyExpertise from "./DataAnalyticsTechnologyExpertise";
import WhyChooseUs from "./WhyChooseUs";

export default function ContactForm() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col font-sans relative">
      <div className="flex-1 flex flex-col mt-[20vh] lg:mt-[25vh]">
        {/* // info: Each section Each component */}
        <DataAnalyticsBanner/>
        {/* <DarkLight /> */}
        <DataAnalyticsCaseStudy />
        <DataAnalyticsVideoSection />
        <DataAnalyticsWhatWeOffer/>
        <DataAnalyticsTechnologyExpertise/>
        <WhyChooseUs/>
      </div>
    </div>
  );
}
