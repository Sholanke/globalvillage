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
          <div className="_left">
            <div className="_top">
              <h1>Our Contact Information</h1>
              <p>
                Fill up the form and our team will get back to you within 24
                hours
              </p>
            </div>
          </div>
          <form action="">
            <BaseInput labelText="Full name *" placeholder="Julia William" />
            <BaseInput labelText="Email *" placeholder="you@example.com" />
            <BaseInput labelText="Company *" placeholder="Abc Limited" />
            <BaseTextarea
              labelText="Tell us a bit about you *"
              placeholder="How can we help you"
            />
            <BaseButton>Send Message</BaseButton>
          </form>
        </div>
      </div>
    </div>
  );
}
