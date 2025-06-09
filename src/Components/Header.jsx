import logo from "../assets/Images/PathsetterLogo.png";

const Header = () => {
  return (
    <header>
      <div className="flex flex-row items-center justify-between  py-2 px-4">
        <div className="flex items-center gap-16">
          <img src={logo} alt="Logo" />
          <div className="flex gap-16 text-white">
            <a href="#hero">HOME</a>
            <a href="#features">FEATURES</a>
            <a href="#aboutus">ABOUT US</a>
          </div>
        </div>
        <a
          href="#waitlist"
          className="rounded-full border-[2px] p-1  px-4 text-md text-white"
        >
          GET A DEMO
        </a>
      </div>
    </header>
  );
};

export default Header;
