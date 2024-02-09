const { Stats } = require('../models');

const getStats = async (req, res) => {
    try {
        const userId = res.locals.payload.id;
        const stats = await Stats.findOne({ where: { userId } });
        res.json(stats || []);
    } catch (error) {
        console.error('Error fetching Stats:', error);
        res.status(500).send('Server error');
    }
};

const createStats = async (req, res) => {
    try {
        const userId = res.locals.payload.id;
        const existingStats = await Stats.findOne({ where: { userId } });

        if (existingStats) {
            return res.status(400).send('Stats already exists');
        }

        const statsData = req.body;

        const newStats = await Stats.create({ ...statsData, userId });
        res.status(201).json(newStats);
    } catch (error) {
        console.error('Error creating Stats:', error);
        res.status(500).send('Server error');
    }
};

const updateStats = async (req, res) => {
    try {
        const userId = res.locals.payload.id;
        const statsData = req.body;

        const [updatedRows] = await Stats.update(statsData, { where: { userId } });
        if (updatedRows > 0) {
            const updatedStats = await Stats.findOne({ where: { userId } });
            res.json(updatedStats);
        } else {
            res.status(404).send('Stats not found');
        }
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