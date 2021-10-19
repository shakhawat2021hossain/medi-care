import React from "react";
import error from "./../../images/Error-404.jpg";
import "./NotFound.css";
const NotFound = () => {
  return (
    <div className="error my-5">
      <img className="image-fluid" src={error} alt="" />
    </div>
  );
};

export default NotFound;
