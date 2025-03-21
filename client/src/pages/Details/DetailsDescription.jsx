// Description component for the details page
import React from 'react';
import { motion } from 'framer-motion';
import DetailsSection from './DetailsSection';
import DetailsTags from './DetailsTags';
import DetailsStats from './DetailsStats';

const DetailsDescription = ({ item }) => {
  return (
    <div className="flex flex-col gap-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white/5 rounded-xl border border-white/10 hover:border-[#32CD32]/30 
          transition-all duration-300 p-6"
      >
        <DetailsSection title="Overview">
          <p className="text-gray-400 leading-relaxed">{item.longDescription}</p>
        </DetailsSection>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="bg-white/5 rounded-xl border border-white/10 hover:border-[#32CD32]/30 
          transition-all duration-300 p-6"
      >
        <DetailsSection title="Specifications">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {item.specifications.map((spec, index) => (
              <div key={index} className="flex flex-col">
                <span className="text-gray-400 text-sm">{spec.name}</span>
                <span className="text-white font-medium">{spec.value}</span>
              </div>
            ))}
          </div>
        </DetailsSection>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="bg-white/5 rounded-xl border border-white/10 hover:border-[#32CD32]/30 
          transition-all duration-300 p-6"
      >
        <DetailsSection title="Tags">
          <DetailsTags tags={item.tags} />
        </DetailsSection>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="bg-white/5 rounded-xl border border-white/10 hover:border-[#32CD32]/30 
          transition-all duration-300 p-6"
      >
        <DetailsSection title="Usage Statistics">
          <DetailsStats stats={item.stats} />
        </DetailsSection>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="bg-white/5 rounded-xl border border-white/10 hover:border-[#32CD32]/30 
          transition-all duration-300 p-6"
      >
        <DetailsSection title="Author">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-[#32CD32]/20 flex items-center justify-center">
              <span className="text-[#32CD32] font-bold">{item.author.charAt(0)}</span>
            </div>
            <div>
              <h4 className="text-white font-medium">{item.author}</h4>
              <p className="text-gray-400 text-sm">Dataset Creator</p>
            </div>
          </div>
        </DetailsSection>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="bg-white/5 rounded-xl border border-white/10 hover:border-[#32CD32]/30 
          transition-all duration-300 p-6"
      >
        <DetailsSection title="Related Resources">
          <ul className="space-y-3">
            {item.relatedResources.map((resource, index) => (
              <li key={index}>
                <a 
                  href={`/details/${resource.id}`} 
                  className="text-[#32CD32] hover:underline transition-all duration-300"
                >
                  {resource.title}
                </a>
              </li>
            ))}
          </ul>
        </DetailsSection>
      </motion.div>
    </div>
  );
};

export default DetailsDescription;