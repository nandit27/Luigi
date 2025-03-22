import fs from 'fs/promises';
import path from 'path';
import multer from 'multer';
import { fileURLToPath } from 'url';
import config from '../config/config.js';
import User from '../models/User.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: config.datasetsPath,
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
  }
});

const upload = multer({ storage });

export const getAllDatasets = async (req, res) => {
  try {
    const datasets = await scanDirectory(config.datasetsPath);
    res.json(datasets);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching datasets' });
  }
};

export const getDatasetById = async (req, res) => {
  try {
    const { id } = req.params;
    const filePath = path.join(config.datasetsPath, id);
    
    const stats = await fs.stat(filePath);
    if (!stats.isFile()) {
      return res.status(404).json({ error: 'Dataset not found' });
    }

    // Record the download if user is authenticated
    if (req.user) {
      await User.findByIdAndUpdate(req.user._id, {
        $push: {
          downloadedDatasets: {
            datasetId: id,
            downloadedAt: new Date(),
            name: path.parse(id).name,
            size: formatSize(stats.size)
          }
        }
      });
    }

    const fileStream = fs.createReadStream(filePath);
    res.setHeader('Content-Type', 'application/octet-stream');
    res.setHeader('Content-Disposition', `attachment; filename=${id}`);
    fileStream.pipe(res);
  } catch (error) {
    res.status(500).json({ error: 'Error downloading dataset' });
  }
};

export const uploadDataset = async (req, res) => {
  try {
    upload.single('dataset')(req, res, async (err) => {
      if (err) {
        return res.status(400).json({ error: 'Error uploading file' });
      }

      const { name, description } = req.body;
      const file = req.file;

      if (!file) {
        return res.status(400).json({ error: 'No file uploaded' });
      }

      // Update user's uploadedDatasets array
      await User.findByIdAndUpdate(req.user.userId, {
        $push: {
          uploadedDatasets: {
            name,
            description,
            fileSize: formatSize(file.size),
            filePath: file.path,
            uploadedAt: new Date()
          }
        }
      });

      res.status(201).json({
        message: 'Dataset uploaded successfully',
        dataset: {
          name,
          description,
          size: formatSize(file.size),
          path: file.filename
        }
      });
    });
  } catch (error) {
    console.error('Upload error:', error);
    res.status(500).json({ error: 'Error uploading dataset' });
  }
};

export const getUploadedDatasets = async (req, res) => {
  try {
    const user = await User.findById(req.user.userId)
      .select('uploadedDatasets')
      .lean();

    res.json(user.uploadedDatasets);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching uploaded datasets' });
  }
};

export const getDownloadedDatasets = async (req, res) => {
  try {
    const user = await User.findById(req.user.userId)
      .select('downloadedDatasets')
      .lean();

    res.json(user.downloadedDatasets);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching downloaded datasets' });
  }
};

export const deleteDataset = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(req.user.userId);
    const dataset = user.uploadedDatasets.id(id);

    if (!dataset) {
      return res.status(404).json({ error: 'Dataset not found' });
    }

    // Delete file from filesystem
    await fs.unlink(dataset.filePath);

    // Remove dataset from user's uploadedDatasets
    await User.findByIdAndUpdate(req.user.userId, {
      $pull: { uploadedDatasets: { _id: id } }
    });

    res.json({ message: 'Dataset deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Error deleting dataset' });
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