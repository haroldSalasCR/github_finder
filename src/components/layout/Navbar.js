import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Navbar = ({ icon, title }) => {
  return (
    <nav className="navbar navbar-dark">
      <h2>
        <i className={icon} /> {title}
      </h2>
      <ul className="nav justify-content-end mr-md-3">
        <li className="nav-item navbar-brand mb-0 h1">
          <Link className=" text-white" to="/">
            Home
          </Link>
        </li>
        <li className="nav-item navbar-brand mb-0 h1">
          <Link className=" text-white" to="/about">
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
};

Navbar.defaultProps = {
  title: "Github Finder",
  icon: "fab fa-github",
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default Navbar;
