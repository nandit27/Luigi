import { useState } from 'react';
import { motion } from 'framer-motion';

const Sidebar = () => {
  const [activeTab, setActiveTab] = useState('Main');
  const [selectedModalities, setSelectedModalities] = useState([]);
  const [selectedFormats, setSelectedFormats] = useState([]);

  const tabs = ['Main', 'Tasks', 'Libraries', 'Languages', 'Licenses', 'Other'];
  
  const modalities = [
    { icon: "⬛", label: "3D" },
    { icon: "◯", label: "Audio" },
    { icon: "◈", label: "Geospatial" },
    { icon: "▣", label: "Image" },
    { icon: "☷", label: "Tabular" },
    { icon: "T", label: "Text" },
    { icon: "~", label: "Time-series" },
    { icon: "▶", label: "Video" }
  ];

  const formats = [
    { icon: "{}", label: "json" },
    { icon: "≡", label: "csv" },
    { icon: "≋", label: "parquet" },
    { icon: "📁", label: "imagefolder" },
    { icon: "🔊", label: "soundfolder" },
    { icon: "⬚", label: "webdataset" },
    { icon: "≡", label: "text" },
    { icon: "⟫", label: "arrow" }
  ];

  const toggleModality = (label) => {
    setSelectedModalities(prev => 
      prev.includes(label) 
        ? prev.filter(item => item !== label)
        : [...prev, label]
    );
  };

  const toggleFormat = (label) => {
    setSelectedFormats(prev => 
      prev.includes(label) 
        ? prev.filter(item => item !== label)
        : [...prev, label]
    );
  };

  return (
    <aside className="w-72 h-[calc(100vh-80px)] fixed top-[80px] bg-[#171717] border-r border-white/10 p-6 overflow-y-auto">
      {/* Navigation Tabs */}
      <div className="flex flex-wrap gap-2 mb-8">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-1.5 text-base transition-colors duration-200 ${
              activeTab === tab
                ? 'text-white bg-[#FF8142] rounded-md'
                : 'text-gray-400'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Modalities Section */}
      <div className="mb-8">
        <h3 className="text-gray-500 text-lg mb-4">Modalities</h3>
        <div className="grid grid-cols-2 gap-2">
          {modalities.map(({ icon, label }) => (
            <button
              key={label}
              onClick={() => toggleModality(label)}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-full
                border border-[#FF8142]/30 transition-colors duration-200
                ${selectedModalities.includes(label)
                  ? 'bg-[#FF8142]/10'
                  : 'bg-transparent'
                }`}
            >
              <span className="text-[#FF8142]">{icon}</span>
              <span className="text-[#FF8142] text-sm">{label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Size Filter */}
      <div className="mb-8">
        <h3 className="text-gray-500 text-lg mb-4">Size (rows)</h3>
        <div className="px-2">
          <div className="flex justify-between mb-2">
            <span className="text-sm text-gray-400 bg-gray-800/50 px-2 py-1 rounded">&lt; 1K</span>
            <span className="text-sm text-gray-400 bg-gray-800/50 px-2 py-1 rounded">&gt; 1T</span>
          </div>
          <div className="relative h-1 bg-gray-700 rounded-full">
            <div className="absolute left-0 right-0 h-full">
              <div
                className="absolute h-full bg-[#FF8142] rounded-full"
                style={{ left: '0%', right: '50%' }}
              />
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-4 bg-[#FF8142] rounded-full cursor-pointer" />
              <div className="absolute right-1/2 top-1/2 -translate-y-1/2 w-4 h-4 bg-[#FF8142] rounded-full cursor-pointer" />
            </div>
          </div>
        </div>
      </div>

      {/* Format Filter */}
      <div>
        <h3 className="text-gray-500 text-lg mb-4">Format</h3>
        <div className="grid grid-cols-2 gap-2">
          {formats.map(({ icon, label }) => (
            <button
              key={label}
              onClick={() => toggleFormat(label)}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-full
                border border-[#FF8142]/30 transition-colors duration-200
                ${selectedFormats.includes(label)
                  ? 'bg-[#FF8142]/10'
                  : 'bg-transparent'
                }`}
            >
              <span className="text-[#FF8142]">{icon}</span>
              <span className="text-[#FF8142] text-sm">{label}</span>
            </button>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
