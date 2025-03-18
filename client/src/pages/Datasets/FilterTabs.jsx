import React from "react";

const FilterTabs = () => {
  const tabs = [
    { name: "Main", active: true },
    { name: "Tasks", active: false },
    { name: "Libraries", active: false },
    { name: "Languages", active: false },
    { name: "Licenses", active: false },
    { name: "Other", active: false },
  ];

  return (
    <nav className="flex flex-wrap gap-1 text-sm leading-none text-center text-gray-500 whitespace-nowrap min-h-5">
      {tabs.map((tab) => (
        <button
          key={tab.name}
          className={`self-stretch px-2 rounded-lg ${
            tab.active ? "bg-orange-600 text-white" : ""
          }`}
        >
          {tab.name}
        </button>
      ))}
    </nav>
  );
};

export default FilterTabs;
