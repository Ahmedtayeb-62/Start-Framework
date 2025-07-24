import React, { useState } from "react";
import "./Zoomp1.css";

export default function Zoomp1({ image, setZoomVisible }) {
  const [isHidden, setIsHidden] = useState(false);

  const handleContainerClick = () => {
    setIsHidden(true); 
    setTimeout(() => setZoomVisible(false), 200); 
  };

  const handleImageClick = (event) => {
    event.stopPropagation(); 
  };

  return (
    <>
      <div
        className={`d-flex justify-content-center align-items-center position-fixed top-0 end-0 start-0 bottom-0 w-100 bg-c-f ${
          isHidden ? "d-none" : ""
        }`}
        onClick={handleContainerClick}
      >
        <img
          className="wid"
          src={image} 
          alt="portfolio image"
          onClick={handleImageClick}
        />
      </div>
    </>
  );
}
