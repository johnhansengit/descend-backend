const router = require('express').Router()
const controller = require('../controllers/DiveSitesController')
const middleware = require('../middleware')

router.get(
    '/',
    middleware.stripToken,
    middleware.verifyToken,
    controller.getDiveSites
)

router.get(
    '/:id',
    middleware.stripToken,
    middleware.verifyToken,
    controller.showDiveSite
  )

router.post(
  '/new',
  middleware.stripToken,
  middleware.verifyToken,
  controller.createDiveSite
)

module.exports = router

