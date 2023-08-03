const jwt = require('jsonwebtoken');
const { loginService } = require('../services');

const secret = process.env.JWT_SECRET || 'seusecretdetoken';

const findUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await loginService.findUser({ email, password });
    
    const jwtConfig = {
      expiresIn: '7d',
      algorithm: 'HS256', 
    };

    const token = jwt.sign({ data: { userId: user.id } }, secret, jwtConfig);

    return res.status(200).json({ token });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
};

module.exports = findUser;
