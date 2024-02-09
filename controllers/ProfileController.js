const { Profile } = require('../models');

const getProfile = async (req, res) => {
    try {
        const userId = res.locals.payload.id;
        const profile = await Profile.findOne({ where: { userId } });
        res.json(profile || []);
    } catch (error) {
        console.error('Error fetching profile:', error);
        res.status(500).send('Server error');
    }
};

const createProfile = async (req, res) => {
    try {
        const userId = res.locals.payload.id;
        const existingProfile = await Profile.findOne({ where: { userId } });

        if (existingProfile) {
            return res.status(400).send('Profile already exists');
        }

        const profileData = req.body;

        ['heightCm', 'heightFt', 'heightIn', 'weight'].forEach(key => {
            if (profileData[key] === '') {
                profileData[key] = null;
            }
        });

        const newProfile = await Profile.create({ ...profileData, userId });
        res.status(201).json(newProfile);
    } catch (error) {
        console.error('Error creating profile:', error);
        res.status(500).send('Server error');
    }
};

const updateProfile = async (req, res) => {
    try {
        const userId = res.locals.payload.id;
        const profileData = req.body;

        ['heightCm', 'heightFt', 'heightIn', 'weight'].forEach(key => {
            if (profileData[key] === '') {
                profileData[key] = null;
            }
        });

        const [updatedRows] = await Profile.update(profileData, { where: { userId } });
        if (updatedRows > 0) {
            const updatedProfile = await Profile.findOne({ where: { userId } });
            res.json(updatedProfile);
        } else {
            res.status(404).send('Profile not found');
        }
    } catch (error) {
        console.error('Error updating profile:', error);
        res.status(500).send('Server error');
    }
};

module.exports = {
    getProfile,
    createProfile,
    updateProfile
}