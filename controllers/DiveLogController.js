const { DiveLog } = require('../models');
const { DiveType } = require('../models');
const { DiveSite } = require('../models');

const getDiveLogs = async (req, res) => {
    try {
        const diveLogs = await DiveLog.findAll({ include: [
            { model: DiveType }, 
            { model: DiveSite, attributes: ['name', 'country']}] });
        res.status(200).json(diveLogs);
    } catch (error) {
        console.error('Error getting diveLogs:', error);
        res.status(500).send('Server error');
    }
};

const showDiveLog = async (req, res) => {
    try {
        const diveLog = await DiveLog.findByPk(req.params.id, { include: [{ model: DiveType }] });
        if (!diveLog) {
            return res.status(404).send('DiveLog not found');
        }
        res.status(200).json(diveLog);
    } catch (error) {
        console.error('Error getting diveLog:', error);
        res.status(500).send('Server error');
    }
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
    try {
        const { diveDate, diveTypeIds, ...diveLogData } = req.body;
        const diveLog = await DiveLog.findByPk(req.params.id);
        if (!diveLog) {
            return res.status(404).send('DiveLog not found');
        }
        await diveLog.update(diveLogData);
        if (diveTypeIds && diveTypeIds.length) {
            await diveLog.setDiveTypes(diveTypeIds);
        }
        const updatedDiveLog = await DiveLog.findByPk(diveLog.id, { include: [{ model: DiveType }] });
        res.status(200).json(updatedDiveLog);
    } catch (error) {
        console.error('Error updating diveLog:', error);
        res.status(500).send('Server error');
    }
};

const deleteDiveLog = async (req, res) => {
    try {
        const diveLog = await DiveLog.findByPk(req.params.id);
        if (!diveLog) {
            return res.status(404).send('DiveLog not found');
        }
        await diveLog.destroy();
        res.status(204).send();
    } catch (error) {
        console.error('Error deleting diveLog:', error);
        res.status(500).send('Server error');
    }
};

module.exports = {
    getDiveLogs,
    showDiveLog,
    createDiveLog,
    updateDiveLog,
    deleteDiveLog
}