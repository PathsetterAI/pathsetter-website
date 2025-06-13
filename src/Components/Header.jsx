import logo from "../assets/Images/PathsetterLogo.png";

const Header = ({ activeSection, setActiveSection }) => {
  const linkClasses = (section) =>
    `cursor-pointer transition duration-200 ${
      activeSection === section
        ? "text-[#FAFAFA] font-medium"
        : "text-[#D1D5DB]"
    }`;

  return (
  <header>
      <div className="flex flex-row items-center justify-between py-2 px-4">
        <div className="flex items-center gap-16">
          <img src={logo} alt="Logo" className="w-60 h-20" />
          <div className="flex gap-16 font-light">
        {["home", "features", "aboutus", "contactus"].map((section) => (
  <a
    key={section}
    href={`#${section}`}
    className={linkClasses(section)}
    onClick={(e) => {
      e.preventDefault();
      setActiveSection(section);

      if (section === "home") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
      }
    }}
  >
    {section.toUpperCase().replace("US", " US")}
  </a>
))}

          </div>
        </div>

        <a
          href="#waitlist"
          className={`rounded-full bg-black border-[0.5px] border-gray-500 px-4 py-2 text-white text-md tracking-wider ${
            activeSection === "waitlist" ? "text-white" : ""
          }`}
          onClick={() => setActiveSection("waitlist")}
        >
          GET A DEMO
        </a>
      </div>
    </header>
  );
};

export default Header;
