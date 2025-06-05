import React from 'react'
import timeline from "../assets/Images/TimeLine.jpg";

const Aboutus = () => {
  return (
     <div id="aboutus" className="w-full bg-black px-28 py-20 scroll-mt-28">
      
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

  )
}

export default Aboutus