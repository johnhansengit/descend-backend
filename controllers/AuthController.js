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
            return res.status(401).send({ status: 'Error', msg: 'Wrong password, buddy.' });
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
        const { userName, password, email } = req.body;
        const existingUserWithSameUserName = await User.findOne({ where: { userName: userName } });
        if (existingUserWithSameUserName) {
            return res.status(400).send({ status: 'Error', msg: 'That username is already in use.' });
        }
        const existingUserWithSameEmail = await User.findOne({ where: { email: email } });
        if (existingUserWithSameEmail) {
            return res.status(400).send({ status: 'Error', msg: 'There is already a user registered under that email.' });
        }
        const passwordDigest = await middleware.hashPassword(password);
        const user = await User.create({ userName, passwordDigest, email });
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

const CheckEmail = async (req, res) => {
    try {
      const { email } = req.body;
      const existingUser = await User.findOne({ where: { email: email } });
      if (existingUser) {
        return res.send({ exists: true });
      } else {
        return res.send({ exists: false });
      }
    } catch (error) {
      console.log("CheckEmail error: "+error);
      res.status(500).send({ status: 'Error', msg: 'An error has occurred!' });
    }
};

const ChangeUserName = async (req, res) => {
    try {
        const { userId, password, newUserName } = req.body
        const user = await User.findOne({ where: { id: userId } });
        let matched = await middleware.comparePassword(
            user.passwordDigest,
            password
        )
        if (matched) {
            const existingUserWithSameUserName = await User.findOne({ where: { userName: newUserName } });
            if (existingUserWithSameUserName) {
                return res.status(400).send({ status: 'Error', msg: 'That username is already in use.' });
            }
            await User.update({ userName: newUserName }, { where: { id: userId } })
            res.send({
                status: 'Success', msg:
                    'Username has been updated successfully!'
            })
        } else {
            res.status(401).send({ status: 'Error', msg: 'Incorrect password.' })
        }
    } catch (error) {
        console.log(error)
        res.status(500).send({ status: 'Error', msg: 'An error has occurred!' })
    }
}

const ChangeEmail = async (req, res) => {
    try {
        const { userId, password, newEmail } = req.body
        const user = await User.findOne({ where: { id: userId } });
        let matched = await middleware.comparePassword(
            user.passwordDigest,
            password
        )
        if (matched) {
            const existingUserWithSameEmail = await User.findOne({ where: { email: newEmail } });
            if (existingUserWithSameEmail) {
                return res.status(400).send({ status: 'Error', msg: 'That email is already in use.' });
            }
            await User.update({ email: newEmail }, { where: { id: userId } })
            res.send({
                status: 'Success', msg:
                    'Email has been updated successfully!'
            })
        } else {
            res.status(401).send({ status: 'Error', msg: 'Incorrect password.' })
        }
    } catch (error) {
        console.log(error)
        res.status(500).send({ status: 'Error', msg: 'An error has occurred!' })
    }
}

const ChangePassword = async (req, res) => {
    try {
        const { userId, password, newPassword } = req.body
        const user = await User.findOne({ where: { id: userId } });
        let matched = await middleware.comparePassword(
            user.passwordDigest,
            password
        )
        if (matched) {
            const passwordDigest = await middleware.hashPassword(newPassword);
            await User.update({ passwordDigest }, { where: { id: userId } })
            res.send({
                status: 'Success', msg:
                    'Password has been updated successfully!'
            })
        } else {
            res.status(401).send({ status: 'Error', msg: 'Incorrect password.' })
        }
    } catch (error) {
        console.log(error)
        res.status(500).send({ status: 'Error', msg: 'An error has occurred!' })
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
    CheckEmail,
    ChangeUserName,
    ChangeEmail,
    ChangePassword,
    CheckSession
}