import React from "react";
import CEO from "../assets/Images/Founder.png";
import linkedin from "../assets/Images/linkedin.png";

const Aboutus = () => {
  return (
    <div id="aboutus" className="w-full bg-black py-14 scroll-mt-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-start gap-10">
        {/* Left side: Text content */}
        <div className="text-white space-y-4 lg:w-2/3">
          <p className="uppercase text-2xl sm:text-3xl tracking-widest">About us</p>
          <h1 className="text-lg sm:text-xl pt-4 font-semibold text-[#EDF5FC]">
            Solving Infrastructure's Toughest Problems with AI. Together.
          </h1>
          <p className="text-[#9CA3AF] text-sm sm:text-base">
            At Pathsetter AI, we're re-inventing infrastructure
            project management — powered by intelligence, simplicity, and deep
            industry empathy.
          </p>
          <p className="text-[#9CA3AF] text-sm sm:text-base">
            Our founding team has lived the pain of infrastructure execution
            first-hand. We've seen how projects falter under complexity,
            communication gaps, and fragmented tools. That’s why we set out to
            build Alfred—an AI-native projects decision engine designed for the
            real world of infrastructure.
          </p>
          <p className="text-[#9CA3AF] text-sm sm:text-base">
            But we’re not building in isolation. We’re co-creating Alfred with
            project managers, site engineers, contractors, and clients across
            the industry. Every feature, workflow, and insight is shaped by real
            users solving real challenges on the ground.
          </p>

          <div className="pt-4 space-y-2">
            <h2 className="text-lg sm:text-xl font-semibold text-[#EDF5FC]">
              Our mission is bold:
            </h2>
            <p className="text-base sm:text-lg text-[#9CA3AF] leading-relaxed">
              To simplify decision-making, accelerate execution, and bring
              clarity to every infrastructure project.
            </p>
          </div>
        </div>

        {/* Divider only on large screens */}
        <div className="hidden lg:block w-px bg-gray-600 self-stretch" />

        {/* Right side: CEO section */}
        <div className="flex flex-col items-center text-white text-center space-y-4 lg:w-1/3 mt-10 lg:mt-0">
          <p className="uppercase tracking-widest text-[#B5C0C9] text-sm">Founder</p>
          <img
            src={CEO}
            alt="Founder & CEO"
            className="w-40 h-40 sm:w-48 sm:h-48 rounded-lg object-cover shadow-lg"
          />
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 items-center">
            <h3 className="text-lg sm:text-xl text-[#EDF5FC] font-semibold">Sridhar Gadhi</h3>
            <a
              href="https://www.linkedin.com/in/sridhargadhi/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={linkedin}
                alt="LinkedIn"
                className="invert brightness-200 w-6 h-6 sm:w-8 sm:h-8"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
