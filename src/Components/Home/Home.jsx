import React from "react";
import { Outlet } from "react-router-dom";
import { IoIosStar } from "react-icons/io";
import avatar from "./photos/avataaars.svg";
import "./Home.css";

<img src={avatar} alt="" />;

export default function Home() {
  return (
    <>
      <div className=" container-fluid  bg-container  ">
        <div className="row ">
          <div className="col-12  ">
            <div className="d-flex justify-content-center">
              <img className="custom-w" src={avatar} alt="" />
            </div>
            <div className="d-flex justify-content-center align-content-center align-items-center my-auto translate translate-tow-home flex-column">
              <h2 className=" text-uppercase text-white">start Framework</h2>
              <div className="d-flex justify-content-center align-content-center align-items-center ">
                <span className=" d-inline-block border-t-tow">
                  &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
                  &nbsp;&nbsp;
                </span>
                <IoIosStar className=" text-white icon fs-5" />
                <span className=" d-inline-block border-t">
                  &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
                  &nbsp;&nbsp;
                </span>
              </div>
              <span className="f-s">
                Graphic Artist - Web Designer - Illustrator
              </span>
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
      </div>
      <div className=" container-fluid bg-h">
        <br />
        <br />
        <br /> <br />
      </div>
    </>
  );
}
