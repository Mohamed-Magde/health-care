import React, { Fragment } from "react";
import { services } from "../data/data";
const Speciality = () => {
  return (
    <Fragment>
      <div className="fixed"></div>
      <section className="service">
        <div className="container">
          <h2 className="heading-2">Our Services</h2>

          <div className="service-grid">
            {services.map(service => {
              return (
                <div className="service-grid-block" key={service.id}>
                  <i className={service.icon}></i>
                  <h3 className="heading-3">{service.title} </h3>
                  <p>{service.p}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Speciality;
