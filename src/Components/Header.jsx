import logo from "../assets/Images/Alfredlogo.png";

const Header = () => {
  return (
    <header>
      <div className='flex flex-row items-center justify-between pt-10 px-32'>
        <div className='flex items-center gap-16'>
          <div>
            <img src={logo} alt='Logo' />
          </div>
          <div className='flex gap-16'>
            <a href="#hero" className="cursor-pointer">Home</a>
            <a href="#aboutus" className="cursor-pointer">About Us</a>
            <a href="#features" className="cursor-pointer">Features</a>
          </div>
        </div>
        <div>
          <h4 className='text-black rounded-full border-[2px] p-1 px-4 text-lg'>Get a Demo</h4>
        </div>
      </div>
    </header>
  );
};

export default Header;
