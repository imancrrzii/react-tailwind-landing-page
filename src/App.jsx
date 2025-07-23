import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CompanyLogo from "./components/CompanyLogo";
import FeatureSection from "./components/FeatureSection";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <CompanyLogo />
      <FeatureSection />
    </>
  );
};

export default App;
