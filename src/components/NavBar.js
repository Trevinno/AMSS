import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <NavLink to="/" className="navbar-brand">
        Navbar
      </NavLink>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <div className="navbar-nav">
          <NavLink to="/" exact className="nav-item nav-link">
            Home
          </NavLink>

          <NavLink to="/feed" className="nav-item nav-link">
            Feed
          </NavLink>

          <NavLink to="/" className="nav-item nav-link">
            Gallery
          </NavLink>
          <NavLink to="/portfolio" className="nav-item nav-link">
            Portfolio
          </NavLink>
          <NavLink to="/signup" className="nav-item nav-link" style={{
            left: '700px'
          }}>
            Login
          </NavLink>
          <NavLink to="/" className="nav-item nav-link" style={{
            left: '700px'
          }}>
            Cart
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
