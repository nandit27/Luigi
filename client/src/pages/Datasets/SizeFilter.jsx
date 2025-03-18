import React from "react";

const SizeFilter = () => {
  return (
    <section className="w-full">
      <header className="flex items-center py-0.5 w-full text-sm leading-none text-gray-500">
        <h3 className="self-stretch my-auto">Size (rows)</h3>
      </header>
      <div className="px-1 mt-40 text-5xl leading-none border-solid bg-[#F3F4F6] border border-[#E5E7EB] rounded-[33554400px] text-[#ff9d0b] w-full">
        <div className="flex relative flex-col items-start self-stretch py-2 my-auto min-h-7">
          <div className="flex z-0 w-3 h-3 bg-amber-500 min-h-3 rounded-[33554400px]" />
          <div className="absolute -right-0.5 -top-5 z-0 py-0.5 px-1 rounded bg-zinc-700 w-[29px]">
            &lt; 1K
          </div>
        </div>
        <div className="flex grow shrink-0 self-start mr-0 h-1 bg-black basis-0 rounded-[33554400px] w-fit" />
        <div className="flex relative flex-col self-stretch py-2 my-auto min-h-7">
          <div className="flex z-0 self-end w-3 h-3 bg-amber-500 min-h-3 rounded-[33554400px]" />
          <div className="absolute right-0 -top-5 z-0 px-1 py-0.5 rounded bg-zinc-700 w-[29px]">
            &gt; 1T
          </div>
        </div>
      </div>
    </section>
  );
};

export default SizeFilter;
