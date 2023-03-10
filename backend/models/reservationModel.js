const mongoose = require('mongoose')
const { v4: uuidv4 } = require('uuid')

const reservationSchema = new mongoose.Schema({
  _id: {
    type: String,
    default: uuidv4,
  },
  customerName: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  startTime: {
    type: String,
    required: true,
  },
  endTime: {
    type: String,
    required: true,
  },
  atvModel: {
    type: String,
    required: true,
  },
})

const Reservation = mongoose.model('Reservation', reservationSchema)

module.exports = Reservation
