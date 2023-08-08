const { postService } = require('../services');

const verifyPostExist = async (req, res, next) => {
  const { id } = req.params;

  const post = await postService.findById(Number(id));

  if (!post) {
    return res.status(404).json({ message: 'Post does not exist' });
  }

  next();
};

module.exports = {
  verifyPostExist,
};
