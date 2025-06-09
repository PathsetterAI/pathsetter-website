import React from "react";
import Header from "../Components/Header";
import HeroSection from "./HeroSection";
import FeaturesSection from "./FeaturesSection";
import Aboutus from "../Components/Aboutus";
import Waitlist from "../Components/Waitlist";
import Contact from "../Components/Contact";
const MainPage = () => {
   return (
    <div className="relative w-full">
      <div className="fixed top-0 left-0 w-full z-50">
        <Header />
      </div>

      <HeroSection />

      <div id="info" className="relative z-10">
        <FeaturesSection />
        <div id="aboutus">
          <Aboutus />
        </div>
        <Waitlist />
        <Contact />
      </div>
    </div>
  );
};

export default MainPage