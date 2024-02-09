const router = require('express').Router()
const controller = require('../controllers/CertificationController')
const middleware = require('../middleware')

router.get(
    '/',
    middleware.stripToken,
    middleware.verifyToken,
    controller.getCertifications
)

router.get(
    '/options',
    middleware.stripToken,
    middleware.verifyToken,
    controller.getCertificationRequirements
)

router.post(
  '/',
  middleware.stripToken,
  middleware.verifyToken,
  controller.createCertification
)

router.delete(
  '/:id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.deleteCertification
)

module.exports = router

