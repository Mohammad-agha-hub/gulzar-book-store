import Image from "next/image";
import React from "react";
interface genre {
  title:string,
  image:string
}
interface Genres {
  genres:genre[]
}
const Genre = ({genres}:Genres) => {
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

          <div className="grid grid-cols-4 gap-4">
            {genres.map((genre,index)=>(
            <div className="border flex flex-col gap-1 items-center  border-gray-200 bg-[#F5F5F5] rounded-lg p-3">
              <Image
                src={genre.image}
                width={270}
                height={250}
                alt="genres"
                className="border border-gray-300 bg-[#f5f5f5] rounded-lg p-2"
              />
              <span className="text-base font-medium text-[rgb(39,41,47)] mt-2">
                {genre.title}
              </span>
            </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Genre;
