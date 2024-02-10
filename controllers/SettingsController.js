const { Settings } = require('../models');

const getSettings = async (req, res) => {
    try {
        const userId = res.locals.payload.id;
        const settings = await Settings.findOne({ where: { userId } });
        res.json(settings || []);
    } catch (error) {
        console.error('Error fetching settings:', error);
        res.status(500).send('Server error');
    }
};

const updateSettings = async (req, res) => {
    try {
        const userId = res.locals.payload.id;
        const settingsData = req.body;

        const [updatedRows] = await Settings.update(settingsData, { where: { userId } });
        if (updatedRows > 0) {
            const updatedSettings = await Settings.findOne({ where: { userId } });
            res.json(updatedSettings);
        } else {
            res.status(404).send('Settings not found');
        }
    } catch (error) {
        console.error('Error updating Settings:', error);
        res.status(500).send('Server error');
    }
};

module.exports = {
    getSettings,
    updateSettings
}