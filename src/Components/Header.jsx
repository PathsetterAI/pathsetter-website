import logo from "../assets/Images/PathsetterLogo.png";

const Header = () => {
  return (
    <header>
      <div className="flex flex-row items-center justify-between pt-10 px-32">
        <div className="flex items-center gap-16">
          <img src={logo} alt="Logo" />
          <div className="flex gap-16 text-white">
            <a href="#hero">HOME</a>
            <a href="#features">FEATURES</a>
            <a href="#aboutus">ABOUT US</a>
          </div>
        </div>
        <h4 className="rounded-full border-[2px] p-1  px-4 text-lg text-white">
          GET A DEMO
        </h4>
      </div>
    </header>
  );
};

export default Header;
