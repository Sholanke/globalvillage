import React from "react";
import TheFooter from "../Other/TheFooter/TheFooter";
import AboutHero from "./AboutHero/AboutHero";
import AboutTheTeam from "./AboutTheTeam/AboutTheTeam";
import AboutWhoWeAre from "./AboutWhoWeAre/AboutWhoWeAre";

export default function index() {
  return (
    <>
      <AboutHero />
      <AboutWhoWeAre />
      <AboutTheTeam />
      <TheFooter />
    </>
  );
}
