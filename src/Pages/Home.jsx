import React from "react";
import AiImage from "../assets/Images/AiImage.jpg";
import Header from "../Components/Header";
import timeline from "../assets/Videos/Alfredintro.mp4";
import Features from "./Features";
import Waitlist from "./Waitlist";
import Contact from "./Contact";
import Aboutus from "./Aboutus";
import Enterprise from "./Enterprise";


const Home = () => {
  return (
    <div className="relative w-full">
      <div className="fixed top-0 left-0 w-full z-50">
        <Header />
      </div>
      <div id="hero" className=" h-screen sticky top-0 z-0">
        <img
          src={AiImage}
          alt="Background"
          // className="w-full h-full oject-cover"
          className="w-full h-full object-cover transition-all duration-700 ease-in-out"
        />
        {/* <div className="absolute top-0 left-0 w-full z-20">
          <Header />
        </div> */}
        <div className="absolute inset-0 z-10 flex items-center justify-center px-2">
          <div className="flex flex-col items-start  ">
            <h1 className="text-5xl text-black font-bold">
              The Future of Infrastructure is here…
            </h1>
            <p className="text-lg text-black">
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
                <h1 className="text-3xl font-bold my-2">
                  The AI Project Decisions Engine
                </h1>
                <p className="text-lg font-sans ">
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
              <p className="uppercase text-lg">Features</p>
              <h1 className="text-3xl font-medium ">
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
