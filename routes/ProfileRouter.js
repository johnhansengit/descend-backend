const router = require('express').Router()
const controller = require('../controllers/ProfileController')
const middleware = require('../middleware')

router.get(
    '/',
    middleware.stripToken,
    middleware.verifyToken,
    controller.getProfile
)

router.post(
  '/',
  middleware.stripToken,
  middleware.verifyToken,
  controller.createProfile
)

router.put(
  '/',
  middleware.stripToken,
  middleware.verifyToken,
  controller.updateProfile
)

module.exports = router

