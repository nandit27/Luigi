import express from 'express';
import { authMiddleware, adminOnly, regularOnly } from '../middleware/auth.js';
import * as datasetController from '../controllers/datasetController.js';

const router = express.Router();

// Public routes
router.get('/', datasetController.getAllDatasets);
router.get('/:id', datasetController.getDatasetById);

// Admin routes
router.post('/', authMiddleware, adminOnly, datasetController.uploadDataset);
router.get('/uploaded', authMiddleware, adminOnly, datasetController.getUploadedDatasets);
router.delete('/:id', authMiddleware, adminOnly, datasetController.deleteDataset);

// Regular routes
router.get('/downloaded', authMiddleware, regularOnly, datasetController.getDownloadedDatasets);

export default router; 