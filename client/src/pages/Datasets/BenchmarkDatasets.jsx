import React from "react";
import DatasetCard from "./DatasetCard";

const BenchmarkDatasets = () => {
    const benchmarkDatasets = [
      {
        title: "Properties of Protein Tertiary\nStructure",
        image:
          "https://cdn.builder.io/api/v1/image/assets/bbf3c9cfde88474a830baa845a12da21/368acc6b68dbc6b43846aafa43a5686267b49e0a75c59ff053700585a61d0d86?placeholderIfAbsent=true",
        author: "AI Maverick",
        updateTime: "Updated a year ago",
        usability: "10.0",
        size: "2 MB",
        fileCount: "1",
        fileType: "CSV",
        votes: "19",
        hasBookmark: true,
      },
      // Add other benchmark datasets here
    ];
  
    return (
      <section className="border-b border-[#DADCE0] pb-8 max-md:mr-2.5 max-md:max-w-full">
        <header className="flex flex-wrap gap-5 justify-between items-start mr-3 ml-3 font-bold text-gray-50 max-md:mr-2.5 max-md:max-w-full">
          <div className="flex overflow-hidden gap-5 items-center mt-1.5 text-xl leading-6">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/bbf3c9cfde88474a830baa845a12da21/7a9c4d7dd1a7b2e06f2edc2992f1615a90cdbb41fd826a3fd13a6af8a0d5fbb4?placeholderIfAbsent=true"
              alt=""
              className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
            />
            <h2 className="overflow-hidden flex-1 shrink self-stretch my-auto basis-0">
              Benchmark datasets
            </h2>
          </div>
          <button className="self-stretch px-6 py-2 text-sm leading-none text-center rounded-3xl min-h-9 max-md:px-5">
            See All
          </button>
        </header>
        <div className="flex overflow-hidden overflow-x-auto flex-wrap gap-6 justify-center items-start px-1 pt-1 pb-3.5 mt-3 min-h-[338px]">
          {benchmarkDatasets.map((dataset, index) => (
            <DatasetCard key={index} {...dataset} />
          ))}
        </div>
      </section>
    );
  };
  
  export default BenchmarkDatasets;
  