"use client";

import Image from "next/image";
import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

const FirstCarousel = () => {
  const [sliderRef] = useKeenSlider({
    loop: false,
    mode: "free-snap",
    rtl: true, // Right-to-left for Persian/Arabic
    slides: {
      perView: "auto",
      spacing: 12,
    },
    breakpoints: {
      "(min-width: 320px)": {
        slides: { perView: 2, spacing: 8 },
      },
      "(min-width: 640px)": {
        slides: { perView: 3, spacing: 10 },
      },
      "(min-width: 768px)": {
        slides: { perView: 4, spacing: 12 },
      },
      "(min-width: 1024px)": {
        slides: { perView: 5, spacing: 12 },
      },
      "(min-width: 1280px)": {
        slides: { perView: 6, spacing: 12 },
      },
    },
  });

  const books = Array(6).fill({
    title: "شفای زندگی",
    condition: "در حد نو",
    price: "۱۳۰٬۲۵۰",
  });

  return (
    <div className="flex justify-center mt-3 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-[1340px]">
        <div className="w-full flex flex-col items-center justify-center p-3 sm:p-5 border rounded-xl border-gray-300">
          {/* HEADER */}
          <div className="bg-gray-200 w-full rounded-xl py-3 px-4 flex items-center justify-between mb-6">
            <div className="flex gap-2 items-center">
              <div className="pb-1">
                <Image
                  src={"/left-arrow.png"}
                  width={12}
                  height={12}
                  alt="window"
                />
              </div>
              <span className="text-sm sm:text-base">مشاهده همه</span>
            </div>
            <div className="pr-2 sm:pr-5">
              <span className="font-semibold text-sm sm:text-base">
                پر فروش ترین کتاب ها
              </span>
            </div>
          </div>

          {/* CAROUSEL */}
          <div ref={sliderRef} className="keen-slider w-full pt-3 pb-4">
            {books.map((book, index) => (
              <div
                key={index}
                className="keen-slider__slide !min-w-[150px] sm:!min-w-[180px] md:!min-w-[200px] lg:!min-w-0"
              >
                <div className="relative flex justify-center h-[290px] sm:h-[330px] md:h-[360px]">
                  {/* Background card */}
                  <div className="absolute top-8 inset-x-0 bottom-0 bg-white border border-gray-200 rounded-2xl"></div>

                  {/* Image on top */}
                  <Image
                    src={"/book1.png"}
                    width={180}
                    height={150}
                    alt="book"
                    className="absolute top-0 rounded-xl w-[140px] sm:w-[160px] md:w-[180px] h-auto z-10"
                  />

                  {/* Button on top of image */}
                  <button className="absolute bottom-13 sm:bottom-16 text-xs sm:text-sm text-white bg-gradient-to-b from-[#9AD78B] px-3 sm:px-4 py-1 sm:py-[5px] rounded-2xl to-[#70B767] z-20">
                    {book.condition}
                  </button>

                  {/* Title and price */}
                  <span className="absolute bottom-9 sm:bottom-8 text-sm sm:text-base z-20">
                    {book.title}
                  </span>
                  <div className="absolute flex gap-2 bottom-4 sm:bottom-3 z-20">
                    <span className="text-xs sm:text-sm text-green-600">
                      تومان
                    </span>
                    <span className="text-xs sm:text-sm text-green-600">
                      {book.price}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstCarousel;
