import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <header className="container">
      <img
        className="logo"
        src="https://uilogos.co/img/logotype/circle.png"
        alt="logo"
      />

      <ul className="nav-items">
        <li>Home</li>
        <li>Employees</li>
        <li>Candidate</li>
        <li>Pages</li>
        <li>Contact</li>
      </ul>

      <button className="nav-btn">Post a Job</button>
    </header>
  );
}

export default Navbar;
