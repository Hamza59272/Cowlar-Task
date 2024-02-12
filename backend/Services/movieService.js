// services/movieService.js
const Movie = require('../Model/Movies');
const Review = require('../Model/Reviews');
const User = require('../Model/User');
const movieValidation = require('../Validations/movieValidation');

const movieService = {
  addMovie: async (movieData, userId) => {
    // Validate movie data
    const validationResult = movieValidation.validateMovie(movieData);

    if (validationResult.error) {
      throw new Error(validationResult.error.details[0].message);
    }

    // Check if a movie with the same name already exists
    const existingMovie = await Movie.findOne({ title: movieData.title });

    if (existingMovie) {
      throw new Error('A movie with the same title already exists');
    }

    // Create and save the new movie
    const newMovie = new Movie({
      ...movieData,
      createdBy: userId,
    });

    return newMovie.save();
  },

  deleteMovie: async (movieId, userId) => {
    // Delete and return the deleted movie if the user is the creator
    const deletedMovie = await Movie.findOneAndDelete({ _id: movieId, createdBy: userId });

    if (!deletedMovie) {
      throw new Error('Movie not found or user not authorized to delete');
    }

    return deletedMovie;
  },

  getRankedMovies: async () => {
    // Use aggregation to get movies with the most reviews and rank them
    const rankedMovies = await Movie.aggregate([
      {
        $lookup: {
          from: 'reviews', 
          localField: '_id',
          foreignField: 'movie',
          as: 'reviews',
        },
      },
      {
        $project: {
          _id: 1,
          title: 1,
          description: 1,
          imageUrl: 1,
          videoLink: 1,
          createdBy: 1,
          reviewCount: { $size: '$reviews' },
        },
      },
      { $sort: { reviewCount: -1 } },
    ]);

    return rankedMovies;
  },
  getMovieDetails: async (movieId) => {
    try {
      
      const movieDetails = await Movie.findById(movieId).lean().populate('createdBy', 'username email');

      if (!movieDetails) {
        throw new Error('Movie not found');
      }

      const reviews = await Review.find({ movie: movieId }).populate('createdBy', 'username email');

     const details = {
      reviews: reviews.map(review => ({
        _id: review._id,
        content: review.content,
        rating: review.rating,
        createdBy: review.createdBy,
        movie: review.movie
      })),
      movieDetails: {
        _id: movieDetails._id,
        title: movieDetails.title,
        description: movieDetails.description,
        imageUrl: movieDetails.imageUrl,
        videoLink: movieDetails.videoLink,
        createdBy: movieDetails.createdBy
      }
     }

      return details;
    } catch (error) {
      throw new Error(error.message);
    }
  },
  
  
};

module.exports = movieService;
