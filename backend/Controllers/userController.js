const userService = require('../Services/userService');
const userValidation = require('../Validations/userValidation');

const registerUser = async (req, res) => {
    try {
     
      const validationResult = userValidation.validateUserRegistration(req.body);

      if (validationResult.error) {
        return res.status(400).json({ message: validationResult.error.details[0].message });
      }
      const newUser = await userService.registerUser(req.body);

    
      return res.status(201).json({ message: 'User registered successfully', user: newUser });
    } catch (error) {
      return res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
  }

module.exports = { 
  registerUser 
}