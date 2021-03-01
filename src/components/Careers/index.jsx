import React from "react";
import BaseHero from "../Other/Heros/BaseHero";
import TheFooter from "../Other/TheFooter/TheFooter";
import CareersJoinUs from "./CareersJoinUs/CareersJoinUs";
import CareersReadyToJoin from "./CareersReadyToJoin/CareersReadyToJoin";

export default function index() {
  return (
    <>
      <BaseHero />
      <CareersJoinUs />
      <CareersReadyToJoin />
      <TheFooter />
    </>
  );
}
