const Joi = require('joi');

const reviewValidation = {
  validateReview: (data) => {
    const schema = Joi.object({
      content: Joi.string().required(),
      rating: Joi.number().min(1).max(5).required(),
      movie: Joi.string().required(), 
    });

    return schema.validate(data);
  },
};

module.exports = reviewValidation;
