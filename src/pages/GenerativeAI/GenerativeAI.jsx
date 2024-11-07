import React from "react";
import Banner from "../../components/common/Banner";

import CaseStudy from "../../components/common/CaseStudy";

import WhatWeOffer from "../../components/common/WhatWeOffer";
import TechnologyExpertise from "../../components/common/TechnologyExpertise";
import WhyChooseUs from "../../components/common/WhyChooseUs";
import {
  dataAnalyticsBannerProps,
  dataAnalyticsCaseStudyProps,
  
  dataAnalyticsWhatWeOfferProps,
  dataAnalyticsTechnologyExpertiseProps,
  whyChooseUsProps
} from './props';

export default function GenerativeAI() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col font-sans relative">
      <div className="flex-1 flex flex-col mt-[20vh] lg:mt-[25vh]">
        <Banner {...dataAnalyticsBannerProps} />
        
        <CaseStudy {...dataAnalyticsCaseStudyProps} />
        
        <WhatWeOffer {...dataAnalyticsWhatWeOfferProps} />
        <TechnologyExpertise
          {...dataAnalyticsTechnologyExpertiseProps}
        />
        <WhyChooseUs {...whyChooseUsProps} />
      </div>
    </div>
  );
}
