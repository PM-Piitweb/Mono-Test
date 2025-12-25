const mongoose = require('mongoose');

const videoSchema = new mongoose.Schema({
  title: { type: String, required: true },
  url: { type: String, required: true },
  thumbnail: { type: String, required: true } // เพิ่มสำหรับรูปภาพประกอบ
});

module.exports = mongoose.model('Video', videoSchema);
