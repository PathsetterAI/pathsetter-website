import React from "react";
import alfred from "../assets/Images/PathsetterLogo.png";
import instagram from "../assets/Images/instagram.png";
import twitter from "../assets/Images/new-twitter.png";
import linkedin from "../assets/Images/linkedin.png";

const Contact = () => {
  return (
    <div id="contactus" className="w-full h-full  ">
      <div className="px-36 py-10 bg-black text-white">
        <div className="flex items-center justify-between">
          <div>
            <img src={alfred} alt="alfred Logo" className="w-60 h-20 flex items-start text-left" />
          </div>
          <div className="flex flex-row gap-6 text-[#D1D5DB] uppercase">
            <a href="#home">Home</a>
            <a href="#features">Features</a>
            <a href="#aboutus">About us</a>
          </div>
        </div>

        <div className="pl-10">
          <div className="pt-10 space-y-2">
            <h1 className="uppercase text-[#CBD5E1] ">Contact info:</h1>
            <h1 className="underline text-[#E2E8F0]">hello@pathsetter.ai</h1>
              <a href="https://www.linkedin.com/company/pathsetterai/" target="_blank">
                       <img
              src={linkedin}
              alt="Linked In"
              className="invert brightness-200 w-8 h-8" 
            />
            </a>
          </div>
          <div className="pt-10 space-y-2">
            <h1 className="uppercase text-[#CBD5E1]">United States:</h1>
            <h1 className="text-[#E2E8F0]">Suite 219, 691 S Milpitas Blvd, Milpitas, CA</h1>
          </div>
          <div className="pt-10 space-y-2">
            <h1 className="uppercase text-[#CBD5E1]">India:</h1>
            <h1 className="text-[#E2E8F0]">Jayabheri Trendset Connect, Kondapur, Hyderabad</h1>
          </div>
        </div>
        <div className="pt-10">
          <hr></hr>
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
