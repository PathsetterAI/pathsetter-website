import React from 'react';
import AiImage from "../assets/Images/AiImage.jpg";
import Header from '../Components/Header';
import timeline from "../assets/Images/TimeLine.jpg";
import Features from './Features';
import Waitlist from './Waitlist';
import Contact from './Contact';


const Home = () => {
  return (
    <div className="relative w-full">
      {/* Hero Section */}
      <div id="hero" className="relative h-screen">
        <img
          src={AiImage}
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute top-0 left-0 w-full z-10">
          <Header />
        </div>
        <div className="absolute inset-0 z-10 flex px-28 items-center justify-start">
          <div className="flex flex-col items-start space-y-4">
            <h1 className="text-5xl text-black font-bold">
              The Future of Infrastructure is here…
            </h1>
            <p className="text-lg text-black">
              From planning to execution, harness AI to reimagine how Infrastructure gets delivered
            </p>
          </div>
        </div>
      </div>

      {/* About Us Section */}
      <div id="aboutus" className="w-full bg-black px-28 py-20 scroll-mt-20">
      
        <div className="flex flex-row w-full items-center justify-center space-x-10">
          <div className="w-3/5 text-white">
            <p className="uppercase text-xl">Introducing <span className="font-semibold">Alfred</span></p>
            <h1 className="text-3xl font-bold my-2">The AI Project Decisions Engine</h1>
            <p className="text-lg font-sans ">
              An AI-native project management platform built to drive speed, clarity, and certainty across your infrastructure lifecycle.
            </p>
          </div>
          <div>
            <img src={timeline} alt="Time Line" className="w-full max-w-4xl" />
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div id="features" className="w-full bg-black px-28 py-20 scroll-mt-20">
        <div className='text-white'>

        <p className="uppercase text-lg">Features</p>
        <h1 className="text-3xl font-medium ">
          Alfred’s Unique Card-based framework makes projects easy to manage, collaborate, and AI ready
        </h1>
        </div>
      <Features />
      <Waitlist />
      </div>
      <Contact />
    </div>
  );
};

export default Home;
