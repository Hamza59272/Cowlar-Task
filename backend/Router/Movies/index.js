const MovieRouter = require("express").Router();
const movieController = require('../../Controllers/movieController');
const verifyToken = require('../../Middlewares/tokenVerification');


// Add movie route (requires authentication)
MovieRouter.post('/add-movie', verifyToken, movieController.addMovie);

MovieRouter.delete('/delete-movie/:movieId', verifyToken, movieController.deleteMovie);
// Get ranked movies route (public)
MovieRouter.get('/ranked-movies', movieController.getRankedMovies);

MovieRouter.get('/movie-details/:movieId', movieController.getMovieDetails);

module.exports = MovieRouter;
