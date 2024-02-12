const UserRouter = require("express").Router();
const {registerUser} = require('../../Controllers/userController');

UserRouter.post('/register', 
    registerUser);
  

module.exports = UserRouter;