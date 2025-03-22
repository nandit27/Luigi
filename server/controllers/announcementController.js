import Announcement from '../models/Announcement.js';

export const createAnnouncement = async (req, res) => {
  try {
    if (req.user.role !== 'admin') {
      return res.status(403).json({ error: 'Only admins can create announcements' });
    }

    const { content } = req.body;
    const announcement = new Announcement({
      content,
      createdBy: req.user.userId
    });
    
    await announcement.save();
    
    // Populate creator info before sending response
    await announcement.populate('createdBy', 'name email picture');
    
    res.status(201).json(announcement);
  } catch (error) {
    console.error('Announcement error:', error);
    res.status(500).json({ error: 'Error creating announcement' });
  }
};

export const getAnnouncements = async (req, res) => {
  try {
    const announcements = await Announcement.find()
      .populate('createdBy', 'name email picture')
      .sort({ createdAt: -1 })
      .limit(10); // Limit to most recent 10 announcements
    
    res.json(announcements);
  } catch (error) {
    console.error('Announcement error:', error);
    res.status(500).json({ error: 'Error fetching announcements' });
  }
};

export const deleteAnnouncement = async (req, res) => {
  try {
    const { id } = req.params;
    
    if (req.user.role !== 'admin') {
      return res.status(403).json({ error: 'Only admins can delete announcements' });
    }

    await Announcement.findByIdAndDelete(id);
    res.json({ message: 'Announcement deleted successfully' });
  } catch (error) {
    console.error('Announcement error:', error);
    res.status(500).json({ error: 'Error deleting announcement' });
  }
}; 