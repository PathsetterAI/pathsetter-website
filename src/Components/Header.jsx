import logo from "../assets/Images/PathsetterLogo.png";

const Header = ({ activeSection, setActiveSection }) => {
  const linkClasses = (section) =>
    `cursor-pointer ${
      activeSection === section ? "text-white font-semibold" : "text-white"
    }`;

  return (
    <header>
      <div className="flex flex-row items-center justify-between py-2 px-4">
        <div className="flex items-center gap-16">
          <img src={logo} alt="Logo" />
          <div className="flex gap-16 font-light">
           <a
  href="#home"
  onClick={(e) => {
    e.preventDefault();
    setActiveSection("home");
    document.getElementById("home")?.scrollIntoView({ behavior: "smooth" });
  }}
  className={linkClasses("home")}
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
          className="rounded-full border-[2px] p-1 px-4 text-md text-white"
        >
          GET A DEMO
        </a>
      </div>
    </header>
  );
};

export default Header;
