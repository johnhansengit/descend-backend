const { DiveSite, CommentRating, DivePic, User, DiveLog } = require('../models');

const getDiveSites = async (req, res) => {
  try {
    const diveSites = await DiveSite.findAll();
    res.json(diveSites);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const showDiveSite = async (req, res) => {
  console.log('showDiveSite:', req.params);
  try {
    const { country, name } = req.params;
    const diveSite = await DiveSite.findOne({
      where: { country, name },
      include: [
        // {
        //   model: CommentRating,
        //   include: [User],
        // },
        // DivePic,
        { model: User, as: 'user' },
        { model: DiveLog, as: 'diveLogs' }
      ],
      logging: console.log,
    });
    if (diveSite) {
      res.json(diveSite);
    } else {
      res.status(404).json({ error: 'DiveSite not found' });
    }
  } catch (error) {
    console.error('Error in showDiveSite:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

const checkDiveSite = async (req, res) => {
  const { country, name } = req.query;
  const diveSite = await DiveSite.findOne({ where: { country, name } });
  res.json(!!diveSite);
};

const createDiveSite = async (req, res) => {
  try {
    const diveSite = await DiveSite.create(req.body);
    res.status(200).json({ message: 'Dive site added successfully!' })
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getDiveSites,
  showDiveSite,
  checkDiveSite,
  createDiveSite
};