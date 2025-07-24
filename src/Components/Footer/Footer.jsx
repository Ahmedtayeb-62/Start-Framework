import { BiLogoFacebook } from "react-icons/bi";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaGlobe } from "react-icons/fa";
import "./Footer.css";
export default function Footer() {
  return (
    <>
      <footer className="container-fluid custom-bg mt-auto">
        <div className="container py-5">
          <div className="row py-4">
            <div className="col-lg-4 mb-3 mb-lg-0 py-3 pb-5">
              <div className="inner">
                <h2 className="text-center h2-size">LOCATION</h2>
                <p className="mb-2 text-center">2215 John Daniel Drive</p>
                <p className="text-center">Clark, MO 65243</p>
              </div>
            </div>
            <div className="col-lg-4 mb-3 mb-lg-0 py-3 pb-5">
              <div className="inner">
                <h2 className="text-center h2-size">AROUND THE WEB</h2>
                <div className="d-flex m-auto justify-content-center px-4 ">
                  <span className="text-center justify-content-center d-flex rounded-circle border border-2 w-max mx-1 p-2">
                    <BiLogoFacebook className="fs-5 fw-bold  bg-white rounded-circle  m-auto" />
                  </span>
                  <span className="text-center justify-content-center d-flex rounded-circle border border-2 w-max mx-1 p-2">
                    <FaTwitter className="fs-5 text-white  rounded-circle  m-auto " />
                  </span>
                  <span className="text-center justify-content-center d-flex rounded-circle border border-2 w-max mx-1 p-2">
                    <FaLinkedinIn className="fs-5  text-white  rounded-circle  m-auto" />
                  </span>
                  <span className="text-center justify-content-center d-flex rounded-circle border border-2 w-max mx-1 p-2">
                    <FaGlobe className="fs-5 text-white rounded-circle  m-auto" />
                  </span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 py-3">
              <div className="inner">
                <h2 className="text-center h2-size">ABOUT FREELANCER</h2>
                <p className="mb-2 text-center">
                  Freelance is a free to use, licensed Bootstrap theme created
                  by Route
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="container-fluid custom-bg-bo mt-auto py-3">
        <h4 className="text-center text-white ">
          Copyright © Your Website 2021
        </h4>
      </div>
    </>
  );
}
