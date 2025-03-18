import React from "react";
import FilterTabs from "./FilterTabs";
import ModalityFilters from "./ModalityFilters";
import SizeFilter from "./SizeFilter";
import FormatFilters from "./FormatFilters";

const Sidebar = () => {
  return (
    <aside className="w-[33%] max-md:ml-0 max-md:w-full">
      <div className="flex flex-wrap max-md:mt-10">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/bbf3c9cfde88474a830baa845a12da21/6f7c615cfd756cefcb4eea6d41e3c43185504472d153e001f31a54b377cb3fc2?placeholderIfAbsent=true"
          className="object-contain shrink-0 self-start aspect-[0.06] w-[73px] max-md:hidden"
          alt=""
        />
        <section className="grow shrink-0 px-6 pt-6 rounded-md basis-0 bg-neutral-900 pb-[1047px] w-fit max-md:px-5 max-md:pb-24 max-md:max-w-full">
          <FilterTabs />
          <ModalityFilters />
          <SizeFilter />
          <FormatFilters />
        </section>
      </div>
    </aside>
  );
};

export default Sidebar;
