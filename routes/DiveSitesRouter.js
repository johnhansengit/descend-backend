const router = require('express').Router()
const controller = require('../controllers/DiveSitesController')
const middleware = require('../middleware')

router.get(
  '/check',
  middleware.stripToken,
  middleware.verifyToken,
  controller.checkDiveSite
)

router.get(
  '/:country/:name',
  middleware.stripToken,
  middleware.verifyToken,
  controller.showDiveSite
)

router.get(
  '/',
  middleware.stripToken,
  middleware.verifyToken,
  controller.getDiveSites
)

router.post(
  '/add',
  middleware.stripToken,
  middleware.verifyToken,
  controller.createDiveSite
)

module.exports = router

