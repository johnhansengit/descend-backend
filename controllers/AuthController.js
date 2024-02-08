const { User } = require('../models');
const middleware = require('../middleware');

const Login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ where: { email: email } });
        if (!user) {
            return res.status(404).send({ status: 'Error', msg: 'That email is not registered.' });
        }
        const matched = await middleware.comparePassword(user.passwordDigest, password);
        if (!matched) {
            return res.status(401).send({ status: 'Error', msg: 'That password is incorrect.' });
        }
        const payload = {
            id: user.id,
            email: user.email
        };
        const token = middleware.createToken(payload);
        return res.send({ user: payload, token });
    } catch (error) {
        console.log(error);
        res.status(500).send({ status: 'Error', msg: 'An error has occurred!' });
    }
};

const Register = async (req, res) => {
    try {
        const { email, password, name } = req.body;
        const existingUser = await User.findOne({ where: { email: email } });
        if (existingUser) {
            return res.status(400).send({ status: 'Error', msg: 'That email is already in use.' });
        }
        const passwordDigest = await middleware.hashPassword(password);
        const user = await User.create({ name, email, passwordDigest });
        res.send(user);
    } catch (error) {
        console.log(error);
        res.status(500).send({ status: 'Error', msg: 'An error has occurred!' });
    }
};

const ChangePassword = async (req, res) => {
    try {
        // Extracts the necessary fields from the request body
        const { email, password, newPassword } = req.body
        // Finds a user by a particular field (in this case, email)
        const user = await User.findOne({ where: { email: email } });
        // Checks if the password matches the stored digest
        let matched = await middleware.comparePassword(
            user.passwordDigest,
            password
        )
        // If they match, constructs a payload object of values we want on the front end
        if (matched) {
            let passwordDigest = await middleware.hashPassword(newPassword)
            // Updates the user's password
            await User.update({ passwordDigest }, { where: { email } })
            // Sends a success message
            res.send({
                status: 'Success', msg:
                    'Password has been updated successfully!'
            })
        }
    } catch (error) {
        console.log(error)
        res.status(401).send({ status: 'Error', msg: 'An error has occurred!' })
    }
}

const CheckSession = async (req, res) => {
    const { payload } = res.locals
    res.send(payload)
  }  

module.exports = {
    Login,
    Register,
    ChangePassword,
    CheckSession
}