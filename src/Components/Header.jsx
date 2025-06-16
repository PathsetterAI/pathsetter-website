import { useState } from "react";
import logo from "../assets/Images/PathsetterLogo.png";
import menu from "../assets/Images/menu.png";


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

  {/* Mobile Navigation */}
  {isMobileMenuOpen && (
    <div className="md:hidden fixed top-36 left-0 w-full h-full bg-black/95 z-50 flex flex-col items-center justify-center space-y-8 text-white text-lg">
      {navLinks.map((section) => (
        <a
          key={section}
          href={`#${section}`}
          className="uppercase pl-40 "
          onClick={(e) => handleNavClick(e, section)}
        >
          {section.replace("us", " Us")}
        </a>
      ))}

      <a
        href="#waitlist"
        className="rounded-full bg-white ml-40 text-black px-6 py-2 mt-4"
        onClick={() => {
          setActiveSection("waitlist");
          setIsMobileMenuOpen(false);
        }}
      >
        GET A DEMO
      </a>
    </div>
  )}
</header>

  );
};

export default Header;
