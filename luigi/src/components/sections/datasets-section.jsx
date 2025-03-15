import React from 'react';
import { Button } from "@/components/ui/button";

const DatasetCard = ({ title, description, size, records, category }) => {
  return (
    <div className="bg-card rounded-lg border border-secondary/20 p-6 hover:border-primary/50 transition-colors">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-semibold text-secondary">{title}</h3>
        <span className="bg-primary/20 text-primary text-xs px-3 py-1 rounded-full">
          {category}
        </span>
      </div>
      <p className="text-secondary/70 mb-6 text-sm">{description}</p>
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div>
          <p className="text-xs text-secondary/50 mb-1">Size</p>
          <p className="text-secondary font-medium">{size}</p>
        </div>
        <div>
          <p className="text-xs text-secondary/50 mb-1">Records</p>
          <p className="text-secondary font-medium">{records}</p>
        </div>
      </div>
      <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-background">
        Download Dataset
      </Button>
    </div>
  );
};

export function DatasetsSection() {
  const datasets = [
    {
      title: "Image Classification Dataset",
      description: "A large collection of labeled images across 100 categories for training classification models.",
      size: "2.3 GB",
      records: "50,000 images",
      category: "Computer Vision"
    },
    {
      title: "Sentiment Analysis Corpus",
      description: "Text data with sentiment labels for training NLP models on sentiment analysis tasks.",
      size: "450 MB",
      records: "100,000 samples",
      category: "NLP"
    },
    {
      title: "Stock Market Time Series",
      description: "Historical stock market data with minute-by-minute price information for predictive modeling.",
      size: "1.1 GB",
      records: "5 years of data",
      category: "Finance"
    },
    {
      title: "Medical Imaging Collection",
      description: "Anonymized medical images with annotations for healthcare AI research and development.",
      size: "3.7 GB",
      records: "10,000 scans",
      category: "Healthcare"
    },
    {
      title: "Customer Behavior Analytics",
      description: "User interaction data for building recommendation systems and behavior prediction models.",
      size: "780 MB",
      records: "1M interactions",
      category: "E-commerce"
    },
    {
      title: "Autonomous Driving Sensor Data",
      description: "Multi-sensor data collected from autonomous vehicles for perception and planning models.",
      size: "5.2 GB",
      records: "200 hours",
      category: "Robotics"
    }
  ];

  return (
    <section className="py-20 px-4 bg-background relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-30"></div>
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-secondary mb-4">Featured Datasets</h2>
          <p className="text-secondary/70 max-w-2xl mx-auto">
            High-quality, curated datasets for training and evaluating your machine learning models.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {datasets.map((dataset, index) => (
            <DatasetCard key={index} {...dataset} />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button className="bg-primary hover:bg-primary/90 text-background font-medium px-8 py-6 text-lg">
            Explore All Datasets
          </Button>
        </div>
      </div>
    </section>
  );
} 