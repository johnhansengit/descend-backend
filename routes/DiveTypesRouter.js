const router = require('express').Router()
const controller = require('../controllers/DiveTypesController')
const middleware = require('../middleware')

router.get(
    '/',
    middleware.stripToken,
    middleware.verifyToken,
    controller.getDiveTypes
)

module.exports = router

