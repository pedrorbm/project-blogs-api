const jwt = require('jsonwebtoken');
const { userService } = require('../services');

const secret = process.env.JWT_SECRET || 'seusecretdetoken';

const createUser = async (req, res) => {
  try {
    const newUser = await userService.createUser(req.body);

    const jwtConfig = {
      expiresIn: '7d',
      algorithm: 'HS256', 
    };

    const token = jwt.sign({ data: { userId: newUser.id } }, secret, jwtConfig);

    return res.status(201).json({ token });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: 'Algo deu errado!' });
  }
};

module.exports = {
  createUser,
};
