import React from "react";
import "./hero.css";
import arrow_icon from "../Assets/arrow.png";
import heroImg from "../Assets/heroImg.png";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <h2>New Arrival Only</h2>
        <div>
          <div className="hero-hand-icon">
            <p>A Brand</p>
          </div>

          <p>New Way</p>   
          <p>to Shop</p>
        </div>
        <div className="hero-latest-bn">
          <div>Latest Collection</div>
        </div>
      </div>
      <div className="hero-right">
        <img src={heroImg} alt="" />
      </div>
    </div>
  );
};

export default Hero;
