import React from "react";
import img from "../assets/img/img-5.jpg";
const About = () => {
  return (
    <section className="about">
      <div className="container">
        <div className="about-title">
          <h2 className="heading-2">About us</h2>
          <p>
            Your life is our specialty. Our team of experienced physicians
            offers a comprehensive range of healthcare services.
          </p>

          <div className="about-title-block">
            <div className="about-title-block-item">
              <i className="fas fa-user-md"></i>
              <div className="desc">
                <h3 className="heading-3">Expert Doctors</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Officia iusto distinctio dolorum repellat hic! Eaque.
                </p>
              </div>
            </div>
            <div className="about-title-block-item">
              <i className="fas fa-hospital"></i>{" "}
              <div className="desc">
                <h3 className="heading-3">Healthy Environment</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Officia iusto distinctio dolorum repellat hic! Eaque.
                </p>
              </div>
            </div>
          </div>
        </div>

        <figure>
          <img src={img} alt="" />
        </figure>
      </div>
    </section>
  );
};

export default About;
