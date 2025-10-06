import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="pt-4">
      <div className="flex py-4 px-[12%] bg-[#E2E7E9] justify-between flex-row-reverse">
        <div className="flex items-center gap-2">
          <Image
            src={"/headphone.svg"}
            width={50}
            height={50}
            alt="headphone"
          />
          <span>پشتیبانی تلفنی</span>
        </div>
        <div className="flex items-center gap-2">
          <Image src={"/box2.svg"} width={50} height={50} alt="headphone" />
          <span>ضمانت کیفیت کتاب</span>
        </div>
        <div className="flex items-center gap-2">
          <Image src={"/box3.svg"} width={50} height={50} alt="headphone" />
          <span>فرصت 7 روزه بازگشت</span>
        </div>
        <div className="flex items-center gap-2">
          <Image src={"/box4.svg"} width={50} height={50} alt="headphone" />
          <span>خرید مستقیم از ریباکس</span>
        </div>
      </div>
      <div className="flex py-2 px-[10%] bg-[#E7EDF1] justify-between items-center">
        <div className="border border-gray-500 rounded-xl p-1">
          <Image
            src={"/rating-logo.png"}
            height={100}
            width={100}
            alt="rating-logo"
          />
        </div>
        <div className="flex flex-col items-end">
          <Image src={"/logo.png"} width={100} height={100} alt="logo" />
          <p className="text-base font-normal ">
            آدرس: تهران، میدان انقلاب، خیابان 12 فروردین، کوچه نوروز پلاک 27
            طبقه سوم.
          </p>
          <p className="text-base font-normal ">کد پستی : ۱۳۱۴۶۸۵۳۵۵</p>
        </div>
      </div>
      <div className="flex justify-center">
        <hr className="w-[80vw]" />
      </div>
      <div className=" py-4 bg-[#E7EDF1] flex justify-between px-[10%]">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <span>۰۲۱-۶۶۴۰۱۲۵۲</span>
            <div className="flex items-center justify-center bg-gradient-to-b from-[#9AD78B] to-[#70B767] h-10 w-10 rounded-full">
              <Image
                src={"/telephone.png"}
                width={25}
                height={25}
                alt="telephone"
              />
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span>info@rebox.ir</span>
            <div className="bg-gradient-to-b from-[#9AD78B] to-[#70B767] flex justify-center items-center h-10 w-10 rounded-full">
              <Image src={"/email.png"} width={25} height={25} alt="email" />
            </div>
          </div>
        </div>
        <div className="flex gap-7">
          <div className="flex flex-col gap-1">
            <h1 className="font-bold text-base">پیوند های مفید</h1>
            <span className="font-medium text-sm">فرایند خرید</span>
            <span className="font-medium text-sm">فرایند فروش</span>
            <span className="font-medium text-sm">خرید کتاب دانشگاهی</span>
            <span className="font-medium text-sm">خرید رمان</span>
            <span className="font-medium text-sm">خرید کتاب کنکور</span>
          </div>
          <div className="flex flex-col gap-1">
            <h1 className="font-bold text-base">اعتماد به ما</h1>
            <span className="font-medium text-sm">قوانین و مقررات</span>
            <span className="font-medium text-sm">موقعیت های شغلی</span>
            <span className="font-medium text-sm">سوالات متداول</span>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <hr className="w-[80vw]" />
      </div>
      <div className="flex bg-[#E7EDF1] justify-center gap-5 py-2">
        <Image src={"/instagram.png"} width={30} height={50} alt="instagram" />
        <Image src={"/twitter.png"} width={30} height={50} alt="twitter" />
      </div>
      <div className="flex justify-center">
        <hr className="w-[80vw]" />
      </div>
      <div className="flex bg-[#E7EDF1] justify-center py-2">
        <span className="py-2">
          کلیه حقوق مادی و معنوی این وبسایت متعلق به ریباکس می باشد.
        </span>
      </div>
    </div>
  );
};

export default Footer;
