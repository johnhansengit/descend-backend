const { DiveLog } = require('../models');

const getDiveLogs = async (req, res) => {

};

const showDiveLog = async (req, res) => {

};

const createDiveLog = async (req, res) => {
    try {
        const userId = res.locals.payload.id; 
        const { diveDate, diveTypeIds, ...diveLogData } = req.body;

        const newDiveLog = await DiveLog.create({ ...diveLogData, userId });

        if (diveTypeIds && diveTypeIds.length) {
            await newDiveLog.setDiveTypes(diveTypeIds);
        }

        const diveLogWithAssociations = await DiveLog.findByPk(newDiveLog.id, {
            include: [{ model: DiveType }]
        });

        res.status(201).json(diveLogWithAssociations);
    } catch (error) {
        console.error('Error creating diveLog:', error);
        res.status(500).send('Server error');
    }
};

const updateDiveLog = async (req, res) => {

};

const deleteDiveLog = async (req, res) => {

};

module.exports = {
    getDiveLogs,
    showDiveLog,
    createDiveLog,
    updateDiveLog,
    deleteDiveLog
}