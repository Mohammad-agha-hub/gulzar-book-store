import Image from 'next/image';
import React from 'react'

const Navbar = () => {
  return (
    <div className="flex items-center justify-between px-[16%] py-3">
      {/* LEFT */}
      <div className="flex gap-5 border items-center justify-between border-[#0e99cf] py-1 px-[5px] pr-2 rounded-xl">
        <div className="bg-gradient-to-b from-[#77c5e4] to-[#2f9ac3] rounded-md w-22 h-9 flex items-center justify-center font-medium text-[14px] text-white">
          خرید کتاب
        </div>
        <div className="mr-1 font-medium text-[14px]">فروش کتاب</div>
      </div>
      {/* Mid */}
      <div className="flex items-center relative">
        {/* Gradient box with image */}
        <div className="bg-gradient-to-b ml-1 from-[#77c5e4] to-[#2f9ac3] h-9 w-13 flex items-center justify-center rounded-md absolute left-0">
          <Image src="/transparency.png" width={23} height={20} alt="icon" />
        </div>

        {/* Input field */}
        <input
          type="text"
          placeholder="... جستجوی نام کتاب, نویسنده, مترجم"
          className="h-11 w-[520px] text-right pr-5 border border-[#0E99CF] focus:outline-none focus:ring-1 focus:ring-[#0e98cfd1] rounded-lg text-[16px]"
        />
      </div>

      {/* Right */}
      <Image
        src={"/logo.jpeg"}
        height={35}
        width={50}
        alt="logo"
        className='rounded-full'
      />
    </div>
  );
}

export default Navbar
