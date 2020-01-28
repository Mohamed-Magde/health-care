import React, { Fragment } from "react";

const Speciality = () => {
  return (
    <Fragment>
      <div className="fixed"></div>
      <section className="service">
        <div className="container">
          <h2 className="heading-2">Our Services</h2>
          <div className="service-grid">
            <div className="service-grid-block">
              <i className="fas fa-cannabis"></i>
              <h3 className="heading-3">Natural Therapy </h3>
              <p>
                Our team personalizes each athlete’s treatment based on his/her
                sport and age growing bodies.
              </p>
            </div>

            <div className="service-grid-block">
              <i className="fas fa-clinic-medical"></i>
              <h3 className="heading-3">Home Medical Services </h3>
              <p>
                Our clinic is always ready for urgent care such as Fractures,
                Infections, Bites, Minor Burns, Ear Aches, etc..
              </p>
            </div>

            <div className="service-grid-block">
              <i className="fas fa-stethoscope"></i>
              <h3 className="heading-3">Prime care </h3>
              <p>
                Physicians provide comprehensive medical evaluations and primary
                care for patients of all ages.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Speciality;
