// Image component for the details page
import React from 'react';
import { motion } from 'framer-motion';

const DetailsImage = ({ imageUrl, title }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="rounded-xl overflow-hidden border border-white/10 hover:border-[#32CD32]/30 
        transition-all duration-300 bg-white/5"
    >
      <div className="relative aspect-[4/3] overflow-hidden group">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 
            group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#171717] to-transparent opacity-60" />
      </div>
    </motion.div>
  );
};

export default DetailsImage;