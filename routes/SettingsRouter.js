const router = require('express').Router()
const controller = require('../controllers/SettingsController')
const middleware = require('../middleware')

router.get(
    '/',
    middleware.stripToken,
    middleware.verifyToken,
    controller.getSettings
)

router.post(
  '/',
  middleware.stripToken,
  middleware.verifyToken,
  controller.createSettings
)

router.put(
  '/',
  middleware.stripToken,
  middleware.verifyToken,
  controller.updateSettings
)

module.exports = router

