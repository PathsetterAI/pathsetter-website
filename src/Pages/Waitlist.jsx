import React from 'react';

const Waitlist = () => {
  return (
    <div className="w-full h-full">
      <div
        style={{
          background: 'radial-gradient(45.39% 100% at 50% 0%, #393333 0%, #0A0A0A 100%)',
        }}
        className=" px-10 py-8 text-white"
      >
        <h1 className="uppercase text-sm tracking-widest mb-10">Join the waitlist</h1>

        <form className="flex flex-col gap-6">
          
          <div className="flex flex-col md:flex-row gap-6 w-full">
            <div className="flex flex-col w-full">
              <label className="text-sm mb-2">Full Name</label>
              <input
                type="text"
                placeholder="John doe"
                className="w-full px-4 py-2 bg-[#282828] border border-[#555555] rounded outline-none"
              />
            </div>
            <div className="flex flex-col w-full">
              <label className="text-sm mb-2">Email ID</label>
              <input
                type="email"
                placeholder="email@example.com"
                className="w-full px-4 py-2 bg-[#282828] border border-[#555555] rounded outline-none"
              />
            </div>
            <div className="flex flex-col w-full">
              <label className="text-sm mb-2">Designation</label>
              <select
                className="w-full px-4 py-2 bg-[#282828] border border-[#555555] rounded outline-none"
              >
                <option>Product Manager</option>
                <option>Developer</option>
                <option>Designer</option>
              </select>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center mt-4">
            <button
              type="submit"
              className="px-6 py-2 border-2 border-[#555555] rounded-full bg-[#0A0A0A] text-white hover:bg-[#1a1a1a] transition"
            >
              Submit Now
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Waitlist;
