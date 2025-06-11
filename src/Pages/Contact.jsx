import React from "react";
import alfred from "../assets/Images/PathsetterLogo.png";
import instagram from "../assets/Images/instagram.png";
import twitter from "../assets/Images/new-twitter.png";
import youtube from "../assets/Images/youtube.png";

const Contact = () => {
  return (
    <div id="contactus" className="w-full h-full  ">
      <div className="px-36 py-10 bg-black text-white">
        <div className="flex items-center justify-between">
          <div>
            <img src={alfred} alt="alfred Logo" />
          </div>
        <div className="flex flex-row gap-6 uppercase">
  <a href="#home" >Home</a>
  <a href="#features" >Features</a>
  <a href="#aboutus" >About us</a>
</div>

        </div>
      
        <div>
          <div className="pt-10 space-y-2">
            <h1 className="uppercase ">Contact info:</h1>
            <h1 className="underline">hello@pathsetter.ai</h1>
            <h1>+1 (443) 813-3282</h1>
          </div>
          <div className="pt-10 space-y-2">
            <h1 className="uppercase">United States:</h1>
            <h1>Suite 219, 691 S Milpitas Blvd, Milpitas, CA</h1>
          </div>
          <div className="pt-10 space-y-2">
            <h1 className="uppercase">India:</h1>
            <h1>Jayabheri Trendset Connect, Kondapur, Hyderabad</h1>
          </div>
        </div>
        <div className="pt-10">
          <hr></hr>
        </div>
        <div className="flex flex-row justify-between pt-10">
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
