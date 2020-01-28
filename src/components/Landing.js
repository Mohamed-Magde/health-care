import React, { Fragment } from "react";
import Hero from "./Hero";
import Speciality from "./Speciality";
import About from "./About";
import Footer from "./Footer";
import Doctors from "./Doctors";

const Landing = () => {
  return (
    <Fragment>
      <Hero />
      <About />
      <Speciality />
      <Doctors />
      <Footer />
    </Fragment>
  );
};

export default Landing;
