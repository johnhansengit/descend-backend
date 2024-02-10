const router = require('express').Router()
const controller = require('../controllers/SettingsController')
const middleware = require('../middleware')

router.get(
    '/',
    middleware.stripToken,
    middleware.verifyToken,
    controller.getSettings
)

router.put(
  '/',
  middleware.stripToken,
  middleware.verifyToken,
  controller.updateSettings
)

module.exports = router

