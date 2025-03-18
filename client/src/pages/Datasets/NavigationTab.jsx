import React from "react";

const NavigationTab = () => {
  const tabs = ["Main", "Tasks", "Libraries", "Languages", "Licenses", "Other"];

  return (
    <nav className="mt-20 flex gap-1 mb-6 max-sm:flex-wrap">
      {tabs.map((tab, index) => (
        <button
          key={index}
          className="px-2 py-0 text-sm leading-5 text-gray-500 rounded-lg cursor-pointer hover:bg-gray-800 transition-colors"
        >
          {tab}
        </button>
      ))}
    </nav>
  );
};

export default NavigationTab;
