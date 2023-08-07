const jwt = require('jsonwebtoken');

const { userService } = require('../services');

const secret = process.env.JWT_SECRET || 'seusecretdetoken';

function extractToken(bearerToken) {
  return bearerToken.split(' ')[1];
}

module.exports = async (req, res, next) => {
  const bearerToken = req.header('Authorization');

  if (!bearerToken) {
    return res.status(401).json({ message: 'Token not found' });
  }

  const token = extractToken(bearerToken);

  try {
    const decoded = jwt.verify(token, secret);

    const user = await userService.findUserById(decoded.data.userId);

    if (!user) {
      return res.status(401).json({ message: 'Token not found' });
    }

    req.user = user;

    next();
  } catch (error) {
    console.log(error);
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};
