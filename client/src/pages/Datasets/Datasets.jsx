import React, { useState } from "react";
import { motion } from 'framer-motion';
import Sidebar from "./Sidebar";
import DatasetHeader from "./DatasetHeader";
import TrendingDatasets from "./TrendingDatasets";
import BenchmarkDatasets from "./BenchmarkDatasets";
import ExploreMore from "./ExploreMore";
import Footer from "../Home/Footer";
import DatasetCard from './DatasetCard';

const Datasets = () => {
  const [activeSection, setActiveSection] = useState('Trending');

  const sections = [
    {
      title: "Trending Datasets",
      icon: "📈",
      datasets: [
        {
          image: "images\\dataset-icon.jpeg",
          title: "Global Music Streaming Trends & Listener Insights",
          author: "Atharva Soundankar",
          updatedAt: "5 days ago",
          usability: "10.0",
          size: "97 kB",
          fileCount: "1 File",
          fileType: "(CSV)",
          likes: 18,
          userAvatar: "path_to_avatar"
        },
        // Add more dataset objects here
      ]
    },
    {
      title: "Benchmark datasets",
      icon: "📊",
      datasets: [
        // Add benchmark datasets here
      ]
    }
  ];

  return (
    <div className="flex min-h-screen bg-[#171717] pt-[80px]">
      <Sidebar />
      
      <div className="flex-1 pl-72">
        <main className="p-8">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl font-bold text-white mb-4">Datasets</h1>
            <p className="text-gray-400">
              Explore, analyze, and share quality data.{" "}
              <a href="#" className="text-[#FF8142] hover:underline">
                Learn more
              </a>{" "}
              about data types, creating, and collaborating.
            </p>
          </div>

          {/* Sections */}
          {sections.map((section) => (
            <section key={section.title} className="mb-16">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{section.icon}</span>
                  <h2 className="text-2xl font-semibold text-white">{section.title}</h2>
                </div>
                {section.datasets.length > 4 && (
                  <button className="text-gray-400 hover:text-white">
                    See All
                  </button>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6">
                {section.datasets.map((dataset, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <DatasetCard data={dataset} />
                  </motion.div>
                ))}
              </div>
            </section>
          ))}
        </main>
      </div>
    </div>
  );
};

export default Datasets;
