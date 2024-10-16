
import React from "react";

const DataAnalyticsWhatWeOffer = () => {
  // info: this as well text and alignment
  return (
    <div className="bg-white w-full offer-bg-height">
          <h2 className="font-dark text-1xl md:text-3xl lg:text-4xl text-center mt-20 mb-4 z-10 leading-tight ">
            What We offer
          </h2>
          <div className="font-dark flex justify-center z-10 ">
            <p className="text-center offer-description text-sm md:text-1xl ">
              Elevate Your Data Capabilities with Innovative Data Engineering
              and Analytics Solutions
            </p>
          </div>
          <div>
            <div className="btn-container flex justify-center">
              <div className="bg-p btn">Streamlined Data Integration</div>
              <div className="font-dark btn">Advanced Data Processing</div>
              <div className="font-dark btn">Predictive Analytics</div>
            </div>
            <div className="offer-container">
              <div className="offer-content">
                <p className="text-center">
                  Easily integrate data from several sources with our solutions.
                  We eliminate data silos and harmonize databases, applications,
                  and platforms to provide you a single perspective of your data
                  landscape. Our sophisticated integration frameworks enable
                  real-time data interchange, enabling organizations to make
                  educated decisions based on precise and complete information.
                </p>
              </div>
            </div>
          </div>
        </div>
  );
};
export default DataAnalyticsWhatWeOffer;