const express = require('express')
const router = express.Router()
const Reservation = require('../models/reservationModel')

// Create a new reservation
router.post('/', async (req, res, next) => {
  try {
    const reservation = new Reservation({
      customerName: req.body.customerName,
      date: req.body.date,
      startTime: req.body.startTime,
      endTime: req.body.endTime,
      atvModel: req.body.atvModel,
    })
    const savedReservation = await reservation.save()
    res.status(201).json(savedReservation)
  } catch (error) {
    next(error)
  }
})

// Get all reservations
router.get('/', async (_, res, next) => {
  try {
    const reservations = await Reservation.find({})
    res.json(reservations)
  } catch (error) {
    next(error)
  }
})

// Delete multiple reservations by ids
router.delete('/', async (req, res, next) => {
  try {
    const { ids } = req.body

    const deletedReservations = await Reservation.deleteMany({
      _id: { $in: ids },
    })

    if (deletedReservations.deletedCount === 0) {
      res.status(404)
      throw new Error('No reservations found')
    }

    res.json(deletedReservations)
  } catch (error) {
    next(error)
  }
})

// Get a reservation by id
router.get('/:id', async (req, res, next) => {
  try {
    const reservation = await Reservation.findById(req.params.id)
    if (!reservation) {
      res.status(404)
      throw new Error('Reservation not found')
    }
    res.json(reservation)
  } catch (error) {
    next(error)
  }
})

// Update a reservation by id
router.put('/:id', async (req, res, next) => {
  try {
    const { customerName, date, startTime, endTime, atvModel } = req.body
    const updatedReservation = await Reservation.findByIdAndUpdate(
      req.params.id,
      { customerName, date, startTime, endTime, atvModel },
      { new: true }
    )
    if (!updatedReservation) {
      res.status(404)
      throw new Error('Reservation not found')
    }
    res.json(updatedReservation)
  } catch (error) {
    next(error)
  }
})

// Delete a reservation by id
router.delete('/:id', async (req, res, next) => {
  try {
    const deletedReservation = await Reservation.findByIdAndDelete(
      req.params.id
    )
    if (!deletedReservation) {
      res.status(404)
      throw new Error('Reservation not found')
    }
    res.json(deletedReservation)
  } catch (error) {
    next(error)
  }
})

module.exports = router
