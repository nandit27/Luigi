// Header component for the details page
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const DetailsHeader = ({ title, category }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="mb-6"
    >
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-gray-400 mb-4">
        <Link to="/" className="hover:text-[#32CD32] transition-colors duration-300">Home</Link>
        <span>/</span>
        <Link to="/datasets" className="hover:text-[#32CD32] transition-colors duration-300">Datasets</Link>
        <span>/</span>
        <span className="text-white">{title}</span>
      </div>

      {/* Title and Category */}
      <div className="flex items-start justify-between flex-wrap gap-4">
        <h1 className="text-4xl font-bold text-white">{title}</h1>
        <span className="px-4 py-1 bg-[#32CD32]/20 text-[#32CD32] rounded-full text-sm font-medium">
          {category}
        </span>
      </div>
    </motion.div>
  );
};

export default DetailsHeader;