const router = require('express').Router()
const controller = require('../controllers/UserController')
const middleware = require('../middleware')

router.get(
    '/',
    middleware.stripToken,
    middleware.verifyToken,
    controller.getUser
)

router.put(
  '/',
  middleware.stripToken,
  middleware.verifyToken,
  controller.updateUser
)

module.exports = router

