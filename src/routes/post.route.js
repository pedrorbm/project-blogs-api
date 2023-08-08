const express = require('express');
const { postController } = require('../controllers');
const validateJWT = require('../auth/validateJWT');

const route = express.Router();

route.get('/', validateJWT, postController.findAll);

module.exports = route;
