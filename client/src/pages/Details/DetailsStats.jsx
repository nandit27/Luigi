// Stats component for the details page
import React from 'react';
import CountUp from 'react-countup';

const DetailsStats = ({ stats }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
      <div className="flex flex-col items-center bg-white/5 rounded-lg p-4 border border-white/10">
        <div className="text-2xl font-bold text-[#32CD32]">
          <CountUp
            end={stats.downloads}
            duration={2}
            separator=","
            enableScrollSpy
            scrollSpyOnce
          />
        </div>
        <div className="text-gray-400 text-sm">Downloads</div>
      </div>

      <div className="flex flex-col items-center bg-white/5 rounded-lg p-4 border border-white/10">
        <div className="text-2xl font-bold text-[#32CD32]">
          <CountUp
            end={stats.stars}
            duration={2}
            enableScrollSpy
            scrollSpyOnce
          />
        </div>
        <div className="text-gray-400 text-sm">Stars</div>
      </div>

      <div className="flex flex-col items-center bg-white/5 rounded-lg p-4 border border-white/10">
        <div className="text-lg font-bold text-[#32CD32]">
          {new Date(stats.lastUpdated).toLocaleDateString()}
        </div>
        <div className="text-gray-400 text-sm">Last Updated</div>
      </div>
    </div>
  );
};

export default DetailsStats;