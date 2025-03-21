import React from "react";
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const DatasetCard = ({ data }) => {
  const {
    title,
    description,
    image,
    author,
    updatedAt,
    usability,
    size,
    fileCount,
    fileType,
    category,
    downloads
  } = data;

  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white/5 rounded-xl overflow-hidden border border-white/10 
        hover:border-[#32CD32]/30 transition-all duration-300 h-full"
    >
      <div className="relative h-48 overflow-hidden group">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 
            group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#171717] to-transparent opacity-60" />
        <div className="absolute top-4 right-4">
          <span className="px-3 py-1 bg-[#32CD32]/20 text-[#32CD32] rounded-full text-sm">
            {category}
          </span>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold text-white mb-2 line-clamp-1">{title}</h3>
        <p className="text-gray-400 text-sm mb-4 line-clamp-2">{description}</p>
        
        <div className="flex items-center gap-4 mb-4">
          <div className="flex items-center gap-2">
            <span className="text-sm text-[#32CD32]">Usability</span>
            <span className="text-sm text-white">{usability}</span>
          </div>
          <span className="text-gray-400">•</span>
          <span className="text-sm text-gray-400">{size}</span>
        </div>

        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-400">{downloads} downloads</span>
          </div>
          <span className="text-sm text-gray-400">{fileCount} {fileType}</span>
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-white/10">
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-400">by {author}</span>
            <span className="text-sm text-gray-400">• {updatedAt}</span>
          </div>
        </div>
      </div>

      <div className="p-6 pt-0">
        <Link 
          to={`/details/${data.id}`} 
          className="w-full px-4 py-2 bg-white/5 text-white rounded-lg block text-center
            hover:bg-[#32CD32] hover:text-[#171717] transition-all duration-300 border border-white/10">
          View Dataset
        </Link>
      </div>
    </motion.div>
  );
};

export default DatasetCard;