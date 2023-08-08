const { postService } = require('../services');

const findAll = async (req, res) => {
  try {
    const posts = await postService.findAll();

    return res.status(200).json(posts);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: 'Deu algo de errado!' });
  }
};

const findById = async (req, res) => {
  const { id } = req.params;

  try {
    const post = await postService.findById(Number(id));
    return res.status(200).json(post);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: 'Deu algo de errado!' });
  }
};

module.exports = {
  findAll,
  findById,
};
