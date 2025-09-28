import React from "react";
import Container from "../container/Container";
import Hero from "../components/Hero/Hero";
import Hero2 from "../components/Hero2/Hero2";
import Benefits from "../components/Benefits/Benefits";
import Benefitsbox from "../components/Benefitsbox/Benefitsbox";
import EnrollBanner from "../components/EnrollBanner/EnrollBanner";
import PrimeOfferBanner from "../components/PrimeOfferBanner/PrimeOfferBanner";
import LearningSection from "../components/LearningSection/LearningSection";


export default function Home() {
  return (
    <>
      <Container />
      <Hero />
      <Hero2 />
      <Benefits />
      <Benefitsbox />
      <EnrollBanner />
      <PrimeOfferBanner />
      <LearningSection />
    
    </>
  );
}
