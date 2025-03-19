import React, { useState } from "react";
import { motion } from "framer-motion";
import  ModelCard  from '../Models/ModelCard'

const Models = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Computer Vision", "NLP", "Audio", "Reinforcement Learning"];
  
  const trendingModels = [
    {
      title: "GPT-4 Turbo",
      description: "Latest language model with enhanced capabilities and improved performance",
      image: "path_to_image",
      downloads: "1.2M",
      rating: 4.9,
      category: "NLP",
      author: "OpenAI"
    },
    // Add more models...
  ];

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
              Discover Powerful AI Models
            </h1>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Access thousands of cutting-edge machine learning models, 
              from state-of-the-art LLMs to advanced computer vision solutions.
            </p>
            <div className="flex gap-4 justify-center">
              <button className="px-8 py-3 bg-gradient-to-r from-[#FF8142] to-[#FF9061] 
                text-white rounded-lg hover:from-[#FF9061] hover:to-[#FF8142] 
                transition-all duration-300 transform hover:scale-105 
                hover:shadow-[0_0_15px_rgba(255,129,66,0.3)]">
                Explore Models
              </button>
              <button className="px-8 py-3 bg-white/5 text-white rounded-lg
                hover:bg-white/10 transition-all duration-300 border border-white/10
                hover:border-[#FF8142]/30">
                Upload Model
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex gap-4 overflow-x-auto pb-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
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
      </section>

      {/* Trending Models */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-white">Trending Models</h2>
          <button className="text-[#FF8142] hover:text-white transition-colors duration-300">
            View All →
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {trendingModels.map((model, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ModelCard model={model} />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Featured Categories */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-bold text-white mb-8">Featured Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.slice(1).map((category, index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/5 rounded-xl p-6 hover:bg-white/10 
                transition-all duration-300 cursor-pointer group"
            >
              <h3 className="text-xl font-semibold text-white mb-2">{category}</h3>
              <p className="text-gray-400 mb-4">Explore the latest {category} models</p>
              <span className="text-[#FF8142] group-hover:translate-x-2 transition-transform duration-300 inline-block">
                Browse →
              </span>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Models;