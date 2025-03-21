import React, { useState, useEffect } from "react";
import { motion } from 'framer-motion';
import DatasetCard from './DatasetCard';
import datasetsData from './datasets.json';
import Footer from '../Home/Footer';

const Datasets = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [filteredDatasets, setFilteredDatasets] = useState(datasetsData);

  const categories = ["All", "Trending Datasets", "Computer Vision", "NLP", "Tabular", "Audio", "Time Series"];

  // Filter datasets based on selected category
  const parseDownloads = (downloads) => {
    if (downloads.endsWith('M')) {
      return parseFloat(downloads) * 1000000;
    } else if (downloads.endsWith('K')) {
      return parseFloat(downloads) * 1000;
    }
    return parseInt(downloads.replace(/[^0-9]/g, ''));
  };

  useEffect(() => {
    if (activeCategory === "All") {
      setFilteredDatasets(datasetsData);
    } else if (activeCategory === "Trending Datasets") {
      setFilteredDatasets(datasetsData.filter(dataset => parseDownloads(dataset.downloads) >= 50000));
    } else {
      setFilteredDatasets(datasetsData.filter(dataset => dataset.category === activeCategory));
    }
  }, [activeCategory]);

  return (
    <div className="min-h-screen bg-[#171717] pt-[80px]">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-96 h-96 bg-[#32CD32]/10 rounded-full blur-[100px]" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#32CD32]/10 rounded-full blur-[100px]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-5xl font-bold text-white mb-6">
              Explore Quality Datasets
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Access a vast collection of high-quality datasets for your machine learning projects.
              Find exactly what you need.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col gap-6">
          {/* Search Bar */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search datasets..."
              className="w-full px-6 py-4 bg-white/5 text-white rounded-lg
                border border-white/10 focus:border-[#32CD32]/30 focus:outline-none
                transition-all duration-300"
            />
            <button className="absolute right-4 top-1/2 -translate-y-1/2
              text-[#32CD32] hover:text-white transition-colors duration-300">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>

          {/* Category Filters */}
          <div className="flex gap-4 overflow-x-auto pb-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => {
                  setActiveCategory(category);
                }}
                className={`px-6 py-2 rounded-full transition-all duration-300 whitespace-nowrap
                  ${activeCategory === category
                    ? 'bg-[#32CD32] text-white'
                    : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
                  }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Datasets */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-white">
            {activeCategory} Datasets
            <span className="text-gray-400 text-xl ml-3">
              ({filteredDatasets.length} datasets)
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDatasets.map((dataset, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <DatasetCard data={dataset} />
            </motion.div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Datasets;
