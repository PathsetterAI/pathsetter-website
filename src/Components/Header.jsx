import { useState } from "react";
import logo from "../assets/Images/PathsetterLogo.png";
import menu from "../assets/Images/menu.png";
import close from "../assets/Images/close.png";



const Header = ({ activeSection, setActiveSection }) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const linkClasses = (section) =>
    `cursor-pointer transition duration-200 ${
      activeSection === section
        ? "text-[#FAFAFA] font-medium"
        : "text-[#D1D5DB]"
    }`;
const handleNavClick = (e, section) => {
    e.preventDefault();
    setActiveSection(section);
    setIsMobileMenuOpen(false);

    if (section === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
    }
  };
  const navLinks = ["home", "features", "aboutus", "contactus"];
  return (
  <header className="py-2 px-4">
  <div className="flex items-center justify-between">
    {/* Left side: Logo and Nav */}
    <div className="flex items-center w-full justify-between">
      <img src={logo} alt="Logo" className="w-44 h-auto" />

      {/* Desktop nav links */}
      <div className="hidden md:pr-[25rem] md:flex gap-12 font-light">
        {navLinks.map((section) => (
          <a
            key={section}
            href={`#${section}`}
            className={linkClasses(section)}
            onClick={(e) => handleNavClick(e, section)}
          >
            {section.toUpperCase().replace("US", " US")}
          </a>
        ))}
      </div>

      {/* Desktop button */}
      <a
        href="#waitlist"
        className="hidden md:inline-block rounded-full bg-black border border-gray-500 px-4 py-2 text-white text-sm md:text-md"
        onClick={() => setActiveSection("waitlist")}
      >
        GET A DEMO
      </a>

      {/* Mobile menu button */}
      <button
        className="md:hidden"
        onClick={() => setIsMobileMenuOpen((prev) => !prev)}
      >
        <img src={menu} alt="Menu" className="w-6 h-6" />
      </button>
    </div>
  </div>

 {isMobileMenuOpen && (
  <div className="md:hidden fixed top-6 left-0 w-full h-full bg-black/95 z-50 flex flex-col items-end px-6">
    
    {/* Close button image */}
    <img
      src={close} // Make sure the image path is correct
      alt="Close"
      onClick={() => setIsMobileMenuOpen(false)}
      className="absolute top-4 right-8 w-6 h-6 cursor-pointer"
    />

    <div className="backdrop-blur-md bg-black/20 shadow-md w-[2vg] rounded-xl py-6 space-y-4 text-white text-lg justify-end items-end text-right pr-10 border border-gray-600">
      {navLinks.map((section) => (
        <a
          key={section}
          href={`#${section}`}
          className="uppercase block w-full"
          onClick={(e) => handleNavClick(e, section)}
        >
          {section.replace("us", " Us")}
        </a>
      ))}

      <a
        href="#waitlist"
        className="bg-white text-black rounded-full ml-10 px-6 py-2 mt-6"
        onClick={() => {
          setActiveSection("waitlist");
          setIsMobileMenuOpen(false);
        }}
      >
        GET A DEMO
      </a>
    </div>
  </div>
)}


</header>

  );
};

export default Header;
