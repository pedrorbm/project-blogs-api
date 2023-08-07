const express = require('express');
const { userController } = require('../controllers');
const { verifyUser } = require('../middlewares');
const validateJWT = require('../auth/validateJWT');

const route = express.Router();

route.post(
  '/',
  verifyUser.verifyDisplayName,
  verifyUser.verifyEmail,
  verifyUser.verifyPassword,
  userController.createUser,
);

route.get('/', validateJWT, userController.findAll);

route.get('/:id', validateJWT, verifyUser.verifyUser, userController.findUserById);

module.exports = route;
