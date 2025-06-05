import React from "react";
import CEO from "../assets/Images/Founder.png";

const Aboutus = () => {
  return (
    <div id="aboutus" className="w-full bg-black py-24 px-28 scroll-mt-28">
      <div className="max-w-5xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-2 lg:gap-10">
        
     
        <div className="lg:w-2/3 text-white space-y-6">
          <p className="uppercase text-xl tracking-widest">About us</p>
          <h1 className="text-xl font-bold leading-snug">
            Solving Infrastructure's Toughest Problems with AI. Together.
          </h1>
          <p className="text-lg leading-relaxed">
            At Pathsetter AI, we're building the future of infrastructure project management —
            powered by intelligence, simplicity, and deep industry empathy.
          </p>
          <p className="text-lg leading-relaxed">
            Our founding team has lived the pain of infrastructure execution first-hand. We've seen
            how projects falter under complexity, communication gaps, and fragmented tools.
            That’s why we set out to build Alfred—an AI-native projects decision engine designed
            for the real world of infrastructure.
          </p>
          <p className="text-lg leading-relaxed">
            But we’re not building in isolation. We’re co-creating Alfred with project managers,
            site engineers, contractors, and clients across the industry. Every feature, workflow,
            and insight is shaped by real users solving real challenges on the ground.
          </p>

          <div>
            <h2 className="text-2xl font-semibold mb-2">Our mission is bold:</h2>
            <p className="text-lg leading-relaxed">
              To simplify decision-making, accelerate execution, and bring clarity to every
              infrastructure project—one intelligent card at a time.
            </p>
          </div>

          <button className="mt-6 rounded-full border border-gray-500 px-6 py-2 text-white hover:bg-white hover:text-black transition">
            Join us on the path to smarter infrastructure.
          </button>
        </div>
     <div className="hidden lg:block w-px bg-gray-600 self-stretch" />
      
        <div className="flex flex-col items-start text-white text-center  space-y-4">
          <p className="uppercase tracking-widest text-sm">Founder</p>
          <img src={CEO} alt="Founder & CEO" className="w-48 h-48 rounded-lg object-cover shadow-lg" />
          <h3 className="text-xl font-bold">Sridhar Gadhi</h3>
          <p className="text-sm text-gray-300">Founder & CEO</p>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
