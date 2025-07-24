import { IoIosStar } from "react-icons/io";
import "./Contact.css";

export function Contact() {
  return (
    <>
      <div className=" container-fluid  bg-container bg-container-tow ">
        <div className="row ">
          <div className="col-12  ">
            <div className="d-flex justify-content-center align-content-center align-items-center my-auto translate translate-cont flex-column">
              <h2 className=" text-uppercase clr-cont">Contact section</h2>
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
        <br />
        <br />
        <br />
        <div className="display-tow"></div>
        <div className=" container w-50 rounded-1 mt-1 mt-lg-4 ">
          <div className="row">
            <div className="col-12">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control bo-co"
                  id="userName"
                  placeholder="userName"
                />
              </div>
            </div>
          </div>
        </div>
        <div className=" container w-50 rounded-1 m-media mt-5">
          <div className="row">
            <div className="col-12">
              <div className="form-group">
                <input
                  type="number"
                  className="form-control bo-co"
                  id="userAge"
                  placeholder="userAge"
                />
              </div>
            </div>
          </div>
        </div>
        <div className=" container w-50 rounded-1 m-media mt-5">
          <div className="row">
            <div className="col-12">
              <div className="form-group">
                <input
                  type="email"
                  className="form-control bo-co"
                  id="userEmail"
                  placeholder="userEmail"
                />
              </div>
            </div>
          </div>
        </div>
        <div className=" container w-50 rounded-1 m-media mt-5 mb-5">
          <div className="row">
            <div className="col-12">
              <div className="form-group">
                <input
                  type="passowrd"
                  className="form-control bo-co"
                  id="Passowrd"
                  placeholder="userPassowrd"
                />
                <button type="submit" class="btn btn-clr my-3 text-white">
                  send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
    </>
  );
}
