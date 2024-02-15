const router = require('express').Router()
const controller = require('../controllers/DiveLogController')
const middleware = require('../middleware')

router.get(
  '/',
  middleware.stripToken,
  middleware.verifyToken,
  controller.getDiveLogs
)

router.get(
  '/:id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.showDiveLog
)

router.post(
  '/',
  middleware.stripToken,
  middleware.verifyToken,
  controller.createDiveLog
)

router.put(
  '/',
  middleware.stripToken,
  middleware.verifyToken,
  controller.updateDiveLog
)

router.delete(
  '/:id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.deleteDiveLog
)

module.exports = router

