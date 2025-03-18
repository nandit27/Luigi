import React from "react";
import Sidebar from "./Sidebar";
import DatasetHeader from "./DatasetHeader";
import TrendingDatasets from "./TrendingDatasets";
import BenchmarkDatasets from "./BenchmarkDatasets";
import ExploreMore from "./ExploreMore";
import Footer from "../Home/Footer";

const MainArticle = () => {
  return (
    <article className="pt-24 bg-neutral-900">
      <div className="w-full bg-neutral-900 max-w-[1829px]" space={130}>
        <div className="flex gap-5 max-md:flex-col">
          <Sidebar />
          <main className="ml-5 w-[67%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col mt-5 w-full max-md:mt-10 max-md:max-w-full">
              <DatasetHeader />
              <TrendingDatasets />
              <BenchmarkDatasets />
              <ExploreMore />
            </div>
          </main>
        </div>
      </div>
      <Footer />
    </article>
  );
};

export default MainArticle;
