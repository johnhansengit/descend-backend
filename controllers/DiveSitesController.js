const { DiveSite, CommentRating, DivePic, User } = require('../models');

const getDiveSites = async (req, res) => {
  try {
    const diveSites = await DiveSite.findAll();
    res.json(diveSites);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const showDiveSite = async (req, res) => {
  try {
    const { id } = req.params;
    const diveSite = await DiveSite.findOne({
      where: { id },
      include: [
        {
          model: CommentRating,
          include: [User],
        },
        DivePic,
        User,
      ],
    });
    if (diveSite) {
      res.json(diveSite);
    } else {
      res.status(404).json({ error: 'DiveSite not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createDiveSite = async (req, res) => {
  try {
    const diveSite = await DiveSite.create(req.body);
    res.status(201).json(diveSite);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getDiveSites,
  showDiveSite,
  createDiveSite
};