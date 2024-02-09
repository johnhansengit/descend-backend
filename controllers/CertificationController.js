const { UserCertification } = require('../models');
const { CertificationRequirement } = require('../models');

const getCertificationRequirements = async (req, res) => {
    try {
        const certificationRequirements = await CertificationRequirement.findAll({
            attributes: ['id', 'name']
        });
        res.json(certificationRequirements);
    } catch (error) {
        console.error('Error fetching certification requirements:', error);
        res.status(500).send('Server error');
    }
};

const getCertifications = async (req, res) => {
    try {
        const userId = res.locals.payload.id;
        const certifications = await UserCertification.findAll({ where: { userId } });
        res.json(certifications || []);
    } catch (error) {
        console.error('Error fetching certifications:', error);
        res.status(500).send('Server error');
    }
};

const createCertification = async (req, res) => {
    try {
        const userId = res.locals.payload.id;
        const certificationData = { ...req.body, userId };

        Object.keys(certificationData).forEach(key => {
            if (certificationData[key] === '') {
                certificationData[key] = null;
            }
        });

        const newCertification = await UserCertification.create(certificationData);
        res.status(201).json(newCertification);
    } catch (error) {
        console.error('Error creating certification:', error);
        res.status(500).send('Server error');
    }
};

const deleteCertification = async (req, res) => {
    try {
        const id = req.params.id;

        const deletedCertification = await UserCertification.destroy({ where: { id } });
        if (deletedCertification) {
            res.json({ message: `Certification with id ${id} successfully deleted.` });
        } else {
            res.status(404).send('Certification not found');
        }
    } catch (error) {
        console.error('Error deleting certification:', error);
        res.status(500).send('Server error');
    }
};

module.exports = {
    getCertificationRequirements,
    getCertifications,
    createCertification,
    deleteCertification
}