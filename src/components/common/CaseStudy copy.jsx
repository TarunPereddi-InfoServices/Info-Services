import React from "react";

// Main DataAnalyticsCaseStudy component
const CaseStudy = ({ caseStudies }) => {
  // CaseStudyCard component to handle individual case studies
  const CaseStudyCard = ({
    title,
    description,
    bgClass,
    buttonTitle,
    readMoreText,
  }) => {
    return (
      <div className="relative cardWrapper">
      <div className={`caseStudyCard ${bgClass}`}>
      </div>
        <div className="caseStudyContent">
          <button className="caseStudyBtn">{buttonTitle}</button>
          <p className="caseStudyPara">{title}</p>
          <p className="caseStudydescription">{description}</p>
          <button className="caseStudyBtn caseStudyReadMoreBtn">
            {readMoreText}
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="caseStudy">
      {caseStudies.map((study, index) => (
        <CaseStudyCard
          key={index}
          buttonTitle={study.buttonTitle}
          readMoreText={study.readMoreText}
          title={study.title}
          description={study.description}
          bgClass={study.bgClass}
        />
      ))}
    </div>
  );
};

export default CaseStudy;
