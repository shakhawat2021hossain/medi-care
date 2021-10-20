import React from "react";
import "./Banner.css";
import cover from "./../../../images/hero-img.svg";
import { Link } from "react-router-dom";
const Banner = () => {
  return (
    <div className="hero container-lg d-flex flex-column-reverse flex-md-row justify-content-between align-items-center">
      <div className="half-width text-content mt-5">
        <h5>Welcome to Our Medical Care Center</h5>
        <h1> We Take Care Our Patients Health</h1>
        <p>
          Largest network of the world’s finest and brightest medical experts
          who provide compassionate care using outstanding expertise and
          advanced technology.
        </p>
        <div>
          <Link to="/contact"> Contact Us </Link>

          <Link to="/about"> About Us </Link>
        </div>
      </div>
      <div className="half-width mt-5">
        <img src={cover} alt="" />
      </div>
    </div>
  );
};

export default Banner;
