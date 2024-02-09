const { User } = require('../models');
const middleware = require('../middleware');

const Login = async (req, res) => {
    try {
        const { userName, password } = req.body;
        const user = await User.findOne({ where: { userName: userName } });
        if (!user) {
            return res.status(404).send({ status: 'Error', msg: 'That username is not registered.' });
        }
        const matched = await middleware.comparePassword(user.passwordDigest, password);
        if (!matched) {
            return res.status(401).send({ status: 'Error', msg: 'That password is incorrect.' });
        }
        const payload = {
            id: user.id,
            userName: user.userName
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
        const { userName, password } = req.body;
        const existingUser = await User.findOne({ where: { userName: userName } });
        if (existingUser) {
            return res.status(400).send({ status: 'Error', msg: 'That username is already in use.' });
        }
        const passwordDigest = await middleware.hashPassword(password);
        const user = await User.create({ userName, passwordDigest });
        res.send(user);
    } catch (error) {
        console.log(error);
        res.status(500).send({ status: 'Error', msg: 'An error has occurred!' });
    }
};

const CheckUserName = async (req, res) => {
    try {
      const { userName } = req.body;
      const existingUser = await User.findOne({ where: { userName: userName } });
      if (existingUser) {
        return res.send({ exists: true });
      } else {
        return res.send({ exists: false });
      }
    } catch (error) {
      console.log("CheckUserName error: "+error);
      res.status(500).send({ status: 'Error', msg: 'An error has occurred!' });
    }
};

const ChangePassword = async (req, res) => {
    try {
        const { userName, password, newPassword } = req.body
        const user = await User.findOne({ where: { userName: userName } });
        let matched = await middleware.comparePassword(
            user.passwordDigest,
            password
        )
        if (matched) {
            let passwordDigest = await middleware.hashPassword(newPassword)
            await User.update({ passwordDigest }, { where: { userName } })
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
    CheckUserName,
    ChangePassword,
    CheckSession
}