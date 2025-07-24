import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CompanyLogo from "./components/CompanyLogo";
import FeatureSection from "./components/FeatureSection";
import DesignSection from "./components/DesignSection";
import CustomerSection from "./components/CustomerSection";
import About from "./components/About";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <CompanyLogo />
      <FeatureSection />
      <DesignSection />
      <CustomerSection />
      <About/>
      <Footer/>
    </>
  );
};

export default App;
