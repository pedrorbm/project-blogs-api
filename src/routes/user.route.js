const express = require('express');
const { userController } = require('../controllers');
const { verifyUser } = require('../middlewares');

const route = express.Router();

route.post(
  '/',
  verifyUser.verifyDisplayName,
  verifyUser.verifyEmail,
  verifyUser.verifyPassword,
  userController.createUser,
  );

module.exports = route;
