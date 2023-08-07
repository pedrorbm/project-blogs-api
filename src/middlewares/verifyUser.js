const { userService } = require('../services');

const validarEmail = (email) => {
  const character = /\S+@\S+\.\S+/;
  return character.test(email);
};

const verifyDisplayName = async (req, res, next) => {
  const { displayName } = req.body;

  if (displayName.length < 8) {
    return res.status(400)
      .json({ message: '"displayName" length must be at least 8 characters long' });
  }

  next();
};

const verifyEmail = async (req, res, next) => {
  const { email } = req.body;

  if (!validarEmail(email)) {
    return res.status(400)
      .json({ message: '"email" must be a valid email' });
  }

  if (await userService.findUserByEmail(email) !== null) {
    return res.status(409)
      .json({ message: 'User already registered' });
  }

  next();
};

const verifyPassword = async (req, res, next) => {
  const { password } = req.body;

  if (password.length < 6) {
    return res.status(400)
      .json({ message: '"password" length must be at least 6 characters long' });
  }

  next();
};

module.exports = {
  verifyDisplayName,
  verifyEmail,
  verifyPassword,
};
