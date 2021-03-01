import React from "react";
import TheFooter from "../Other/TheFooter/TheFooter";
import TheNavBar from "../Other/TheNavBar/TheNavBar";
import ContactHero from "./ContactHero/ContactHero";

export default function index() {
  return (
    <>
      <TheNavBar />
      <ContactHero />
      <TheFooter />
    </>
  );
}
