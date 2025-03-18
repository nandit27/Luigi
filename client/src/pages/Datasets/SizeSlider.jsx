import React from "react";

const SizeSlider = () => {
  return (
    <section className="mb-10">
      <h2 className="mb-4 text-sm leading-5 text-gray-500">Size (rows)</h2>
      <div className="relative mx-0 my-6 h-1.5">
        <div className="w-full h-1.5 bg-gray-100 border border border-solid rounded-[33554400px]">
          <div className="absolute top-px left-px h-1 bg-black rounded-[33554400px] w-[376px]" />
        </div>

        <div className="flex absolute flex-col items-start px-0 py-2 h-7 top-[-11px] w-[27px]">
          <div className="w-3 h-3 bg-amber-500 rounded-full" />
          <div className="absolute -top-5 px-1 py-0.5 text-xs leading-4 text-amber-500 rounded bg-zinc-700">
            &lt; 1K
          </div>
        </div>

        <div className="flex absolute flex-col items-start px-0 py-2 h-7 top-[-11px] w-[27px]">
          <div className="absolute -top-5 px-1 py-0.5 text-xs leading-4 text-amber-500 rounded bg-zinc-700">
            &gt; 1T
          </div>
        </div>
      </div>
    </section>
  );
};

export default SizeSlider;
