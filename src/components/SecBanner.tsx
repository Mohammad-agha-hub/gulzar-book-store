import Image from "next/image";
import React from "react";

const SecBanner = () => {
  return (
    <div className="flex justify-center px-[6%] py-5">
    <div className="relative w-[90vw] h-40">
      <Image src={"/2ndbanner.png"} width={500} height={200} className="h-auto w-full rounded-2xl" alt="banner-2" />
    </div>
    </div>
  );
};

export default SecBanner;
