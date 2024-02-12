// services/reviewService.js
const Review = require('../Model/Reviews');
const reviewValidation = require('../Validations/reviewValidation');

const reviewService = {
  createReview: async (reviewData, userId) => {
    const validationResult = reviewValidation.validateReview(reviewData);

    if (validationResult.error) {
      throw new Error(validationResult.error.details[0].message);
    }

    const newReview = new Review({
      ...reviewData,
      createdBy: userId,
    });

    return newReview.save();
  },

  updateReview: async (reviewId, userId, updatedData) => {
    const validationResult = reviewValidation.validateReview(updatedData);

    if (validationResult.error) {
      throw new Error(validationResult.error.details[0].message);
    }
    const updatedReview = await Review.findOneAndUpdate(
      { _id: reviewId, createdBy: userId },
      updatedData,
      { new: true }
    );

    if (!updatedReview) {
      throw new Error('Review not found or user not authorized to update');
    }

    return updatedReview;
  },

  deleteReview: async (reviewId, userId) => {
    // Delete and return the deleted review if the user is the creator
    const deletedReview = await Review.findOneAndDelete({ _id: reviewId, createdBy: userId });

    if (!deletedReview) {
      throw new Error('Review not found or user not authorized to delete');
    }

    return deletedReview;
  },
};

module.exports = reviewService;
