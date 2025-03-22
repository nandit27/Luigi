import express from 'express';
import { authMiddleware, adminOnly } from '../middleware/auth.js';
import * as announcementController from '../controllers/announcementController.js';

const router = express.Router();

router.get('/', announcementController.getAnnouncements);
router.post('/', authMiddleware, adminOnly, announcementController.createAnnouncement);
router.delete('/:id', authMiddleware, adminOnly, announcementController.deleteAnnouncement);

export default router; 