import React from 'react'

const Waitlist = () => {
  return (
    <div className='w-full h-full'>
        <div style={{background: 'radial-gradient(45.39% 100% at 50% 0%, #393333 0%, #0A0A0A 100%)'}}   className="min-h-screen px-10 py-20 text-white">
            <h1 className='uppercase '>Join the waitlist</h1>

            <div className='flex flex-row justify-between items-center'>
                <div>
                    <h1>Full Name</h1>
                    <input type='text' placeholder='John doe' className='border-[#555555] w-full px-2 p-1  border-[1px] bg-[#282828] '  />
                </div>
                  <div>
                    <h1>Email ID</h1>
                    <input type='text' placeholder='email@example.com' className='border-[#555555] w-full px-2 p-1 border-[1px] bg-[#282828] ' />
                </div>
                  <div>
                    <h1>Designation</h1>
                    <input type='text' placeholder='Product Manager' className='border-[#555555] w-full border-[1px] px-2 p-1 bg-[#282828]' />
                </div>
            </div>
            <div>
                <button className='bg-[#0A0A0A] border-[#555555] border-[2px] rounded-xl p-1'>Submit Now</button>
            </div>
        </div>

    </div>
  )
}

export default Waitlist