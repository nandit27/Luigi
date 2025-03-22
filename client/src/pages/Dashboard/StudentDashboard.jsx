import React, { useEffect, useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { getDownloadedDatasets, getAnnouncements } from '../../services/api';

const StudentDashboard = () => {
  const { user } = useAuth();
  const [downloadedDatasets, setDownloadedDatasets] = useState([]);
  const [announcements, setAnnouncements] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const [datasetsData, announcementsData] = await Promise.all([
        getDownloadedDatasets(),
        getAnnouncements()
      ]);
      setDownloadedDatasets(datasetsData);
      setAnnouncements(announcementsData);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#171717] pt-[80px] px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Profile Section */}
          <div className="bg-white/5 rounded-lg p-6 backdrop-blur-sm border border-white/10">
            <div className="flex items-center space-x-4">
              <img 
                src={user?.picture || '/default-avatar.png'} 
                alt="Profile" 
                className="w-16 h-16 rounded-full"
              />
              <div>
                <h2 className="text-xl font-bold text-white">{user?.name}</h2>
                <p className="text-gray-400">{user?.email}</p>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="bg-white/5 rounded-lg p-6 backdrop-blur-sm border border-white/10">
            <h3 className="text-lg font-semibold text-[#32CD32] mb-4">Downloads</h3>
            <div className="text-3xl font-bold text-white">0</div>
            <p className="text-gray-400">Total Datasets Downloaded</p>
          </div>

          {/* Recent Activity */}
          <div className="bg-white/5 rounded-lg p-6 backdrop-blur-sm border border-white/10">
            <h3 className="text-lg font-semibold text-[#32CD32] mb-4">Recent Activity</h3>
            <div className="space-y-2">
              {/* We'll populate this with data from MongoDB */}
              <p className="text-gray-400">No recent activity</p>
            </div>
          </div>
        </div>

        {/* Downloaded Datasets Section */}
        <div className="mt-8 bg-white/5 rounded-lg p-6 backdrop-blur-sm border border-white/10">
          <h3 className="text-xl font-semibold text-[#32CD32] mb-6">Downloaded Datasets</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-gray-400">
              <thead className="text-sm text-gray-300 uppercase">
                <tr>
                  <th className="py-3 px-4">Dataset Name</th>
                  <th className="py-3 px-4">Downloaded On</th>
                  <th className="py-3 px-4">Size</th>
                  <th className="py-3 px-4">Actions</th>
                </tr>
              </thead>
              <tbody>
                {/* We'll populate this with data from MongoDB */}
                <tr>
                  <td className="py-4 px-4" colSpan="4">No datasets downloaded yet</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard; 