import Image from 'next/image'
import React from 'react'

const Banner = () => {
  return (
    <div className="h-full w-[100vw] flex px-[7%]">
      
        <Image
          className="rounded-2xl"
          alt="banner1"
          src={"/banner1.png"}
          width={1330} // Add actual image width
          height={200} // Add actual image height
        />
      </div>
    
  );
}

export default Banner
