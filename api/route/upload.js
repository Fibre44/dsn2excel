const express = require('express');
const router = express.Router()
const mkdirFolder = require('../middleware/mkdirFolder')
const uploadCtrl = require('../controllers/upload')
const multer = require('../middleware/multer')

router.post('/', mkdirFolder, multer, uploadCtrl)

module.exports = router