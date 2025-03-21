const express = require('express');
const router = express.Router();
const datasetController = require('../controllers/datasetController');
const { authMiddleware, teacherOnly } = require('../middleware/auth');

// Get all datasets
router.get('/', datasetController.getAllDatasets);

// Get specific dataset by ID
router.get('/:id', datasetController.getDatasetById);

// Public route - anyone can access
router.get('/datasets', async (req, res) => {
  // Return datasets
});

// Protected route - only authenticated teachers can access
router.post('/datasets', authMiddleware, teacherOnly, async (req, res) => {
  // Add new dataset
});

// Protected route - only authenticated teachers can access
router.delete('/datasets/:id', authMiddleware, teacherOnly, async (req, res) => {
  // Delete dataset
});

module.exports = router; 