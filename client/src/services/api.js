const API_URL = 'http://localhost:5001/api';

export const fetchDatasets = async () => {
  try {
    const response = await fetch(`${API_URL}/datasets`);
    if (!response.ok) throw new Error('Failed to fetch datasets');
    return await response.json();
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};

export const downloadDataset = async (datasetId) => {
  try {
    const token = localStorage.getItem('token');
    const response = await fetch(`${API_URL}/datasets/${datasetId}`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
    if (!response.ok) throw new Error('Failed to download dataset');
    return await response.blob();
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};

export const uploadDataset = async (formData) => {
  try {
    const token = localStorage.getItem('token');
    const response = await fetch(`${API_URL}/datasets`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`
      },
      body: formData // FormData containing the file and metadata
    });
    if (!response.ok) throw new Error('Failed to upload dataset');
    return await response.json();
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};

export const createAnnouncement = async (content) => {
  try {
    const token = localStorage.getItem('token');
    const response = await fetch(`${API_URL}/announcements`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ content })
    });
    if (!response.ok) throw new Error('Failed to create announcement');
    return await response.json();
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};

export const getAnnouncements = async () => {
  try {
    const response = await fetch(`${API_URL}/announcements`);
    if (!response.ok) throw new Error('Failed to fetch announcements');
    return await response.json();
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};

export const getUserProfile = async () => {
  try {
    const token = localStorage.getItem('token');
    const response = await fetch(`${API_URL}/auth/profile`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
    if (!response.ok) throw new Error('Failed to fetch profile');
    return await response.json();
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};

export const getUploadedDatasets = async () => {
  try {
    const token = localStorage.getItem('token');
    const response = await fetch(`${API_URL}/datasets/uploaded`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
    if (!response.ok) throw new Error('Failed to fetch uploaded datasets');
    return await response.json();
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};

export const getDownloadedDatasets = async () => {
  try {
    const token = localStorage.getItem('token');
    const response = await fetch(`${API_URL}/datasets/downloaded`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
    if (!response.ok) throw new Error('Failed to fetch downloaded datasets');
    return await response.json();
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}; 