import React from "react";
import { motion } from "framer-motion";

const ModelCard = ({ model }) => {
  const { title, description, image, downloads, rating, category, author } = model;

  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white/5 rounded-xl overflow-hidden border border-white/10 
        hover:border-[#FF8142]/30 transition-all duration-300"
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 
            group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#171717] to-transparent opacity-60" />
        <div className="absolute top-4 right-4">
          <span className="px-3 py-1 bg-[#FF8142]/20 text-[#FF8142] rounded-full text-sm">
            {category}
          </span>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
        <p className="text-gray-400 text-sm mb-4 line-clamp-2">{description}</p>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-400">{downloads} downloads</span>
            <span className="text-sm text-[#FF8142]">★ {rating}</span>
          </div>
          <span className="text-sm text-gray-400">by {author}</span>
        </div>
      </div>

      <div className="p-6 pt-0">
        <button className="w-full px-4 py-2 bg-white/5 text-white rounded-lg
          hover:bg-[#FF8142] transition-all duration-300 border border-white/10
          hover:border-[#FF8142]">
          View Details
        </button>
      </div>
    </motion.div>
  );
};

export default ModelCard;
