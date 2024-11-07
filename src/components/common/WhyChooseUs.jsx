import { Button } from "@/components/ui/button";

// Main WhyChooseUs component
const WhyChooseUs = ({ heading1, heading2, info, cardData }) => {
  const formSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
  };
  // IconInfoCard component for each card
  const IconInfoCard = ({ image, title, description }) => {
    return (
      <div className="IconInfocard">
        <div className="front">
          <img src={image} alt={title} />
          <div>{title}</div>
        </div>
        <div className="back">
          <p>{description}</p>
        </div>
      </div>
    );
  };

  return (
    <div className="brTLR-40 flex-1 flex flex-col choose-us-container">
      <div className="flex flex-col items-center justify-center px-4 h-full">
        <h2 className="text-2xl md:text-4xl lg:text-5xl text-center mt-20 mb-4 z-10 leading-tight">
          {heading1}
        </h2>
        <div className="flex mt-10">
          {cardData.map((card, index) => (
            <IconInfoCard
              key={index}
              image={card.image}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
        <div className="flex mt-10">
          <div className="w-50">
            <form onSubmit={formSubmit}>
              <input
                className="formInput"
                placeholder="Enter Your Name"
                type="text"
              />
              <input
                className="formInput"
                placeholder="Enter Your Email Address"
                type="text"
              />
              <input
                className="formInput"
                placeholder="Phone Number"
                type="text"
              />
              <Button
                className={`formButton px-4 sm:px-8 lg:px-12 py-2 sm:py-3 rounded-full text-sm sm:text-base lg:text-lg 
                  bg-gradient-to-r from-[#684FB2] via-[#9023AE] to-[#405F9E] text-white border-none`}
                type="submit"
              >
                Subscribe
              </Button>
            </form>
          </div>
          <div className="w-50">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-extralight text-center mb-4 z-10 leading-tight">
              {heading2}
            </h2>
            <p className="text-center mt-[10vh] w-full z-10 text-sm md:text-1xl font-light">
              {info}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
