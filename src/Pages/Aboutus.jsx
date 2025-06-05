import React from "react";
import timeline from "../assets/Images/TimeLine.jpg";

const Aboutus = () => {
  return (
    <div id="aboutus" className="w-full bg-black px-28 py-20 scroll-mt-28">
      <div className="flex flex-row w-full items-center justify-center space-x-10">
        <div className="w-3/5 text-white">
          <p className="uppercase text-xl">About us</p>
          <h1 className="text-3xl font-bold my-2">
            Solving Infrastructure's Toughest Problems with AI. Together.
          </h1>
          <p className="text-lg font-sans ">
            At Pathsetter AI, we're building the future project management -
            powered by intelligence, simplicity, and deep industry empathy.
          </p>
          <p>
            Our founding team has lived the pain of infrastructure execution
            first-hand. We've seen how projects falter under complexity,
            communication gaps, and fragmented tools. Th
          </p>
        </div>
        <div>
          {/* <img src={timeline} alt="Time Line" className="w-full max-w-4xl" /> */}
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
