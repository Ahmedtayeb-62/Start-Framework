import React from "react";
import "./Error.css";
export default function Error() {
  return (
    <div className=" flex-column d-flex justify-content-center align-content-center align-items-center error">
      <h1 className=" text-center h1-err">404 - Page Not Found</h1>
      <p className="text-center p-er">
        Sorry, the path you are trying to access does not exist.
      </p>
    </div>
  );
}
