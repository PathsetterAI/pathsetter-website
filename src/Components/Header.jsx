import logo from "../assets/Images/PathsetterLogo.png";

const Header = ({ activeSection, setActiveSection }) => {
  const linkClasses = (section) =>
    `cursor-pointer ${
      activeSection === section ? "text-[#FAFAFA] font-medium" : "text-[#D1D5DB]"
    }`;

  return (
    <header>
      <div className="flex flex-row items-center justify-between py-2 px-4">
        <div className="flex items-center gap-16">
          <img src={logo} alt="Logo" className="w-60 h-20" />
          <div className="flex gap-16 font-light">
            <a
              href="#home"
                
              className={linkClasses("home")}
              onClick={() => setActiveSection("home")}
            >
              HOME
            </a>

            <a
              href="#features"
              className={linkClasses("features")}
              onClick={() => setActiveSection("features")}
            >
              FEATURES
            </a>
            <a
              href="#aboutus"
              className={linkClasses("aboutus")}
              onClick={() => setActiveSection("aboutus")}
            >
              ABOUT US
            </a>
            <a
              href="#contactus"
              className={linkClasses("contactus")}
              onClick={() => setActiveSection("contactus")}
            >
              CONTACT US
            </a>
          </div>
        </div>
      <a
  href="#waitlist"
  className="rounded-full bg-black border-[0.5px] border-gray-500 px-4 py-2 text-white text-md tracking-wider">
  GET A DEMO
</a>

      </div>
    </header>
  );
};

export default Header;
