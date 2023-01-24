const asyncHandler = require('express-async-handler')

const Ticket = require('../models/ticketModel')

const createTicket = asyncHandler(async (req, res) => {
  const { product, description } = req.body

  if (!product || !description) {
    res.status(400)
    throw new Error('Va rugam selectati un produs')
  }

  const ticket = await Ticket.create({
    product,
    user: req.user.id,
  })

  res.status(201).json(ticket)
})

module.exports = {
  createTicket,
}
