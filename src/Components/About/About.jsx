import { IoIosStar } from "react-icons/io";
import "./About.css";

export function About() {
  return (
    <>
      <div className=" container-fluid  bg-container  ">
        <div className="row ">
          <div className="col-12  ">
            <div className="d-flex justify-content-center align-content-center align-items-center my-auto translate  flex-column">
              <h2 className=" text-uppercase text-white">about component</h2>
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
            </div>
          </div>
          <div className="  container-fluid">
            <div className="row">
              <div className="col-lg-6 col-12 translate">
                <p className="max ms-lg-auto">
                  Freelancer is a free bootstrap theme created by Route. The
                  download includes the complete source files including HTML,
                  CSS, and JavaScript as well as optional SASS stylesheets for
                  easy customization.
                </p>
              </div>
              <div className="col-lg-6 col-12 translate">
                <p className="max">
                  Freelancer is a free bootstrap theme created by Route. The
                  download includes the complete source files including HTML,
                  CSS, and JavaScript as well as optional SASS stylesheets for
                  easy customization.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
