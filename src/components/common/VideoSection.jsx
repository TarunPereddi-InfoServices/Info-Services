import React from "react";
import { LuPlayCircle } from "react-icons/lu";

const DataAnalyticsVideoSection = ({ VideoImg, videoInfo }) => {
  // info: this alignment using display flex align
  // info: for video play icon align position
  return (
    <div className="image-container">
      <div className="flex justify-between m-10">
        <div className="videoPlayContainer">
          <LuPlayCircle color="white" className="playCircle" />
          <img src={VideoImg} alt="video" className="video" />
        </div>
        <div className="videoInfo">{videoInfo}</div>
      </div>
    </div>
  );
};
export default DataAnalyticsVideoSection;
