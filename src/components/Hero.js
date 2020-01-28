import React from "react";
import img from "../assets/img/img-10.png";
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <header className="hero">
      <div className="container">
        <div className="hero-title">
          <h1 className="heading-1">Your Health Care is our Responsibility</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
          </p>

          <Link className="btn-primary"> Get Started</Link>
        </div>
        <figure>
          <img src={img} alt="" />
        </figure>
      </div>
    </header>
  );
};

export default Hero;
