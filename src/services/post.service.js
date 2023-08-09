const { BlogPost, User, Category } = require('../models');

const findAll = async () => {
  const posts = await BlogPost.findAll({
    include: [
      { model: User, as: 'user', attributes: { exclude: 'password' } },
      { 
        model: Category, 
        as: 'categories', 
        through: { attributes: { exclude: ['postId', 'categoryId'] } }, 
      },
    ],  
  });

  return posts;
};

const findById = async (id) => {
  const post = await BlogPost.findByPk(id, {
    include: [
      { model: User, as: 'user', attributes: { exclude: 'password' } },
      { 
        model: Category,
        as: 'categories',
        through: { attributes: { exclude: ['postId', 'categoryId'] } },
      },
    ],
  });

  return post;
};

const create = async (object) => {
  const newPost = await BlogPost.create(object);

  return newPost;
};

module.exports = {
  findAll,
  findById,
  create,
};
