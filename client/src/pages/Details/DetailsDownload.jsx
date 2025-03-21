// Download component for the details page
import React from 'react';
import { motion } from 'framer-motion';

const DetailsDownload = ({ item }) => {
  const handleDownload = () => {
    // Implementation for download functionality
    console.log(`Downloading ${item.title}...`);
    // You would typically call an API endpoint here
    // window.location.href = item.downloadUrl;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="bg-white/5 rounded-xl border border-white/10 hover:border-[#32CD32]/30 
        transition-all duration-300 p-6"
    >
      <h3 className="text-xl font-semibold text-white mb-4">Download Information</h3>
      
      <div className="flex flex-col gap-3 mb-6">
        <div className="flex justify-between">
          <span className="text-gray-400">Size:</span>
          <span className="text-white font-medium">{item.specifications.find(s => s.name === 'Size')?.value}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-400">Format:</span>
          <span className="text-white font-medium">{item.specifications.find(s => s.name === 'Format')?.value}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-400">License:</span>
          <span className="text-white font-medium">{item.specifications.find(s => s.name === 'License')?.value}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-400">Downloads:</span>
          <span className="text-white font-medium">{item.stats.downloads.toLocaleString()}</span>
        </div>
      </div>
      
      <button 
        onClick={handleDownload}
        className="w-full px-6 py-3 bg-gradient-to-r from-[#32CD32] to-[#00FF7F] 
          text-[#171717] font-bold rounded-lg transition-all duration-300 
          hover:from-[#00FF7F] hover:to-[#32CD32] hover:scale-[1.02] 
          hover:shadow-lg hover:shadow-[#32CD32]/20 
          focus:ring-2 focus:ring-[#32CD32] focus:ring-opacity-50 active:scale-[0.98]"
      >
        Download Now
      </button>
      
      <div className="mt-4 text-center text-sm text-gray-400">
        Last updated: {new Date(item.stats.lastUpdated).toLocaleDateString()}
      </div>
    </motion.div>
  );
};

export default DetailsDownload;