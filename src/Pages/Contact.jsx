import React from "react";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import alfred from "../assets/Images/PathsetterLogo.png";
import linkedin from "../assets/Images/linkedin.png";

gsap.registerPlugin(ScrollToPlugin);

const Contact = () => {
  const scrollToSection = (id) => {
    gsap.to(window, {
      duration: 1,
      scrollTo: { y: `#${id}`, offsetY: 80 },
      ease: "power2.inOut",
    });
  };

  return (
    <div id="contactus" className="w-full h-full">
      <div className="px-4 sm:px-8 md:px-16 lg:px-36 py-10 bg-black text-white">
        {/* Logo and optional nav links */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between space-y-6 sm:space-y-0">
          <div>
            <img
              src={alfred}
              alt="alfred Logo"
              className="w-48 sm:w-60 h-auto"
            />
          </div>

          {/* Uncomment if needed */}
          {/* 
          <div className="flex flex-wrap gap-4 text-[#D1D5DB] uppercase text-sm sm:text-base">
            <a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection("home"); }}>Home</a>
            <a href="#features" onClick={(e) => { e.preventDefault(); scrollToSection("features"); }}>Features</a>
            <a href="#aboutus" onClick={(e) => { e.preventDefault(); scrollToSection("aboutus"); }}>About Us</a>
          </div> 
          */}
        </div>

        {/* Content */}
        <div className="pl-0 sm:pl-6 md:pl-10 mt-10 space-y-10">
          {/* Contact Info */}
          <div className="space-y-2">
            <h1 className="uppercase text-[#CBD5E1] text-sm">Contact info:</h1>
            <h1 className="underline text-[#E2E8F0] text-sm">hello@pathsetter.ai</h1>
            <a
              href="https://www.linkedin.com/company/pathsetterai/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-2"
            >
              <img
                src={linkedin}
                alt="LinkedIn"
                className="invert brightness-200 w-6 h-6 sm:w-8 sm:h-8"
              />
            </a>
          </div>

          {/* US Address */}
          <div className="space-y-2">
            <h1 className="uppercase text-[#CBD5E1] text-sm">United States:</h1>
            <h1 className="text-[#E2E8F0] text-sm">
              Suite 219, 691 S Milpitas Blvd, Milpitas, CA
            </h1>
          </div>

          {/* India Address */}
          <div className="space-y-2">
            <h1 className="uppercase text-[#CBD5E1] text-sm">India:</h1>
            <h1 className="text-[#E2E8F0] text-sm">
              Jayabheri Trendset Connect, Kondapur, Hyderabad
            </h1>
          </div>
        </div>

        {/* Divider */}
        <div className="pt-10">
          <hr className="border-gray-700" />
        </div>

        {/* Footer */}
        <div className="flex flex-col sm:flex-row justify-between text-[#E2E8F0] text-xs sm:text-sm pt-6 space-y-4 sm:space-y-0">
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
