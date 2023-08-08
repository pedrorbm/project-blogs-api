const express = require('express');
const { categoryController } = require('../controllers');
const validateJWT = require('../auth/validateJWT');
const { verifyCategory } = require('../middlewares');

const route = express.Router();

route.get('/', validateJWT, categoryController.findAll);
route.post('/', validateJWT, verifyCategory.verifyKeyName, categoryController.create);

module.exports = route;
