import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const config = {
  // Configure the path where your datasets are stored
  datasetsPath: path.join(__dirname, '..', '..', 'datasets'),
  
  // Supported file types
  supportedFormats: ['.csv', '.json', '.parquet', '.txt', '.xlsx'],
  
  // Maximum file size (in bytes) - 100MB
  maxFileSize: 100 * 1024 * 1024
};

export default config; 