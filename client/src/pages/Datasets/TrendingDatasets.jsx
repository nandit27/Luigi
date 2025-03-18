import React from "react";
import DatasetCard from "./DatasetCard";

const TrendingDatasets = () => {
  const trendingDatasets = [
    {
      title: "Global Music Streaming\nTrends & Listener Insights",
      image:
        "https://cdn.builder.io/api/v1/image/assets/bbf3c9cfde88474a830baa845a12da21/8af2f3fcd8a00eedf2d9a8e87ef0b2d3344d4a54756bb528abc96991f438e342?placeholderIfAbsent=true",
      author: "Atharva Soundankar",
      updateTime: "Updated 5 days ago",
      usability: "10.0",
      size: "97 kB",
      fileCount: "1",
      fileType: "CSV",
      votes: "18",
      hasBookmark: true,
    },
    {
      title: "Wet Wipe",
      image:
        "https://cdn.builder.io/api/v1/image/assets/bbf3c9cfde88474a830baa845a12da21/78464f0bba17edf11c4035023662517b4d6dba6cfd888a7b83271fbe208a36c8?placeholderIfAbsent=true",
      author: "Erhan Baran",
      updateTime: "Updated 3 days ago",
      usability: "8.8",
      size: "75 MB",
      fileCount: "659",
      fileType: "other",
      votes: "18",
      hasBookmark: false,
    },
    // Add other trending datasets here
  ];

  return (
    <section className="border-b border-[#DADCE0] mt-6 pb-8 max-md:mr-2.5 max-md:max-w-full">
      <header className="flex flex-wrap gap-5 justify-between items-start mr-3 ml-3 font-bold max-md:mr-2.5 max-md:max-w-full">
        <div className="flex overflow-hidden gap-5 items-center mt-1.5 text-xl leading-6 text-gray-50">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/bbf3c9cfde88474a830baa845a12da21/1e64633b486cb9909784e6b8b2aa0b7f63b57680507e8e0426f89644e29c9b68?placeholderIfAbsent=true"
            alt=""
            className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
          />
          <h2 className="overflow-hidden flex-1 shrink self-stretch my-auto basis-0">
            Trending Datasets
          </h2>
        </div>
        <button className="self-stretch px-6 py-2 text-sm leading-none text-center rounded-3xl min-h-9 text-neutral-800 max-md:px-5">
          See All
        </button>
      </header>
      <div className="flex overflow-hidden overflow-x-auto flex-wrap gap-6 justify-center items-start px-1 pt-1 pb-3.5 mt-3 min-h-[338px]">
        {trendingDatasets.map((dataset, index) => (
          <DatasetCard key={index} {...dataset} />
        ))}
      </div>
    </section>
  );
};

export default TrendingDatasets;
