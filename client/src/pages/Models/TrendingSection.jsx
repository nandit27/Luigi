import React from "react";
import ModelCard from "./ModelCard";

const TrendingSection = () => {
  const trendingModels = [
    {
      title: "DeepSeek R1",
      author: "DeepSeek",
      variations: 8,
      notebooks: 36,
      description: "We introduce our first-generation reaso…",
      votes: 738,
    },
    {
      title: "Aya Vision",
      author: "CohereForAI",
      variations: 2,
      notebooks: 0,
      description: "C4AI Aya Vision is an open weights rese…",
      votes: 73,
    },
    {
      title: "deepseek-r1",
      author: "Tong Hui Kang",
      variations: 6,
      notebooks: 34,
      votes: 102,
    },
    {
      title: "QwQ-32B",
      author: "QwenLM",
      variations: 3,
      notebooks: 0,
      description: "QwQ is the reasoning model of the Qwe…",
      votes: 12,
    },
  ];

  return (
    <section className="border-b border-[#DADCE0] w-full pt-8 pb-8">
      <header className="px-2 pb-9 w-full font-bold text-gray-50">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-5">
            <img src="URL_TRENDING" alt="" className="w-6 aspect-square" />
            <h2 className="text-xl">Trending Models</h2>
          </div>
          <button className="px-6 py-2 text-sm leading-none text-center rounded-3xl">
            See All
          </button>
        </div>
      </header>
      <div className="flex overflow-x-auto gap-6 justify-center items-start px-1 pt-1 pb-3.5 min-h-[230px]">
        {trendingModels.map((model, index) => (
          <ModelCard key={index} {...model} />
        ))}
      </div>
    </section>
  );
};

export default TrendingSection;