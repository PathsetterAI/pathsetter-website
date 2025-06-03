import React from 'react'
import timeline from "../assets/Images/TimeLine.jpg"

const Aboutus = () => {
  return (
    <div className="p-10">
      <div className='flex flex-row  w-full h-full items-center justify-center'>

   
      <div className='w-2/5'>
      <p className="uppercase text-xl">Introducing <span className="uppercase font-semibold text-xl">Alfred</span></p>
      <h1 className="text-4xl">The AI Project Decisions Engine</h1>
      <p className="text-xl font-sans">An AI-native project management platform built to <br></br> drive speed, clarity, and certainty across your<br></br> infrastructure lifecycle.</p>
      </div>
      <div>
      <img src={timeline} alt='Time Line '  />
      </div>
      </div>
    </div>
  )
}

export default Aboutus