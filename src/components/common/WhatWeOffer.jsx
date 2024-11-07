import React, { useState } from "react";

// Main DataAnalyticsWhatWeOffer component
const DataAnalyticsWhatWeOffer = ({
  heading1,
  pageDescription,
  offerItems,
}) => {
  const [content, setContent] = useState(offerItems[0].key);

  // OfferItem component to handle individual offers
  const OfferItem = ({ title, isActive, onClick }) => {
    return (
      <button
        onClick={onClick}
        className={`${isActive ? "bg-p btn" : "font-dark btn btn-shade"}`}
      >
        {title}
      </button>
    );
  };

  const handleButtonClick = (key) => {
    setContent(key);
  };

  return (
    <div className="bg-white w-full offer-bg-height">
      <h2 className="font-dark text-1xl md:text-3xl lg:text-4xl text-center mt-20 mb-4 z-10 leading-tight">
        {heading1}
      </h2>
      <div className="font-dark flex justify-center z-10">
        <p className="text-center offer-description text-sm md:text-1xl">
          {pageDescription}
        </p>
      </div>
      <div>
        <div className="btn-container flex justify-center">
          {offerItems.map((item) => (
            <OfferItem
              key={item.key}
              title={item.title}
              isActive={content === item.key}
              onClick={() => handleButtonClick(item.key)}
            />
          ))}
        </div>
        <div className="offer-container">
          <div className="offer-content">
            {offerItems.map(
              (item) =>
                content === item.key && <p key={item.key}>{item.description}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataAnalyticsWhatWeOffer;
