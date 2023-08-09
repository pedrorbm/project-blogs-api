const { Category } = require('../models');

const findAll = async () => {
  const categories = await Category.findAll();

  return categories;
};

const findById = async (id) => {
  const categories = await Category.findByPk(id);

  return categories;
};

const create = async (category) => {
  const insert = await Category.create(category);

  return insert;
};

module.exports = {
  findAll,
  create,
  findById,
};
