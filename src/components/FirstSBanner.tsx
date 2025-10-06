import Image from "next/image";
import React from "react";

interface images {
    img1:string,
    img2:string
}
const FirstSBanner = ({img1,img2}:images) => {
  return (
    <div className="px-[6%] py-5">
      <div className="flex gap-5 justify-center">
        {/* LEFT */}
        <div className="w-1/2">
          <Image
            src={img1}
            width={650}
            height={200}
            alt="left-img"
            className="w-full h-auto"
          />
        </div>
        {/* RIGHT */}
        <div className="w-1/2">
          <Image
            src={img2}
            width={650}
            height={200}
            alt="left-img"
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default FirstSBanner;
