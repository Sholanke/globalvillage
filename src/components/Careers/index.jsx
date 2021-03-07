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
      <BaseHero className="careers-hero" />
      <CareersJoinUs />
      <CareersReadyToJoin />
      <TheFooter />
    </>
  );
}
