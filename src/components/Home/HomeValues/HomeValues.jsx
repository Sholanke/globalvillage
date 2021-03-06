import React from "react";
import "./index.scss";
import { values } from "../../../utils/constants";

export default function HomeValues() {
  return (
    <div className="app-container home-values">
      <div className="app-wrapper home-values__grid">
        <div className="heading" data-aos="fade-up">
          <h1>Our Values</h1>
          <p>
            We believe in providing simple solutions to the tough problems with
            a core focus on our people and user
          </p>
        </div>

        {values.map((v, index) => (
          <Value data={v} key={index} index={index} />
        ))}
      </div>
    </div>
  );
}

function Value({ data: { title, description }, index }) {
  return (
    <div className="value" data-aos="fade-up">
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <use href={`/assets/ab-${index + 1}.svg#svg`} />
      </svg>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}
