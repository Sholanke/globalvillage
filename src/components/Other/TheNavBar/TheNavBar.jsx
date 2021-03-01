import React from "react";
import { NavLink } from "react-router-dom";
import "./index.scss";

export default function TheNavBar() {
  return (
    <div className="app-container app-nav-bar">
      <div className="app-wrapper _flex a-center j-between">
        <div className="_left _flex a-center">
          <div className="logo">
            <svg width="164" height="26" viewBox="0 0 164 26">
              <use xlinkHref="/assets/logo.svg#logo" />
            </svg>
          </div>
          <div className="_links">
            <NavLink exact to="/" className="link">
              Home
            </NavLink>
            <NavLink exact to="/about" className="link">
              About Us
            </NavLink>
            <NavLink exact to="/careers" className="link">
              Careers
            </NavLink>
          </div>
        </div>
        <div className="_right">
          <NavLink exact to="/contact" className="base-button _inverted">
            Contact Us
          </NavLink>
        </div>
      </div>
    </div>
  );
}
