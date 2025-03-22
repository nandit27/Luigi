import mongoose from 'mongoose';

const downloadedDatasetSchema = new mongoose.Schema({
  datasetId: String,
  downloadedAt: Date,
  name: String,
  size: String
});

const uploadedDatasetSchema = new mongoose.Schema({
  name: String,
  description: String,
  fileSize: String,
  downloadCount: {
    type: Number,
    default: 0
  },
  filePath: String,
  uploadedAt: {
    type: Date,
    default: Date.now
  }
});

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true
  },
  picture: String,
  role: {
    type: String,
    enum: ['regular', 'admin'],
    required: true
  },
  downloadedDatasets: [downloadedDatasetSchema],
  uploadedDatasets: [uploadedDatasetSchema]
}, {
  timestamps: true
});

export default mongoose.model('User', userSchema); 