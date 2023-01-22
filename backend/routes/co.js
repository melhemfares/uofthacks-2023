const express = require('express')
const router = express.Router()

const { classify, createConversation } = require('../controllers/co')

router.post('/classify', classify)
router.get('/', createConversation)

module.exports = router