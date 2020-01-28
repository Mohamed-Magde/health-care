import React from "react";
import img from "../assets/img/img-6.jpg";
const Footer = () => {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <form action="" className="form">
          <div className="heading-2">Contact Us</div>
          <div className="form-group">
            <input type="text" placeholder="Name" name="name" />
          </div>

          <div className="form-group">
            <input type="email" placeholder="Email" name="email" />
          </div>

          <div className="form-group">
            <input type="text" placeholder="Subject" name="sucbject" />
          </div>

          <div className="form-group">
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Message"
            ></textarea>
          </div>

          <button className="btn-primary">Submit</button>
        </form>
        <figure>
          <img src={img} alt="" />
        </figure>
      </div>
    </section>
  );
};

export default Footer;
