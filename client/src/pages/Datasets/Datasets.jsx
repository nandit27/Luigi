import React, { useState } from "react";
import { motion } from 'framer-motion';
import DatasetCard from './DatasetCard';
import datasetsData from './datasets.json';

const Datasets = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [expandedSection, setExpandedSection] = useState(null);

  const categories = ["All", "Computer Vision", "NLP", "Tabular", "Audio", "Time Series"];
  
  // Helper function to get random datasets
  const getRandomDatasets = (count) => {
    const shuffled = [...datasetsData.datasets].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };

  // Organize datasets by section
  const sections = {
    trending: {
      title: "Trending Datasets",
      emoji: "📈",
      data: getRandomDatasets(3)
    },
    benchmark: {
      title: "Benchmark Datasets",
      emoji: "🎯",
      data: datasetsData.datasets.filter(d => d.downloads > "40K").slice(0, 3)
    },
    recent: {
      title: "Recently Added",
      emoji: "🆕",
      data: datasetsData.datasets.filter(d => d.updatedAt.includes("days")).slice(0, 3)
    },
    popular: {
      title: "Most Downloaded",
      emoji: "⭐",
      data: [...datasetsData.datasets].sort((a, b) => 
        parseInt(b.downloads) - parseInt(a.downloads)
      ).slice(0, 3)
    }
  };

  // Filter datasets based on selected category
  const filteredDatasets = activeCategory === "All" 
    ? datasetsData.datasets
    : datasetsData.datasets.filter(dataset => dataset.category === activeCategory);

  const renderFilteredDatasets = () => (
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
  );

  const renderDatasetSection = (sectionKey, section) => {
    const isExpanded = expandedSection === sectionKey;
    const datasetsToShow = isExpanded ? section.data : section.data.slice(0, 3);

    return (
      <section key={sectionKey} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <span className="text-[#FF8142] text-2xl">{section.emoji}</span>
            <h2 className="text-3xl font-bold text-white">{section.title}</h2>
          </div>
          <button 
            onClick={() => setExpandedSection(isExpanded ? null : sectionKey)}
            className="text-[#FF8142] hover:text-white transition-colors duration-300 flex items-center gap-2"
          >
            {isExpanded ? "Show Less" : "View All"} 
            <span>{isExpanded ? "↑" : "→"}</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {datasetsToShow.map((dataset, index) => (
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
    );
  };

  return (
    <div className="min-h-screen bg-[#171717] pt-[80px]">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-96 h-96 bg-[#FF8142]/10 rounded-full blur-[100px]" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#FF8142]/10 rounded-full blur-[100px]" />
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
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Access a vast collection of high-quality datasets for your machine learning projects.
              From structured data to complex neural networks, find exactly what you need.
            </p>
            <div className="flex gap-4 justify-center">
              <button className="px-8 py-3 bg-gradient-to-r from-[#FF8142] to-[#FF9061] 
                text-white rounded-lg hover:from-[#FF9061] hover:to-[#FF8142] 
                transition-all duration-300 transform hover:scale-105 
                hover:shadow-[0_0_15px_rgba(255,129,66,0.3)]">
                Browse Datasets
              </button>
              <button className="px-8 py-3 bg-white/5 text-white rounded-lg
                hover:bg-white/10 transition-all duration-300 border border-white/10
                hover:border-[#FF8142]/30">
                Upload Dataset
              </button>
            </div>
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
                border border-white/10 focus:border-[#FF8142]/30 focus:outline-none
                transition-all duration-300"
            />
            <button className="absolute right-4 top-1/2 -translate-y-1/2
              text-[#FF8142] hover:text-white transition-colors duration-300">
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
                  setExpandedSection(null); // Reset expanded section when changing category
                }}
                className={`px-6 py-2 rounded-full transition-all duration-300 whitespace-nowrap
                  ${activeCategory === category
                    ? 'bg-[#FF8142] text-white'
                    : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
                  }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Conditional Rendering based on activeCategory */}
      {activeCategory === "All" ? (
        <>
          {/* Dataset Sections */}
          {Object.entries(sections).map(([key, section]) => 
            renderDatasetSection(key, section)
          )}

          {/* Statistics Section */}
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { 
                  label: "Available Datasets", 
                  value: `${datasetsData.datasets.length}+`,
                  description: "High-quality datasets ready for your projects"
                },
                { 
                  label: "Student Projects", 
                  value: "2.5K+",
                  description: "Successfully completed using our datasets"
                },
                { 
                  label: "Universities", 
                  value: "100+",
                  description: "Trust our platform for student projects"
                },
                { 
                  label: "Dataset Categories", 
                  value: `${categories.length}+`,
                  description: "Covering all major domains"
                }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white/5 rounded-xl p-6 text-center group hover:bg-white/10 transition-all duration-300"
                >
                  <h3 className="text-3xl font-bold text-[#FF8142] mb-2">{stat.value}</h3>
                  <p className="text-white font-semibold mb-1">{stat.label}</p>
                  <p className="text-gray-400 text-sm">{stat.description}</p>
                </motion.div>
              ))}
            </div>
          </section>
        </>
      ) : (
        // Render filtered datasets when a specific category is selected
        renderFilteredDatasets()
      )}
    </div>
  );
};

export default Datasets;
