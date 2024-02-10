const router = require('express').Router()
const controller = require('../controllers/AuthController')
const middleware = require('../middleware')

router.post('/login', controller.Login)
router.post('/register', controller.Register)
router.post('/checkUserName', controller.CheckUserName)
router.post('/checkEmail', controller.CheckEmail)
router.post('/changeUserName', controller.ChangeUserName)
router.post('/changeEmail', controller.ChangeEmail)
router.post('/changePassword', controller.ChangePassword)

router.put(
  '/update/:user_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.ChangePassword
)
router.get(
  '/session',
  middleware.stripToken,
  middleware.verifyToken,
  controller.CheckSession
)

module.exports = router
