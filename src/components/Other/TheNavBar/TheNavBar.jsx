import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./index.scss";

export default function TheNavBar() {
  const [menuIsActive, setMenuIsActive] = useState(false);
  const [headerIsReduced, setHeaderIsReduced] = useState(window.scrollY > 10);

  const toggleMenuState = () => {
    setMenuIsActive(prevState => !prevState);
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const top = window.scrollY;
      setHeaderIsReduced(top > 10);
    });
  }, []);

  return (
    <div
      className="app-container app-nav-bar"
      data-is-reduced={headerIsReduced}
    >
      <div className="app-wrapper _flex a-center j-between">
        <div className="_left _flex a-center">
          <div className="logo">
            <svg width="164" height="26" viewBox="0 0 164 26">
              <use xlinkHref="/assets/logo.svg#logo" />
            </svg>
          </div>
        </div>
        <div className="_right _flex a-center">
          <button
            className="menu-btn"
            onClick={toggleMenuState}
            data-is-active={menuIsActive}
          >
            <span className="line" />
          </button>

          <div className="_links _flex a-center" data-is-active={menuIsActive}>
            <NavLink exact to="/" className="link">
              Home
            </NavLink>
            <NavLink exact to="/about" className="link">
              About Us
            </NavLink>
            <NavLink exact to="/careers" className="link">
              Careers
            </NavLink>
            <NavLink exact to="/contact" className="base-button _inverted">
              Contact Us
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}
