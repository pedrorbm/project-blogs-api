const jwt = require('jsonwebtoken');
const { postService } = require('../services');

const secret = process.env.JWT_SECRET || 'seusecretdetoken';

function extractToken(bearerToken) {
  return bearerToken.split(' ')[1];
}

const findAll = async (req, res) => {
  try {
    const posts = await postService.findAll();

    return res.status(200).json(posts);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: 'Deu algo de errado!' });
  }
};

const findById = async (req, res) => {
  const { id } = req.params;

  try {
    const post = await postService.findById(Number(id));
    return res.status(200).json(post);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: 'Deu algo de errado!' });
  }
};

const create = async (req, res) => {
  const { title, content, categoryIds } = req.body;
  const bearerToken = req.header('Authorization');
  const token = extractToken(bearerToken);
  const decoded = jwt.verify(token, secret);
  const { userId } = decoded.data;

  const post = { title, content, userId, updated: new Date(), published: new Date() };
  try {
    const newPost = await postService.create(post);
    await newPost.setCategories(categoryIds);
    return res.status(201).json(newPost);
  } catch (error) {
    console.log(userId);
    return res.status(500).json({ message: 'Deu algo de errado!' });
  }
};

module.exports = {
  findAll,
  findById,
  create,
};
