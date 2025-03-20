const fs = require('fs').promises;
const path = require('path');
const config = require('../config/config');

exports.getAllDatasets = async (req, res) => {
  try {
    const datasets = await scanDirectory(config.datasetsPath);
    res.json(datasets);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching datasets' });
  }
};

exports.getDatasetById = async (req, res) => {
  try {
    const { id } = req.params;
    const filePath = path.join(config.datasetsPath, id);
    
    const stats = await fs.stat(filePath);
    if (!stats.isFile()) {
      return res.status(404).json({ error: 'Dataset not found' });
    }

    const fileStream = fs.createReadStream(filePath);
    res.setHeader('Content-Type', 'application/octet-stream');
    res.setHeader('Content-Disposition', `attachment; filename=${id}`);
    fileStream.pipe(res);
  } catch (error) {
    res.status(500).json({ error: 'Error downloading dataset' });
  }
};

// Helper function to scan directory and get dataset information
async function scanDirectory(dirPath) {
  const datasets = [];
  
  try {
    const files = await fs.readdir(dirPath);
    
    for (const file of files) {
      const filePath = path.join(dirPath, file);
      const stats = await fs.stat(filePath);
      
      if (stats.isFile() && isSupported(file)) {
        datasets.push({
          id: file,
          name: path.parse(file).name,
          format: path.extname(file).slice(1),
          size: formatSize(stats.size),
          lastModified: stats.mtime,
          path: filePath
        });
      }
    }
    
    return datasets;
  } catch (error) {
    throw new Error('Error scanning directory');
  }
}

// Helper function to check if file format is supported
function isSupported(filename) {
  const ext = path.extname(filename).toLowerCase();
  return config.supportedFormats.includes(ext);
}

// Helper function to format file size
function formatSize(bytes) {
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
  if (bytes === 0) return '0 Byte';
  const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
  return Math.round(bytes / Math.pow(1024, i), 2) + ' ' + sizes[i];
} 