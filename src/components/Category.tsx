import Image from 'next/image';
import React from 'react'

const Category = () => {
  return (
    <div className="bg-[#F0F0F0] px-[16%] justify-between h-[83px] items-center flex">
      {/* LEFT */}
      <div className=" flex gap-3">
        <div className="bg-gradient-to-b from-[#77c5e4] to-[#2f9ac3] rounded-lg w-26 px-1 gap-1 h-[38px] flex items-center justify-center ">
          <span className="font-medium text-[12px] text-white">
            ورود/ثبت نام
          </span>
          <Image src={"/exit.png"} width={22} height={20} alt="exit" />
        </div>
        <div className="bg-gradient-to-b from-[#a3dd93] to-[#6AB361] rounded-lg w-22 h-[38px] flex items-center justify-center px-1 gap-1">
          <span className="font-medium text-[12px] text-white"> سبد خرید</span>
          <Image
            src={"/shopping-cart.png"}
            width={20}
            height={20}
            alt="shopping-cart"
          />
        </div>
      </div>
      {/* MID */}
      <div className="flex gap-5">
        <span className="font-normal text-[16px] text-black ">
          سوالات متداول
        </span>
        <span className="font-normal text-[16px] text-black ">درباره ما</span>
        <span className="font-normal text-[16px] text-black ">تماس با ما</span>
        <span className="font-normal text-[16px] text-black ">صفحه اصلی</span>
      </div>
      {/* RIGHT */}
      <div>
        <div className="bg-gradient-to-b from-[#77c5e4] to-[#2f9ac3] rounded-lg w-27 px-1 gap-1.5 h-[37px] flex items-center justify-center ">
          <span className="font-medium text-[12px] text-white">
            دسته بندی ها
          </span>
          <Image
            src={"/windows.png"}
            width={20}
            height={20}
            alt="window"
          />
        </div>
      </div>
    </div>
  );
}

export default Category
