const movieService = require('../Services/movieService');

const movieController = {
  addMovie: async (req, res) => {
    try {
      // Retrieve user ID from the decoded token
      const userId = req.user.userId;

      // Call the movieService to add a new movie
      const newMovie = await movieService.addMovie(req.body, userId);

      return res.status(201).json({ success: true, message: 'Movie added successfully', movie: newMovie });
    } catch (error) {
      return res.status(400).json({ success: false, message: 'Bad Request', error: error.message });
    }
  },

  deleteMovie: async (req, res) => {
    try {
      // Retrieve movie ID from the request params
      const movieId = req.params.movieId;

      // Retrieve user ID from the decoded token
      const userId = req.user.userId;

      // Call the movieService to delete the movie
      const deletedMovie = await movieService.deleteMovie(movieId, userId);

      return res.status(200).json({ success: true, message: 'Movie deleted successfully', movie: deletedMovie });
    } catch (error) {
      return res.status(400).json({ success: false,message: 'Bad Request', error: error.message });
    }
  },

  getRankedMovies: async (req, res) => {
    try {
      // Call the movieService to get ranked movies
      const rankedMovies = await movieService.getRankedMovies();

      return res.status(200).json({ success: true, rankedMovies });
    } catch (error) {
      return res.status(500).json({ success: false,message: 'Internal Server Error', error: error.message });
    }
  },
  getMovieDetails: async (req, res) => {
    try {
      // Retrieve movie ID from the request params
      const movieId = req.params.movieId;

      // Call the movieDetailsService to get movie details
      const movieDetails = await movieService.getMovieDetails(movieId);

      return res.status(200).json({ success:true, movieDetails });
    } catch (error) {
      return res.status(404).json({ success:false, message: 'Not Found', error: error.message });
    }
  },
};

module.exports = movieController;
