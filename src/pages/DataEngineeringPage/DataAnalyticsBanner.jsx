import React from "react";

const DataAnalyticsBanner = () => {
    return (
        <div className=" flex flex-col items-center justify-center px-4">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extralight text-center mb-4 z-10 leading-tight">
                Unlock innovation with
            </h1>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extralight text-center mb-4 z-10 leading-tight text-gray-400">
                Data Analytics
            </h1>
            <p className="text-center mt-[10vh] w-full z-10 text-sm md:text-1xl font-light">
                Leverage the power of data to fuel your digital transformation
                journey. Our data engineering and analytics services pave
            </p>
            <p className="text-center w-full z-10 text-sm md:text-1xl font-light">
                the way for actionable insights and strategic decision-making.
            </p>
        </div>
    );
};
export default DataAnalyticsBanner;
