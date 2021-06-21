const express = require('express')
const router = express.Router()

const home = require('./modules/home')
router.use('/', home)

const expense = require('./modules/expense')
router.use('/expense', expense)

module.exports = router