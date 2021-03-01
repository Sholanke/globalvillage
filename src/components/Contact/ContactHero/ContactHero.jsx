import React from "react";
import BaseButton from "../../Other/Buttons/BaseButton/BaseButton";
import BaseInput from "../../Other/Inputs/BaseInput/BaseInput";
import BaseTextarea from "../../Other/Inputs/BaseTextarea/BaseTextarea";
import "./index.scss";

export default function ContactHero() {
  return (
    <div className="app-container contact-hero">
      <div className="app-wrapper">
        <div className="__heading">
          <h1>We are here to help</h1>
          <p>
            Contact us if you have any questions about our company or products.
            We will try to provide an answer within a few days.
          </p>
        </div>

        <div className="contact__form">
          <div></div>
          <form action="">
            <BaseInput />
            <BaseInput />
            <BaseInput />
            <BaseTextarea />
            <BaseButton>Button</BaseButton>
          </form>
        </div>
      </div>
    </div>
  );
}
