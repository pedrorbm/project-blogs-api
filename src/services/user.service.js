const { User } = require('../models');

const createUser = async (user) => {
  const newUser = await User.create(user);

  return newUser;
};

const findUserByEmail = async (email) => {
  const findUser = await User.findOne({ where: { email } });

  return findUser;
};

module.exports = {
  createUser,
  findUserByEmail,
};
