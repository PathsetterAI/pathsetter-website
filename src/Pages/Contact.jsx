import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import alfred from "../assets/Images/PathsetterLogo.png";
import linkedin from "../assets/Images/linkedin.png";

gsap.registerPlugin(ScrollToPlugin); // ✅ Make sure this is registered!

const Contact = () => {
  const scrollToSection = (id) => {
    gsap.to(window, {
      duration: 1,
      scrollTo: { y: `#${id}`, offsetY: 80 }, // correct selector and offset
      ease: "power2.inOut",
    });
  };

  return (
    <div id="contactus" className="w-full h-full">
      <div className="px-36 py-10 bg-black text-white">
        <div className="flex items-center justify-between">
          <div>
            <img
              src={alfred}
              alt="alfred Logo"
              className="w-60 h-20 flex items-start text-left"
            />
          </div>
          {/* <div className="flex flex-row gap-6 text-[#D1D5DB] uppercase">
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("home");
              }}
            >
              Home
            </a>
            <a
              href="#features"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("features");
              }}
            >
              Features
            </a>
            <a
              href="#aboutus"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("aboutus");
              }}
            >
              About Us
            </a>
          </div> */}
        </div>

        <div className="pl-10">
          <div className="pt-10 space-y-2">
            <h1 className="uppercase text-[#CBD5E1]">Contact info:</h1>
            <h1 className="underline text-[#E2E8F0]">hello@pathsetter.ai</h1>
            <a
              href="https://www.linkedin.com/company/pathsetterai/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={linkedin}
                alt="LinkedIn"
                className="invert brightness-200 w-8 h-8"
              />
            </a>
          </div>

          <div className="pt-10 space-y-2">
            <h1 className="uppercase text-[#CBD5E1]">United States:</h1>
            <h1 className="text-[#E2E8F0]">
              Suite 219, 691 S Milpitas Blvd, Milpitas, CA
            </h1>
          </div>
          <div className="pt-10 space-y-2">
            <h1 className="uppercase text-[#CBD5E1]">India:</h1>
            <h1 className="text-[#E2E8F0]">
              Jayabheri Trendset Connect, Kondapur, Hyderabad
            </h1>
          </div>
        </div>

        <div className="pt-10">
          <hr />
        </div>
        <div className="flex flex-row text-[#E2E8F0] text-sm justify-between pt-10">
          <div>
            <h1>© 2025, Pathsetter.ai, Inc.</h1>
          </div>
          <div>
            <h1>Alfred by Pathsetter AI © 2025. All rights reserved.</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
