const router = require('express').Router()
const controller = require('../controllers/ProfileController')
const middleware = require('../middleware')
const multer = require('multer');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/')
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now())
  }
});

const upload = multer({ storage: storage });

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
  upload.single('profilePic'),
  controller.CreateProfile
)

router.put(
  '/',
  middleware.stripToken,
  middleware.verifyToken,
  controller.UpdateProfile
)

module.exports = router

