const { DiveType } = require('../models');

const getDiveTypes = async (req, res) => {
    try {
        const diveTypes = await DiveType.findAll();
        if (diveTypes) {
            res.json(diveTypes);
        } else {
            res.status(404).send('Dive types not found');
        }
    } catch (error) {
        console.error('Error fetching Stats:', error);
        res.status(500).send('Server error');
    }
};

module.exports = {
    getDiveTypes
}