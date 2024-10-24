
import React, { useState } from "react";

const DataAnalyticsWhatWeOffer = () => {
  const [content, setContent] = useState('StreamlinedDataIntegration');
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
          <button onClick={() => setContent('StreamlinedDataIntegration')} className={`${content === 'StreamlinedDataIntegration' ? 'bg-class btn':'font-dark btn btn-shade'}`}>Streamlined Data Integration</button>
          <button onClick={() => setContent('AdvancedDataProcessing')} className={`${content === 'AdvancedDataProcessing' ? 'bg-class btn':'font-dark btn btn-shade'}`}>Advanced Data Processing</button>
          <button onClick={() => setContent('PredictiveAnalytics')} className={`${content === 'PredictiveAnalytics' ? 'bg-class btn':'font-dark btn btn-shade'}`}>Predictive Analytics</button>
        </div>
        <div className="offer-container">
          <div className="offer-content">
            {content === "StreamlinedDataIntegration" && <p>
              Easily integrate data from several sources with our solutions.
              We eliminate data silos and harmonize databases, applications,
              and platforms to provide you a single perspective of your data
              landscape. Our sophisticated integration frameworks enable
              real-time data interchange, enabling organizations to make
              educated decisions based on precise and complete information.
            </p>}
            {content === "AdvancedDataProcessing" && <p>
              Use advanced processing methods to quickly and accurately cleanse, transform, and analyze large amounts of data. Our powerful processing
              capabilities help organizations find hidden patterns and connections in complicated datasets that drive business results. We help companies maximize data value while operating efficiently and agilely with optimized data workflows and scalable processing infrastructures.
            </p>}
            {content === "PredictiveAnalytics" && <p>Predict future trends, behaviours, and consequences with precision and certainty using predictive analytics. We use historical data and powerful
              statistical methods to find patterns, predict changes, and limit risks with our predictive modelling algorithms. Predictive analytics helps organizations
              optimize resource allocation, manage risks, and seize opportunities, enabling sustainable growth and competitive advantage in dynamic marketplaces.
            </p>}
          </div>
        </div>
      </div>
    </div>
  );
};
export default DataAnalyticsWhatWeOffer;