const router = require('express').Router()
const controller = require('../controllers/StatsController')
const middleware = require('../middleware')

router.get(
    '/',
    middleware.stripToken,
    middleware.verifyToken,
    controller.getStats
)

router.post(
  '/',
  middleware.stripToken,
  middleware.verifyToken,
  controller.createStats
)

router.put(
  '/',
  middleware.stripToken,
  middleware.verifyToken,
  controller.updateStats
)

module.exports = router

