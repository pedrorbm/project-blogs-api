const { categoryService } = require('../services');

const findAll = async (req, res) => {
  try {
    const categories = await categoryService.findAll();

    return res.status(200).json(categories);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: 'Deu algo de errado!' });
  }
};

module.exports = {
  findAll,
};
