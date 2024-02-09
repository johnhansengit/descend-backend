const router = require('express').Router()
const controller = require('../controllers/ProfileController')
const middleware = require('../middleware')

router.get(
    '/',
    middleware.stripToken,
    middleware.verifyToken,
    controller.GetProfile
)

router.post(
  '/',
  middleware.stripToken,
  middleware.verifyToken,
  controller.CreateProfile
)

router.put(
  '/',
  middleware.stripToken,
  middleware.verifyToken,
  controller.UpdateProfile
)

module.exports = router

