import React from "react";

const SearchBar = () => {
    return (
      <div className="flex flex-col justify-center self-end px-1.5 py-8 mr-20 max-w-full bg-neutral-900 w-[1213px] max-md:mr-2.5">
        <div className="relative flex items-center pr-1.5 pl-6 w-full h-12 rounded min-w-[212px] max-md:pl-5 max-md:max-w-full">
          <div className="flex z-0 flex-col items-start self-stretch pr-2 my-auto w-8 min-h-6">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/bbf3c9cfde88474a830baa845a12da21/2670da58bcfa6ee0cb2f80a7c1c8303fe9abda31?placeholderIfAbsent=true"
              alt="search"
              className="object-contain w-6 aspect-square"
            />
          </div>
          <div className="flex overflow-hidden z-0 flex-col flex-1 shrink justify-center self-stretch py-5 pr-3.5 my-auto text-sm text-gray-50 basis-0 min-h-[53px] min-w-60 max-md:max-w-full">
            <p className="overflow-hidden w-full max-md:max-w-full">
              Search Models
            </p>
          </div>
          <div className="absolute inset-x-0 bottom-0 z-0 top-[-5px] w-[1200px] max-md:max-w-full">
            <div className="rounded-3xl border border-[#DADCE0] h-[48px] shrink-0 max-md:max-w-full" />
          </div>
        </div>
      </div>
    );
  };
  
  export default SearchBar;