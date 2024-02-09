const multer = require('multer');
const upload = multer({ dest: 'uploads/' });
const { Profile } = require('../models');

const GetProfile = async (req, res) => {
    try {
        const profile = await Profile.findOne({ where: { userId: req.params.userId } });
        if (profile) {
            res.json(profile);
        } else {
            res.status(404).send('Profile not found');
        }
    } catch (error) {
        console.error('Error fetching profile:', error);
        res.status(500).send('Server error');
    }
};

const CreateProfile = async (req, res) => {
    try {
        const profileData = req.body;
        const userId = res.locals.payload.id;

        if (req.file) {
            profileData.profilePic = req.file.path;
        }

        const newProfile = await Profile.create({ ...profileData, userId });
        res.status(201).json(newProfile);
    } catch (error) {
        console.error('Error creating profile:', error);
        res.status(500).send('Server error');
    }
};


const UpdateProfile = async (req, res) => {
    try {
        const updatedProfile = await Profile.update(req.body, { where: { userId: req.params.userId } });
        if (updatedProfile) {
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
    GetProfile,
    CreateProfile,
    UpdateProfile
}
