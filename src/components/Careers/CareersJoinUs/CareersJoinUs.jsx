import React from "react";
import { values } from "../../../utils/constants";
import "./index.scss";

export default function CareersJoinUs() {
  return (
    <div className="app-container">
      <div className="app-wrapper careers-join-us">
        <div className="careers-join-us__values-grid">
          <div className="__heading" data-aos="fade-up">
            <h2>Our Values</h2>
            <p>
              We believe in providing simple solutions to the tough problems
              with a core focus on our people and user
            </p>
          </div>

          {values.map((v, index) => (
            <Value data={v} key={index} index={index} />
          ))}
        </div>
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
      <p className="title">{title}</p>
      <p className="description">{description} </p>
    </div>
  );
}
