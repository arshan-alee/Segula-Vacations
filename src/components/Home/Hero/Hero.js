import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero__container">
      {/* Icons Container */}
      <div className="icons">
        <img src="/assets/Home/hero__icon__left.png" alt="icon" />
        <img src="/assets/Home/hero__icon__right.png" alt="icon" />
      </div>
      {/* Content Container */}
      <div className="content">
        <h1>SURFS UP,</h1>
        <h1> LET'S GO MIAMI </h1>
        <p>
          lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt sed do eiusmod tempor incididunt
        </p>
        <button>Read More</button>
      </div>
    </div>
  );
};

export default Hero;
