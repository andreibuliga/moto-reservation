const mongoose = require('mongoose')

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Va rugam adaugati un nume'],
    },
    email: {
      type: String,
      required: [true, 'Va rugam adaugati un email'],
      unique: true,
    },
    password: {
      type: String,
      required: [true, 'Va rugam adaugati o parola'],
    },
    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model('User', userSchema)
