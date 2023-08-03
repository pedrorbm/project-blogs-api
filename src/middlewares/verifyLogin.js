const { loginService } = require('../services');

const verifyLogin = async (req, res, next) => {
  const { email, password } = req.body;

  if (email.length === 0 || password.length === 0) {
    return res.status(400).json({ message: 'Some required fields are missing' });
  }

  const user = await loginService.findUser({ email, password });

  if (!user) {
    return res.status(400).json({ message: 'Invalid fields' });
  }

  next();
};

module.exports = {
  verifyLogin,
};
