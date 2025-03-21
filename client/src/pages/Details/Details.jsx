// Main Details component
import React from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import DetailsHeader from './DetailsHeader';
import DetailsDescription from './DetailsDescription';
import DetailsImage from './DetailsImage';
import DetailsDownload from './DetailsDownload';
import Footer from '../Home/Footer';

const Details = () => {
  const { id } = useParams();
  
  // Mock data - would typically be fetched from API
  const item = {
    id: id || '1',
    title: 'Global Music Streaming Trends Dataset',
    description: 'Comprehensive dataset covering global music streaming patterns and user behavior analytics across multiple platforms.',
    longDescription: 'This comprehensive dataset provides detailed insights into global music streaming patterns and user behavior analytics across major platforms including Spotify, Apple Music, and Amazon Music. It contains over 10 million data points covering user demographics, listening habits, genre preferences, and engagement metrics from 2018 to 2023. This dataset is perfect for researchers and students working on recommendation systems, trend analysis, or consumer behavior modeling in the digital music industry.',
    imageUrl: '/images/dataset-icon.jpg',
    downloadUrl: '/download/global-music-streaming',
    tags: ['Tabular', 'Time Series', 'Analytics', 'Media'],
    stats: {
      downloads: 18000,
      stars: 432,
      lastUpdated: '2025-03-15'
    },
    specifications: [
      { name: 'Size', value: '97 kB' },
      { name: 'Format', value: 'CSV' },
      { name: 'Usability', value: '10.0' },
      { name: 'Records', value: '10M+' },
      { name: 'License', value: 'CC BY-NC-SA 4.0' }
    ],
    author: 'Atharva Soundankar',
    relatedResources: [
      { title: 'Music Genre Classification Dataset', id: '2' },
      { title: 'Podcast Audio Collection', id: '9' },
      { title: 'Customer Review Sentiment Analysis', id: '3' }
    ]
  };

  return (
    <div className="min-h-screen bg-[#171717] pt-[80px]">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-[#32CD32]/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#32CD32]/10 rounded-full blur-[100px]" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <DetailsHeader title={item.title} category={item.tags[0]} />

          <div className="flex flex-col lg:flex-row gap-8 mt-8">
            {/* Left Column (3 parts) */}
            <div className="flex-[3] order-2 lg:order-1">
              <DetailsDescription item={item} />
            </div>

            {/* Right Column (2 parts) */}
            <div className="flex-[2] order-1 lg:order-2">
              <div className="flex flex-col gap-6 sticky top-24">
                <DetailsImage imageUrl={item.imageUrl} title={item.title} />
                <DetailsDownload item={item} />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};

export default Details;