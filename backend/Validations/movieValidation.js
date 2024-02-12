const Joi = require('joi');

const movieValidation = {
  validateMovie: (data) => {
    const schema = Joi.object({
      title: Joi.string().required(),
      description: Joi.string(),
      imageUrl: Joi.string(),
      videoLink: Joi.string(),
    });

    return schema.validate(data);
  },
};

module.exports = movieValidation;
