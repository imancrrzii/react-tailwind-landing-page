import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CompanyLogo from "./components/CompanyLogo";
import FeatureSection from "./components/FeatureSection";
import DesignSection from "./components/DesignSection";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <CompanyLogo />
      <FeatureSection />
      <DesignSection/>
    </>
  );
};

export default App;
