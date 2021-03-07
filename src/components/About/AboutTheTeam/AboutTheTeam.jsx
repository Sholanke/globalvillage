import React from "react";
import "./index.scss";

export default function AboutTheTeam() {
  return (
    <div className="app-container about-the-team">
      <div className="app-wrapper">
        <div className="about-the-team__heading" data-aos="fade-up">
          <h1>Meet The Team</h1>
          <p>
            We have succeeded to gather a+ players, that have worked with top
            companies around the world
          </p>
        </div>

        <div className="about-the-team__grid">
          <TeamMember />
          <TeamMember />
          <TeamMember />
        </div>
      </div>
    </div>
  );
}

function TeamMember() {
  return (
    <div className="team-member" data-aos="fade-up">
      <div className="team-member__info">
        <p className="name">Baptiste Caruna</p>
        <p className="description">chief Product Officer</p>
      </div>
    </div>
  );
}
