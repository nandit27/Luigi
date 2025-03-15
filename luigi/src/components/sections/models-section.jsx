import React from 'react';
import { Button } from "@/components/ui/button";

const ModelCard = ({ title, description, tags }) => {
  return (
    <div className="bg-card rounded-lg border border-secondary/20 overflow-hidden hover:border-primary/50 transition-colors group">
      <div className="h-40 bg-gradient-to-r from-primary/20 to-primary/10 flex items-center justify-center">
        <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
          <div className="w-8 h-8 bg-primary rounded-full"></div>
        </div>
      </div>
      <div className="p-5">
        <h3 className="text-xl font-semibold mb-2 text-secondary">{title}</h3>
        <p className="text-secondary/70 mb-4 text-sm">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <span key={index} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
              {tag}
            </span>
          ))}
        </div>
        <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-background">
          View Details
        </Button>
      </div>
    </div>
  );
};

export function ModelsSection() {
  const models = [
    {
      title: "Neural Network Classifier",
      description: "A deep learning model for image classification with high accuracy.",
      tags: ["Deep Learning", "Classification", "Computer Vision"]
    },
    {
      title: "NLP Transformer",
      description: "State-of-the-art language model for text generation and analysis.",
      tags: ["NLP", "Transformer", "Text Generation"]
    },
    {
      title: "Time Series Forecaster",
      description: "Predict future values based on historical time series data.",
      tags: ["Time Series", "Forecasting", "LSTM"]
    },
    {
      title: "Recommendation Engine",
      description: "Personalized recommendation system using collaborative filtering.",
      tags: ["Recommendations", "Collaborative Filtering"]
    }
  ];

  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-secondary mb-4">Popular Models</h2>
          <p className="text-secondary/70 max-w-2xl mx-auto">
            Explore our collection of cutting-edge machine learning models ready for your next project.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {models.map((model, index) => (
            <ModelCard key={index} {...model} />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button className="bg-primary hover:bg-primary/90 text-background font-medium px-8 py-6 text-lg">
            View All Models
          </Button>
        </div>
      </div>
    </section>
  );
} 