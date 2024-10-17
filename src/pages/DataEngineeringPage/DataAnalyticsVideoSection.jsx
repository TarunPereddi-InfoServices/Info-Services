import React from "react";
import { LuPlayCircle } from "react-icons/lu";
import VideoImg from '../../assets/images/video.jpg';

const DataAnalyticsVideoSection = () => {
  // info: this alignment using display flex align
  // info: for video play icon align position
  return (
    <div className="image-container">
        <div className="flex justify-between m-10">
            <div className="videoPlayContainer">
                <LuPlayCircle color="white" className="playCircle"/>
                <img src={VideoImg} alt="video" className="video"/>
            </div>
            <div className="videoInfo">Our Data Engineering and Analytics solutions encompass seamless data integration, streamlined processing pipelines, and advanced analytics capabilities. By leveraging these components, we empower organizations to extract actionable insights, optimize operations, and drive growth.</div>
        </div>
    </div>
  );
};
export default DataAnalyticsVideoSection;
