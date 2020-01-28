import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="nav">
      <div className="container">
        <div className="logo">
          <p> Logo</p>
          <i className="fab fa-slack"></i>
        </div>

        <ul className="nav-list">
          <li>
            <Link className="nav-list-item">Speciality</Link>
          </li>
          <li>
            <Link className="nav-list-item">Doctors</Link>
          </li>
          <li>
            <Link className="nav-list-item">About</Link>
          </li>
          <li>
            <Link className="nav-list-item">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
