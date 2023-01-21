const express = require('express')
const router = express.Router()

const { classify } = require('../controllers/co')

router.post('/classify', classify)

module.exports = router