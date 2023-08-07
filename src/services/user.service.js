const { User } = require('../models');

const createUser = async (user) => {
  const newUser = await User.create(user);

  return newUser;
};

const findUserByEmail = async (email) => {
  const findUser = await User.findOne({ where: { email } });

  return findUser;
};

const findUserById = async (id) => {
  const findUser = await User.findByPk(id);

  return findUser;
};

const findAll = async () => {
  const users = await User.findAll();

  return users;
};

module.exports = {
  createUser,
  findUserByEmail,
  findAll,
  findUserById,
};
