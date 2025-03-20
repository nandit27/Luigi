const path = require('path');

module.exports = {
  // Configure the path where your datasets are stored
  datasetsPath: path.join(__dirname, '..', '..', 'datasets'),
  
  // Supported file types
  supportedFormats: ['.csv', '.json', '.parquet', '.txt', '.xlsx'],
  
  // Maximum file size (in bytes) - 100MB
  maxFileSize: 100 * 1024 * 1024
}; 