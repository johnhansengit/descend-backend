const { User } = require('../models');

const getUser = async (req, res) => {
    try {
        const userId = res.locals.payload.id;
        const user = await User.findOne({ where: { userId } });
        if (user) {
            res.json(user);
        } else {
            res.status(404).send('User not found');
        }   
    } catch (error) {
        console.error('Error fetching User:', error);
        res.status(500).send('Server error');
    }
};

const updateUser = async (req, res) => {
    try {
        const userId = res.locals.payload.id;
        const userData = req.body;

        const [updatedRows] = await User.update(userData, { where: { userId } });
        if (updatedRows > 0) {
            const updatedUser = await User.findOne({ where: { userId } });
            res.json(updatedUser);
        } else {
            res.status(404).send('User not found');
        }
    } catch (error) {
        console.error('Error updating User:', error);
        res.status(500).send('Server error');
    }
};

module.exports = {
    getUser,
    updateUser
}