const verifyKeyName = async (req, res, next) => {
  if (!(req.body.name) || req.body.name.length < 1) {
    return res.status(400).json({ message: '"name" is required' });
  }

  next();
};

module.exports = {
  verifyKeyName,
};
