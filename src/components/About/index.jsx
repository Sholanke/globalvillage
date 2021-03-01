import React from "react";
import TheFooter from "../Other/TheFooter/TheFooter";
import TheNavBar from "../Other/TheNavBar/TheNavBar";
import AboutHero from "./AboutHero/AboutHero";
import AboutTheTeam from "./AboutTheTeam/AboutTheTeam";
import AboutWhoWeAre from "./AboutWhoWeAre/AboutWhoWeAre";

export default function index() {
  return (
    <>
      <TheNavBar />
      <AboutHero />
      <AboutWhoWeAre />
      <AboutTheTeam />
      <TheFooter />
    </>
  );
}
