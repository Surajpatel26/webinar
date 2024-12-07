import React from "react";
import "./navbar.css";
 import logo from '../assets/logo.jpg'
const Navbar = () => {
  return (
    <header className="navbar">
      <div className="navbar-logo">
      <img src={logo} alt="YTTA Logo" />
      </div>
      <nav className="navbar-links">
        <ul>
          <li><a href="#contact">Contact us</a></li>
          <li className="dropdown">
            <a href="#courses">Training Menu</a>
            <ul className="dropdown-menu">
              <li><a href="#course1">Course 1</a></li>
              <li><a href="#course2">Course 2</a></li>
            </ul>
          </li>
          <li className="dropdown">
            <a href="#webinars">Webinars</a>
            <ul className="dropdown-menu">
              <li><a href="#webinar1">Webinar 1</a></li>
              <li><a href="#webinar2">Webinar 2</a></li>
            </ul>
          </li>
          <li><a href="#about">About us</a></li>
          <li><a href="#login">Login</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;