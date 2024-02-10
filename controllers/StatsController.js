const { Stats } = require('../models');

const getStats = async (req, res) => {
    try {
      const userId = res.locals.payload.id;
      const stats = await Stats.findAll({ where: { userId } });
      res.json(stats);
    } catch (error) {
      console.error('Error fetching Stats:', error);
      res.status(500).send('Server error');
    }
  };
  

const createStats = async (req, res) => {  
    const userId = res.locals.payload.id;
    const statsDataArray = req.body;
  
    try {
      for (const statsData of statsDataArray) {
        const existingStats = await Stats.findOne({ where: { userId, diveTypeId: statsData.diveTypeId } });
  
        if (existingStats) {
          return res.status(400).send('Stats already exists');
        }
  
        await Stats.create({ ...statsData, userId });
      }
  
      res.status(201).send('Stats created successfully');
    } catch (error) {
      console.error('Error creating Stats:', error);
      res.status(500).json({ error: 'Error creating Stats' });
    }
  };

  const updateStats = async (req, res) => {
    try {
      const userId = res.locals.payload.id;
      const statsDataArray = req.body;
  
      for (const statsData of statsDataArray) {
        const [updatedRows] = await Stats.update(statsData, { where: { userId, diveTypeId: statsData.diveTypeId } });
        if (updatedRows === 0) {
          return res.status(404).send('Stats not found');
        }
      }
  
      const updatedStats = await Stats.findAll({ where: { userId } });
      res.json(updatedStats);
    } catch (error) {
      console.error('Error updating Stats:', error);
      res.status(500).send('Server error');
    }
  };

module.exports = {
    getStats,
    createStats,
    updateStats
}