import React from "react";
import "./index.scss";
import valueIcon from "../../../assets/svg/value-icon.svg";

export default function HomeValues() {
  return (
    <div className="app-container home-values">
      <div className="app-wrapper home-values__grid">
        <div className="heading">
          <h1>Our Values</h1>
          <p>
            We help leading brands and startups build software by providing
            reliable development teams and experienced consultants.
          </p>
        </div>
        <Value />
        <Value />
        <Value />
        <Value />
      </div>
    </div>
  );
}

function Value() {
  return (
    <div className="value">
      <img src={valueIcon} alt="" />
      <h3>Value title goes here</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt vitae
        ornare potenti ac nibh cursus sed magna. Neque, nunc lacus, facilisi
        tempus aliquam lectus sed.
      </p>
    </div>
  );
}
