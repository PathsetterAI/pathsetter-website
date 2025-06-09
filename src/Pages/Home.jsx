import React from "react";
import AiImage from "../assets/Images/AiImage.jpg";
import Header from "../Components/Header";
// import timeline from "../assets/Videos/Alfredintro.mp4";
import timeline from "../assets/Videos/red.mp4";
import intro from "../assets/Videos/IntroVideo.mp4";

import Features from "./Features";
import Waitlist from "./Waitlist";
import Contact from "./Contact";
import Aboutus from "./Aboutus";
import Enterprise from "./Enterprise";

const Home = () => {
  return (
    <div className="relative w-full">
      {/* <div className="fixed top-0 left-0 w-full z-50">
        <Header />
      </div> */}
      <div className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/20 shadow-md">
        <Header />
      </div>
      <div id="hero" className=" h-screen sticky top-0 z-0">
        {/* <img
          src={AiImage}
          alt="Background"
          // className="w-full h-full oject-cover"
          className="w-full h-full object-cover transition-all duration-700 ease-in-out"
        /> */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover transition-all duration-700 ease-in-out"
        >
          <source src={intro} type="video/mp4" />
        </video>
        {/* <div className="absolute top-0 left-0 w-full z-20">
          <Header />
        </div> */}
        {/* <div className="absolute inset-0 z-10 flex items-center justify-left px-2 ">
          <div className="flex flex-col items-start  ">
            <h1 className="text-5xl text-black font-bold">
              The Future of Infrastructure is here…
            </h1>
            <p className="text-lg text-black">
              From planning to execution, harness AI to reimagine how
              Infrastructure gets delivered
            </p>
          </div>
        </div> */}
        <div className="absolute bottom-0 left-0 z-10 px-20 mb-20 items-center">
          <div className="flex flex-col items-start">
            <h1 className="text-5xl text-white font-bold">
              The Future of Infrastructure is here…
            </h1>
            <p className="text-lg text-white">
              From planning to execution, harness AI to reimagine how
              Infrastructure gets delivered
            </p>
          </div>
        </div>
      </div>
      <div id="info" className="relative z-10">
        <div>
          <div
            id="features"
            className="w-full bg-black px-28 py-20 scroll-mt-28"
          >
            <div className="flex flex-row w-full items-center justify-center space-x-10">
              <div className="w-3/5 text-white">
                <p className="uppercase text-xl">
                  Introducing <span className="">Alfred</span>
                </p>
                <h1 className="text-3xl font-semiBold my-2">
                  The AI Project Decisions Engine
                </h1>
                <p className="text-lg">
                  An AI-native project management platform built to drive speed,
                  clarity, and certainty across your infrastructure lifecycle.
                </p>
              </div>
              <div className="w-full max-w-4xl">
                <video autoPlay loop muted playsInline className="w-full">
                  <source src={timeline} type="video/mp4" />
                </video>
              </div>
            </div>
          </div>

          <div
            id="features"
            className="w-full bg-black px-28 py-20 scroll-mt-20"
          >
            <div className="text-white">
              <p className="uppercase text-lg mb-2">Features</p>
              <h1 className="text-3xl ">
                Alfred’s Unique Card-based framework makes projects-easy to
                manage, collaborate, and AI ready
              </h1>
            </div>
            <Features />
            <Enterprise />
          </div>
        </div>
        <div id="aboutus">
          <Aboutus />
        </div>
        <Waitlist />

        <Contact />
      </div>
    </div>
  );
};

export default Home;
