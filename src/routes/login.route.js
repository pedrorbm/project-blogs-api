const express = require('express');
const { loginController } = require('../controllers');
const { verifyLogin } = require('../middlewares');

const route = express.Router();

route.post('/', verifyLogin.verifyLogin, loginController);

module.exports = route;
