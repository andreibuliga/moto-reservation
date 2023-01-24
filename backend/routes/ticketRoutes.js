const express = require('express')
const router = express.Router()
const { createTicket } = require('../controllers/ticketController')

const { protect } = require('../middleware/authMiddleware')

router.route('/').get(protect).post(protect, createTicket)

router.route('/:id')

module.exports = router
