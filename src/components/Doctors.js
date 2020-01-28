import React, { Fragment } from "react";
import img1 from "../assets/img/doctor-1.png";
import img2 from "../assets/img/doctor-2.png";
import img3 from "../assets/img/doctor-3.png";
import img4 from "../assets/img/doctor-4.png";
const Doctors = () => {
  return (
    <Fragment>
      <div className="fixed-doctors"></div>
      <section className="doctors">
        <div className="container">
          <h2 className="heading-2">Our Doctors</h2>
          <div className="doctors-grid">
            <figure>
              <img src={img1} alt="" />
              <div className="content">
                <p className="name">Janie Roe</p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Earum, necessitatibus!
                </p>
                <div className="phone">
                  <i className="fas fa-phone-alt"></i>
                  <p className="num">+61 452 200 126</p>
                </div>
              </div>
            </figure>

            <figure>
              <img src={img2} alt="" />
              <div className="content">
                <p className="name">Janie Roe</p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Earum, necessitatibus!
                </p>
                <div className="phone">
                  <i className="fas fa-phone-alt"></i>
                  <p className="num">+61 452 200 126</p>
                </div>
              </div>
            </figure>

            <figure>
              <img src={img3} alt="" />
              <div className="content">
                <p className="name">Janie Roe</p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Earum, necessitatibus!
                </p>
                <div className="phone">
                  <i className="fas fa-phone-alt"></i>
                  <p className="num">+61 452 200 126</p>
                </div>
              </div>
            </figure>

            <figure>
              <img src={img4} alt="" />
              <div className="content">
                <p className="name">Janie Roe</p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Earum, necessitatibus!
                </p>
                <div className="phone">
                  <i className="fas fa-phone-alt"></i>
                  <p className="num">+61 452 200 126</p>
                </div>
              </div>
            </figure>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Doctors;
