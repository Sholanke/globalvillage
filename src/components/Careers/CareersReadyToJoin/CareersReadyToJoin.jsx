import React from "react";
import BaseButton from "../../Other/Buttons/BaseButton/BaseButton";
import "./index.scss";

export default function CareersReadyToJoin() {
  return (
    <div className="app-container careers-ready-to-join" data-aos="fade-up">
      <div className="app-wrapper">
        <div className="text-holder">
          <h2>Ready to Join our Team?</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt
            vitae.
          </p>
        </div>
        <BaseButton>Send us a mail</BaseButton>
      </div>
    </div>
  );
}
