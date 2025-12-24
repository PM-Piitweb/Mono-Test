const Video = require('../models/Video');

// GET /api/videos
const getAllVideos = async (req, res) => {
  try {
    const videos = await Video.find();
    res.json(videos);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// POST /api/videos
const createVideo = async (req, res) => {
  const { title, url } = req.body;
  const video = new Video({ title, url });
  try {
    const newVideo = await video.save();
    res.status(201).json(newVideo);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// GET /api/videos/:id
const getVideoById = async (req, res) => {
  try {
    const video = await Video.findById(req.params.id);
    if (!video) return res.status(404).json({ message: 'Video not found' });
    res.json(video);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// PUT /api/videos/:id
const updateVideo = async (req, res) => {
  try {
    const updatedVideo = await Video.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedVideo) return res.status(404).json({ message: 'Video not found' });
    res.json(updatedVideo);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// DELETE /api/videos/:id
const deleteVideo = async (req, res) => {
  try {
    const deletedVideo = await Video.findByIdAndDelete(req.params.id);
    if (!deletedVideo) return res.status(404).json({ message: 'Video not found' });
    res.json({ message: 'Video deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getAllVideos,
  createVideo,
  getVideoById,
  updateVideo,
  deleteVideo
};
