import React, { useState, useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';
import { createAnnouncement, getUploadedDatasets, uploadDataset } from '../../services/api';

const AdminDashboard = () => {
  const { user } = useAuth();
  const [announcement, setAnnouncement] = useState('');
  const [uploadedDatasets, setUploadedDatasets] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUploadedDatasets();
  }, []);

  const fetchUploadedDatasets = async () => {
    try {
      const data = await getUploadedDatasets();
      setUploadedDatasets(data);
    } catch (error) {
      console.error('Error fetching datasets:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleAnnouncementSubmit = async (e) => {
    e.preventDefault();
    try {
      await createAnnouncement(announcement);
      setAnnouncement('');
      // Show success message
    } catch (error) {
      console.error('Error creating announcement:', error);
      // Show error message
    }
  };

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append('dataset', file);
    formData.append('name', file.name);
    formData.append('size', file.size);

    try {
      await uploadDataset(formData);
      await fetchUploadedDatasets(); // Refresh the list
      // Show success message
    } catch (error) {
      console.error('Error uploading dataset:', error);
      // Show error message
    }
  };

  return (
    <div className="min-h-screen bg-[#171717] pt-[80px] px-4">
      <div className="mt-20 max-w-7xl mx-auto">
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
            <h3 className="text-lg font-semibold text-[#32CD32] mb-4">Uploads</h3>
            <div className="text-3xl font-bold text-white">0</div>
            <p className="text-gray-400">Total Datasets Uploaded</p>
          </div>

          {/* Quick Actions */}
          <div className="bg-white/5 rounded-lg p-6 backdrop-blur-sm border border-white/10">
            <h3 className="text-lg font-semibold text-[#32CD32] mb-4">Quick Actions</h3>
            <div className="space-y-2">
              <button className="w-full px-4 py-2 bg-gradient-to-r from-[#32CD32] to-[#00FF7F] 
                text-black font-semibold rounded-lg transition-all duration-300
                hover:from-[#00FF7F] hover:to-[#32CD32] transform hover:scale-105">
                Upload Dataset
              </button>
            </div>
          </div>
        </div>

        {/* Announcements Section */}
        <div className="mt-8 bg-white/5 rounded-lg p-6 backdrop-blur-sm border border-white/10">
          <h3 className="text-xl font-semibold text-[#32CD32] mb-6">Create Announcement</h3>
          <form onSubmit={handleAnnouncementSubmit}>
            <textarea
              value={announcement}
              onChange={(e) => setAnnouncement(e.target.value)}
              className="w-full bg-white/5 rounded-lg p-4 text-white border border-white/10
                focus:border-[#32CD32] focus:outline-none"
              rows="4"
              placeholder="Write your announcement here..."
            />
            <button
              type="submit"
              className="mt-4 px-6 py-2 bg-gradient-to-r from-[#32CD32] to-[#00FF7F] 
                text-black font-semibold rounded-lg transition-all duration-300
                hover:from-[#00FF7F] hover:to-[#32CD32] transform hover:scale-105"
            >
              Post Announcement
            </button>
          </form>
        </div>

        {/* Uploaded Datasets Section */}
        <div className="mt-8 bg-white/5 rounded-lg p-6 backdrop-blur-sm border border-white/10">
          <h3 className="text-xl font-semibold text-[#32CD32] mb-6">Uploaded Datasets</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-gray-400">
              <thead className="text-sm text-gray-300 uppercase">
                <tr>
                  <th className="py-3 px-4">Dataset Name</th>
                  <th className="py-3 px-4">Uploaded On</th>
                  <th className="py-3 px-4">Downloads</th>
                  <th className="py-3 px-4">Actions</th>
                </tr>
              </thead>
              <tbody>
                {/* We'll populate this with data from MongoDB */}
                <tr>
                  <td className="py-4 px-4" colSpan="4">No datasets uploaded yet</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard; 