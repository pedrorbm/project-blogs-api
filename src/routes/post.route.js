const express = require('express');
const { postController } = require('../controllers');
const validateJWT = require('../auth/validateJWT');
const { verifyPost } = require('../middlewares');

const route = express.Router();

route.get('/', validateJWT, postController.findAll);

route.get('/:id', validateJWT, verifyPost.verifyPostExist, postController.findById);

route.post(
  '/',
  validateJWT,
  verifyPost.verifyPostBody,
  verifyPost.verifyPostCategoryIds,
  postController.create,
);

module.exports = route;
