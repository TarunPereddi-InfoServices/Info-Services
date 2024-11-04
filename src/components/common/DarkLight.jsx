import React, { useState } from "react";

const DarkLight = () => {
  // info: isDarkModeActive is dark mode active or not. on this state switch mode-active class
  const [isDarkModeActive, setIsDarkModeActive] = useState(true);
  // info: event on toggle button
  const toggleModeHandler = () => {
    setIsDarkModeActive((preState) => !preState);
  };
  return (
    <div className="flex justify-end m-10">
      <div className="mode-container">
        <span
          className={`mode ${isDarkModeActive ? "mode-active" : ""}`}
          onClick={toggleModeHandler}
        >
          Dark
        </span>
        <span
          className={`mode ${!isDarkModeActive ? "mode-active" : ""}`}
          onClick={toggleModeHandler}
        >
          Light
        </span>
      </div>
    </div>
  );
};
export default DarkLight;
