import port1 from "./Photos/port1.png";
import port2 from "./Photos/port2.png";
import port3 from "./Photos/port3.png";
import { IoIosStar } from "react-icons/io";
import { FaPlus } from "react-icons/fa";
import Zoomp1 from "../Zoomp1/Zoomp1";
import "./Portfolio.css";
import React, { useState } from "react";
export function Portfolio() {
  const [isZoomVisible, setZoomVisible] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);

  const handleImageClick = (image) => {
    setZoomVisible(false);
    setTimeout(() => {
      setCurrentImage(image);
      setZoomVisible(true);
    }, 150);
  };

  return (
    <>
      {isZoomVisible && (
        <Zoomp1 image={currentImage} setZoomVisible={setZoomVisible} />
      )}
      <div className=" container-fluid   ">
        <div className="row ">
          <div className="col-12 mt-2 ">
            <div className="d-flex justify-content-center align-content-center align-items-center mt-5 text-center flex-column">
              <h2 className=" text-uppercase clr-cont">portfolio component</h2>
              <div className="d-flex justify-content-center align-content-center align-items-center ">
                <span className=" d-inline-block border-t-tow border-t-cont">
                  &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
                  &nbsp;&nbsp;
                </span>
                <IoIosStar className="icon icon-cont fs-5" />
                <span className=" d-inline-block border-t border-t-cont ">
                  &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
                  &nbsp;&nbsp;
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" container mb-5">
        <div className="row">
          <div className="col-md-6 pe-4 pe-4 col-lg-4 mt-5 mt-lg-0">
            <div
              className="inner  position-relative"
              onClick={() => handleImageClick(port1)}
            >
              <img className="w-100 rounded-4  " src={port1} alt="port1" />

              <FaPlus className=" text-white w-100 tr-ic rounded-4  position-absolute top-0 end-0 start-0 bottom-0" />

              <div className="w-100 cursur-pointer rounded-4 hover position-absolute top-0 end-0 start-0 bottom-0 "></div>
            </div>
          </div>
          <div className="col-md-6 pe-4 pe-4 col-lg-4 mt-5 mt-lg-0">
            <div
              className="inner position-relative"
              onClick={() => handleImageClick(port2)}
            >
              <img className="w-100  rounded-4  " src={port2} alt="port1" />
              <FaPlus className=" text-white w-100 tr-ic rounded-4  position-absolute top-0 end-0 start-0 bottom-0" />
              <div className="w-100 hover rounded-4  cursur-pointer position-absolute top-0 end-0 start-0 bottom-0 "></div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 mt-md-5 mt-5 mt-lg-0">
            <div
              className="inner  position-relative"
              onClick={() => handleImageClick(port3)}
            >
              <img className="w-100  rounded-4  " src={port3} alt="port1" />
              <FaPlus className=" text-white w-100 tr-ic rounded-4  position-absolute top-0 end-0 start-0 bottom-0" />
              <div className="w-100 hover rounded-4 cursur-pointer position-absolute top-0 end-0 start-0 bottom-0 "></div>
            </div>
          </div>
          <div className="col-md-6  mt-5 col-lg-4">
            <div
              className="inner  position-relative"
              onClick={() => handleImageClick(port1)}
            >
              <img className="w-100  rounded-4 " src={port1} alt="port1" />
              <FaPlus className=" text-white w-100 tr-ic rounded-4  position-absolute top-0 end-0 start-0 bottom-0" />
              <div className="w-100 hover cursur-pointer rounded-4 position-absolute top-0 end-0 start-0 bottom-0 "></div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 mt-5">
            <div
              className="inner  position-relative "
              onClick={() => handleImageClick(port2)}
            >
              <FaPlus className=" text-white w-100 tr-ic rounded-4  position-absolute top-0 end-0 start-0 bottom-0" />
              <img className="w-100  rounded-4 " src={port2} alt="port1" />
              <div className="w-100 hover cursur-pointer rounded-4 position-absolute top-0 end-0 start-0 bottom-0 "></div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 mt-5">
            <div
              className="inner position-relative"
              onClick={() => handleImageClick(port3)}
            >
              <img className="w-100  rounded-4  " src={port3} alt="port1" />
              <FaPlus className=" text-white w-100 tr-ic rounded-4  position-absolute top-0 end-0 start-0 bottom-0" />
              <div className="w-100 hover cursur-pointer rounded-4 position-absolute top-0 end-0 start-0 bottom-0 "></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
