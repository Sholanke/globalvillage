import React from "react";
import TheFooter from "../Other/TheFooter/TheFooter";
import TheNavBar from "../Other/TheNavBar/TheNavBar";
import HomeCompanies from "./HomeCompanies/HomeCompanies";
import HomeContact from "./HomeContact/HomeContact";
import HomeHelp from "./HomeHelp/HomeHelp";
import HomeHero from "./HomeHero/HomeHero";
import HomeValues from "./HomeValues/HomeValues";

export default function index() {
  return (
    <>
      <TheNavBar />
      <HomeHero />
      <HomeCompanies />
      <HomeValues />
      <HomeHelp />
      <HomeContact />
      <TheFooter />
    </>
  );
}
