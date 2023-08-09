const { postService, categoryService } = require('../services');

const verifyPostExist = async (req, res, next) => {
  const { id } = req.params;

  const post = await postService.findById(Number(id));

  if (!post) {
    return res.status(404).json({ message: 'Post does not exist' });
  }

  next();
};

const verifyPostBody = async (req, res, next) => {
  const { title, content, categoryIds } = req.body;

  if (title.length < 1 || content.length < 1 || categoryIds.length < 1) {
    return res.status(400).json({ message: 'Some required fields are missing' });
  }

  next();
};

const verifyPostCategoryIds = async (req, res, next) => {
  const { categoryIds } = req.body;

  const categoryExist = categoryIds.map((categoryId) => categoryService.findById(categoryId));
  const promise = (await Promise.all(categoryExist)).some((categoryId) => categoryId === null);
  
  if (promise) {
    return res.status(400).json({ message: 'one or more "categoryIds" not found' });
  }

  next();
};

module.exports = {
  verifyPostExist,
  verifyPostBody,
  verifyPostCategoryIds,
};
