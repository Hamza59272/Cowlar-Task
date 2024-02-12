const ReviewRouter = require("express").Router();

const reviewController = require('../../Controllers/reviewController');
const verifyToken = require('../../Middlewares/tokenVerification');


// Create review route (requires authentication)
ReviewRouter.post('/create-review', verifyToken, reviewController.createReview);

// Update review route (requires authentication)
ReviewRouter.put('/update-review/:reviewId', verifyToken, reviewController.updateReview);

// Delete review route (requires authentication)
ReviewRouter.delete('/delete-review/:reviewId', verifyToken, reviewController.deleteReview);

module.exports = ReviewRouter;
