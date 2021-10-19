import React from "react";
import Footer from "../footer/Footer";
import about from "./../../images/banner.jpg";
import "./About.css";
const About = () => {
  return (
    <div className="container about mt-3">
      <h1 className="text-center">About Us</h1>
      <div className="d-flex justify-content-between align-items-center my-5">
        <img className="half-width" src={about} alt="" />
        <div className="half-width">
          <p>
            We’ve served this richly diverse region as a community hospital for
            more than 60 years. And as the area has grown, so have we. But as
            Long Island doctors, nurses, and healthcare professionals, we’ve
            never outgrown our devotion to the health of the community we all
            call home. That commitment can be seen in the Knapp Cardiac Care
            Center, a new surgical pavilion, our level III trauma center, our
            women’s imaging, breast health, orthopedics, bariatrics, and so much
            more.
          </p>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default About;
