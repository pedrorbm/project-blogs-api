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

const create = async (req, res) => {
  try {
    const insert = await categoryService.create(req.body);
    
    return res.status(201).json(insert.dataValues);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: 'Deu algo de errado' });
  }
};

module.exports = {
  findAll,
  create,
};
