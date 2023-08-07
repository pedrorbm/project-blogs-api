const express = require('express');
const { categoryController } = require('../controllers');
const validateJWT = require('../auth/validateJWT');

const route = express.Router();

route.get('/', validateJWT, categoryController.findAll);

module.exports = route;
