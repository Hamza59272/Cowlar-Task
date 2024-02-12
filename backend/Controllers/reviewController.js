const reviewService = require('../Services/reviewService');

const reviewController = {
  createReview: async (req, res) => {
    try {
      // Retrieve user ID from the decoded token
      const userId = req.user.userId;

      // Call the reviewService to create a new review
      const newReview = await reviewService.createReview(req.body, userId);

      return res.status(201).json({ success:true,message: 'Review created successfully', review: newReview });
    } catch (error) {
      return res.status(400).json({  success:false, message: 'Bad Request', error: error.message });
    }
  },

  updateReview: async (req, res) => {
    try {
      // Retrieve review ID from the request params
      const reviewId = req.params.reviewId;

      // Retrieve user ID from the decoded token
      const userId = req.user.userId;

      // Call the reviewService to update the review
      const updatedReview = await reviewService.updateReview(reviewId, userId, req.body);

      return res.status(200).json({ success:true, message: 'Review updated successfully', review: updatedReview });
    } catch (error) {
      return res.status(400).json({ success:false, message: 'Bad Request', error: error.message });
    }
  },

  deleteReview: async (req, res) => {
    try {
      // Retrieve review ID from the request params
      const reviewId = req.params.reviewId;

      // Retrieve user ID from the decoded token
      const userId = req.user.userId;

      // Call the reviewService to delete the review
      const deletedReview = await reviewService.deleteReview(reviewId, userId);

      return res.status(200).json({success:true, message: 'Review deleted successfully', review: deletedReview });
    } catch (error) {
      return res.status(400).json({success:false, message: 'Bad Request', error: error.message });
    }
  },
};

module.exports = reviewController;
