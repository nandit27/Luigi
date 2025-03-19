import React from "react";
import { motion } from 'framer-motion';

const DatasetCard = ({ data }) => {
  const {
    image,
    title,
    author,
    updatedAt,
    usability,
    size,
    fileCount,
    fileType,
    likes = 0,
    userAvatar
  } = data;

  return (
    <motion.div
      whileHover={{ y: -2 }}
      className="bg-[#171717] rounded-2xl overflow-hidden border border-white/10 
        hover:border-white/20 transition-all duration-300"
    >
      {/* Image Container */}
      <div className="relative h-48 w-full overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Header */}
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-lg font-medium text-white line-clamp-2">
            {title}
          </h3>
          <button className="p-1 text-gray-400 hover:text-white">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <circle cx="12" cy="6" r="2"/>
              <circle cx="12" cy="12" r="2"/>
              <circle cx="12" cy="18" r="2"/>
            </svg>
          </button>
        </div>

        {/* Author & Date */}
        <div className="flex items-center gap-1 text-sm text-gray-400 mb-3">
          <span className="hover:text-white cursor-pointer">{author}</span>
          <span>•</span>
          <span>Updated {updatedAt}</span>
        </div>

        {/* Stats */}
        <div className="flex items-center gap-3 text-sm mb-3">
          <div className="flex items-center gap-1">
            <span className="text-gray-400">Usability</span>
            <span className="text-white">{usability}</span>
          </div>
          <span className="text-gray-400">•</span>
          <span className="text-gray-400">{size}</span>
        </div>

        {/* File Info */}
        <div className="text-sm text-gray-400 mb-4">
          {fileCount} {fileType}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-3 border-t border-white/10">
          <div className="flex items-center gap-1">
            <button className="flex items-center gap-1 text-gray-400 hover:text-white">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/>
              </svg>
              <span>{likes}</span>
            </button>
          </div>
          <div className="flex items-center gap-2">
            <img
              src={userAvatar}
              alt="User Avatar"
              className="w-6 h-6 rounded-full"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default DatasetCard;