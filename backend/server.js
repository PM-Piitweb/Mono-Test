const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const {
  getAllVideos,
  createVideo,
  getVideoById,
  updateVideo,
  deleteVideo
} = require('./controllers/videoController');

const app = express();
app.use(cors());
app.use(express.json());

// Connect MongoDB Atlas
mongoose.connect('mongodb+srv://bettysue846_db_user:jfGOyPzrUwSkXscD@cluster0.yntl9vg.mongodb.net/smart_tv_demo')
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

// Video API Routes
app.get('/api/videos', getAllVideos);
app.post('/api/videos', createVideo);
app.get('/api/videos/:id', getVideoById);
app.put('/api/videos/:id', updateVideo);
app.delete('/api/videos/:id', deleteVideo);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
