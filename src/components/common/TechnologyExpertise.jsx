import React from "react";
// Importing images
import AmazonAthena from "../../assets/images/technologies/AmazonAthena.png";
import AmazonRedShift from "../../assets/images/technologies/amazonRedShift.png";
import ApacheAirflow from "../../assets/images/technologies/apacheAirflow.png";
import Hadoop from "../../assets/images/technologies/hadoop.png";
import Kafka from "../../assets/images/technologies/kafka.png";
import MongoDB from "../../assets/images/technologies/mongoDB.png";
import PostgreSQL from "../../assets/images/technologies/postgreSQL.png";
import Python from "../../assets/images/technologies/python.png";
import Scala from "../../assets/images/technologies/Scala.png";
import Snowflake from "../../assets/images/technologies/snowflake.png";
import Spark from "../../assets/images/technologies/Spark.png";
import SQL from "../../assets/images/technologies/sql.png";

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
        {/* <img src={techStackImage} className="tech-stack-img" /> */}
        <div className="tech-stack-img">
          <img src={Python} alt="python" className="tech-logo" />
          <img src={Scala} alt="Scala" className="tech-logo" />
          <img src={SQL} alt="SQL" className="tech-logo" />
          <img src={PostgreSQL} alt="PostgreSQL" className="tech-logo" />
          <img src={MongoDB} alt="MongoDB" className="tech-logo" />
          <img src={Hadoop} alt="Hadoop" className="tech-logo" />

          <img src={Spark} alt="Spark" className="tech-logo" />
          <img src={Kafka} alt="Kafka" className="tech-logo" />
          <img src={AmazonRedShift} alt="Amazon RedShift" className="tech-logo" />
          <img src={Snowflake} alt="Snowflake" className="tech-logo" />
          <img src={AmazonAthena} alt="Amazon Athena" className="tech-logo" />
          <img src={ApacheAirflow} alt="Apache Airflow" className="tech-logo" />

        </div>
      </div>
    </div>
  );
};
export default TechnologyExpertise;
