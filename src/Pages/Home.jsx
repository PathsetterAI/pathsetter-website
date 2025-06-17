import React, { useState, useLayoutEffect } from "react";
import Header from "../Components/Header";
import timeline from "../assets/Videos/red.mp4";
import intro from "../assets/Videos/IntroVideo.mp4";

import Features from "./Features";
import Waitlist from "./Waitlist";
import Contact from "./Contact";
import Aboutus from "./Aboutus";
import Enterprise from "./Enterprise";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const [activeSection, setActiveSection] = useState("home");

  const sections = [
    { id: "home" },
    { id: "features" },
    { id: "aboutus" },
    { id: "waitlist" },
    { id: "contactus" },
  ];

  useLayoutEffect(() => {
    const triggers = [];

    sections.forEach(({ id }) => {
      const trigger = ScrollTrigger.create({
        trigger: `#${id}`,
        start: "top center",
        end: "bottom center",
        onEnter: () => setActiveSection(id),
        onEnterBack: () => setActiveSection(id),
      });
      triggers.push(trigger);
    });

    // Feature section animation
    gsap.from(".feature-title", {
      scrollTrigger: {
        trigger: "#features",
        start: "top 80%",
      },
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power2.out",
    });

    // Fade out home text on scroll
    gsap.to("#home .home-text", {
      scrollTrigger: {
        trigger: "#home",
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
      opacity: 0,
      y: -100,
    });

    return () => {
      triggers.forEach((t) => t.kill());
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="relative w-full">
      {/* Header */}
      <div className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/20 shadow-md">
        <Header
          activeSection={activeSection}
          setActiveSection={setActiveSection}
        />
      </div>

      {/* Fixed Home Section */}
      <section
        id="home"
        className="fixed top-0 left-0 w-full h-screen z-0"
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src={intro} type="video/mp4" />
        </video>

       <div className="absolute bottom-0 left-0 z-10 px-6 sm:px-12 md:px-20 mb-10 md:mb-20 text-white home-text w-full">


       <div className="flex flex-col items-start max-w-xl space-y-6">
     <h1 className="text-5xl sm:text-3xl md:text-5xl ">

              The Future of Infrastructure is here…
            </h1>
           <p className="text-sm sm:text-base md:text-lg text-white">

              From planning to execution, harness AI to reimagine how Infrastructure projects get delivered
            </p>
          </div>
        </div>
      </section>

      {/* Spacer to push rest of content below full-screen video */}
      <div className="h-screen"></div>

      {/* Features Section */}
     <section id="features" className="bg-black px-6 sm:px-12 pt-10 md:px-28 py-10 md:py-20 scroll-mt-20 relative z-10">

        <div className="flex flex-col-reverse md:flex-row w-full items-center justify-center  space-y-10 md:space-y-0 md:space-x-10">

         <div className="w-full md:w-3/5 text-white text-center  md:text-left">

            <p className="uppercase text-xl text-[#B5C0C9]">Introducing <span style={{fontFamily : "mokoto"}} >Alfred</span> </p>
            <h1 className="text-3xl text-[#EDF5FC]  my-2">
              The AI Project Decisions Engine
            </h1>
            <p className="text-lg  text-[#C2C4C6]">
              An AI-native project management platform built to drive speed,
              clarity, and certainty across your infrastructure lifecycle.
            </p>
          </div>
         <div className="w-full max-w-xl md:max-w-4xl">

            <video autoPlay loop muted playsInline className="w-full">
              <source src={timeline} type="video/mp4" />
            </video>
          </div>
        </div>

        <div className="text-white  mt-16 ">
          <p className="uppercase text-[#B5C0C9] text-lg mb-2">Features</p>
          <h1 className="text-3xl text-[#EDF5FC]">
            Alfred’s Unique Card-based framework makes projects easy to manage,
            collaborate, and AI ready
          </h1>
        </div>

        <Features />
        <Enterprise />
      </section>

      {/* About Us */}
      <section id="aboutus" className="scroll-mt-24 relative z-10">
        <Aboutus />
      </section>

      {/* Waitlist */}
      <section id="waitlist" className="scroll-mt-24 relative z-10">
        <Waitlist />
      </section>

      {/* Contact */}
      <section id="contactus" className="scroll-mt-24 relative z-10">
        <Contact />
      </section>
    </div>
  );
};

export default Home;
