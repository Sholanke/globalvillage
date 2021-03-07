import React from "react";
import BaseHero from "../Other/Heros/BaseHero";
import TheFooter from "../Other/TheFooter/TheFooter";
import TheNavBar from "../Other/TheNavBar/TheNavBar";
import CareersJoinUs from "./CareersJoinUs/CareersJoinUs";
import CareersReadyToJoin from "./CareersReadyToJoin/CareersReadyToJoin";

export default function index() {
  return (
    <>
      <TheNavBar />
      <BaseHero
        className="careers-hero"
        title="Join our team"
        description="We help you create an environment where innovation thrives – we provide solutions to significantly improve outcomes. Our team of consultants and analysts are here to deliver more efficient services to our clients."
      />
      <CareersJoinUs />
      <CareersReadyToJoin />
      <TheFooter />
    </>
  );
}
