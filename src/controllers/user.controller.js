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

const findAll = async (req, res) => {
  try {
    const users = await userService.findAll();
    const userFormatted = users.map(({ id, displayName, email, image }) => {
      const data = { id, displayName, email, image };
      return data;
    });

    return res.status(200).json(userFormatted);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: 'Algo deu errado!' });
  }
};

const findUserById = async (req, res) => {
  const { id } = req.params;

  try {
    const user = await userService.findUserById(Number(id));
    const { displayName, email, image } = user;
    return res.status(200).json({ id: Number(id), displayName, email, image });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: 'Algo deu errado!' });
  }
};

module.exports = {
  createUser,
  findAll,
  findUserById,
};
