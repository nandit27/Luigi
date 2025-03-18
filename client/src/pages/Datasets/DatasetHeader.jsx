import React from "react";

const DatasetHeader = () => {
  return (
    <header className="flex flex-wrap gap-5 justify-between max-md:max-w-full">
      <div className="flex flex-col items-start pb-2 my-auto max-md:max-w-full">
        <h1 className="text-4xl font-bold leading-none text-white">Datasets</h1>
        <p className="flex flex-wrap gap-1.5 items-center self-stretch mt-7 text-base leading-none text-orange-600">
          Explore, analyze, and share quality data.{" "}
          <a href="#" className="border-b border-[#9AA0A6] text-white">
            Learn more
          </a>
          <span>about data</span>
        </p>
        <p className="mt-1.5 text-base leading-none text-orange-600">
          types, creating, and collaborating.
        </p>
        <button className="flex gap-2 items-center py-2.5 pr-4 pl-3 mt-7 rounded-3xl bg-neutral-800 min-h-9">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/bbf3c9cfde88474a830baa845a12da21/1b45abf1a07546aec0160295b973187b78df773e3b8865c56fa83dd931a02b45?placeholderIfAbsent=true"
            alt=""
            className="object-contain self-stretch my-auto aspect-square w-[18px]"
          />
          <span className="z-10 -ml-8 text-sm font-bold leading-none text-center text-white max-md:ml-2.5">
            New Dataset
          </span>
        </button>
      </div>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/bbf3c9cfde88474a830baa845a12da21/f2a40c476fac36e68bc493d0cc1d1ead104ee48aa6014b3db43926eb9c1b2436?placeholderIfAbsent=true"
        alt=""
        className="object-contain shrink-0 max-w-full rounded-xl aspect-[0.97] w-[203px]"
      />
    </header>
  );
};

export default DatasetHeader;
