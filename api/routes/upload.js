import express from 'express';
import { upload } from '../middleware/upload.js';
const router = express.Router();

// POST /api/upload
router.post('/', upload.array('images', 6), (req, res) => {
  try {
    const imageUrls = req.files.map(file => `/uploads/${file.filename}`);
    res.status(200).json({ imageUrls });
  } catch (err) {
    res.status(500).json({ message: 'Image upload failed' });
  }
});

export default router;
