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
    const response = await fetch(`${API_URL}/datasets/${datasetId}`);
    if (!response.ok) throw new Error('Failed to download dataset');
    return await response.blob();
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}; 