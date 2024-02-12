const User = require('../Model/User');
const bcrypt = require('bcrypt');
const userValidation = require('../Validations/userValidation')

const userService = {
  registerUser: async (userData) => {
    
   
    const validationResult = userValidation.validateUserRegistration(userData);

    if (validationResult.error) {
      throw new Error(validationResult.error.details[0].message);
    }
    const hashedPassword = await bcrypt.hash(userData.password, 10);
    userData.password = hashedPassword;

    const newUser = new User(userData);
    return newUser.save();
  },
};

module.exports = userService;
