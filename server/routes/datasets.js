const express = require('express');
const router = express.Router();
const datasetController = require('../controllers/datasetController');

// Get all datasets
router.get('/', datasetController.getAllDatasets);

// Get specific dataset by ID
router.get('/:id', datasetController.getDatasetById);

module.exports = router; 