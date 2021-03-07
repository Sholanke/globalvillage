import React from "react";
import "./index.scss";

export default function AboutWhoWeAre() {
  return (
    <div className="app-container about-who-we-are">
      <div className="app-wrapper about-who-we-are__grid" data-aos="fade-up">
        <div>
          <div className="heading">
            <p className="co-green">Who we are</p>
            <p className="heading__description">
              Professionals with proven expertise in technology product
              engineering, design and business development
            </p>
          </div>
          <h2 className="_big-text">
            "We pride ourselves with the impactful work we do, while ensuring we
            contribute positively to the ecosystem around us”
          </h2>
        </div>

        <div>
          <p className="description">
            As a group of diverse individuals building the future of technology,
            we are passionate about the work we do.
            <br />
            <br />
            Integrity, honesty, excellence, empathy and meticulous. These are at
            our core and we live this daily.
          </p>
        </div>
      </div>
    </div>
  );
}
