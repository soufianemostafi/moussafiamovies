const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const uploadSchema = new Schema({
  movie_name: { type: String, required: true },
  director: { type: String, required: true },
  initial_release: { type: String, required: true },
  box_office: { type: String, required: true }
}, {
  timestamps: true,
});

const Upload = mongoose.model('uploads', uploadSchema);

module.exports = Upload;