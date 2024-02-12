const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  description: String,
  imageUrl: String,
  videoLink: String,
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
});


const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie
