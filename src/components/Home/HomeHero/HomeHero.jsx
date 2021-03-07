import React from "react";
import BaseButton from "../../Other/Buttons/BaseButton/BaseButton";
import BaseInput from "../../Other/Inputs/BaseInput/BaseInput";
import homeHeroImage from "../../../assets/svg/home-hero-img.svg";
import "./index.scss";

export default function HomeHero() {
  return (
    <section className="app-container _flex a-center home-hero">
      <div className="app-wrapper  _flex">
        <div className="home-hero__text-holder" data-aos="fade-up">
          <h1 className="heading">Get Notified When we Launch</h1>
          <p className="description">
            Global Villages' solution is a three-pronged approach to stimulate
            regional growth by transforming the digital economy in Nova Scotia’s
            rural communities.
          </p>

          <div className="search-bar__wrapper">
            <form className="_flex search-bar__form">
              <BaseInput
                labelText="Subscribe to get notified when we go live"
                placeholder="Email Address"
              />
              <BaseButton>
                <span className="button-text">Get Notified</span>
              </BaseButton>
            </form>
          </div>
        </div>
        <div className="home-hero__image-holder" data-aos="zoom-in-up">
          <img src={homeHeroImage} alt="" srcSet="" />
        </div>
      </div>
    </section>
  );
}
