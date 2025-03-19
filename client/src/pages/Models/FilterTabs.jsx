import React from "react";

const FilterTabs = () => {
    const tabs = [
      { name: "Tasks", active: true },
      { name: "Libraries", active: false },
      { name: "Datasets", active: false },
      { name: "Languages", active: false },
      { name: "Licenses", active: false },
      { name: "Other", active: false },
    ];
  
    return (
      <nav className="flex gap-5 justify-between items-center max-w-full text-sm leading-none text-center text-gray-500 whitespace-nowrap w-[388px]">
        {tabs.map((tab) => (
          <button
            key={tab.name}
            className={`self-stretch ${tab.active ? "px-2 text-white bg-orange-500 rounded-lg" : ""}`}
          >
            {tab.name}
          </button>
        ))}
      </nav>
    );
  };

  export default FilterTabs;