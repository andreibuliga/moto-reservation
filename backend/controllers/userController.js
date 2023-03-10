const asyncHandler = require('express-async-handler')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const User = require('../models/userModel')

const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password, isAdmin, isDeveloper } = req.body

  if (!name || !email || !password) {
    res.status(400)
    throw new Error('Va rugam completati toate campurile')
  }

  const userExists = await User.findOne({ email })

  if (userExists) {
    res.status(400)
    throw new Error('Utilizatorul exista deja')
  }

  const salt = await bcrypt.genSalt(10)
  const hashedPassword = await bcrypt.hash(password, salt)

  const user = await User.create({
    name,
    email,
    password: hashedPassword,
    isAdmin,
    isDeveloper,
  })

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      isDeveloper: user.isDeveloper,
      token: generateToken(user._id),
    })
  } else {
    res.status(400)
    throw new error('Date utilizator invalide')
  }
})

const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body

  const user = await User.findOne({ email })

  if (user && (await bcrypt.compare(password, user.password))) {
    res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      isDeveloper: user.isDeveloper,
      token: generateToken(user._id),
    })
  } else {
    res.status(401)
    throw new Error('Credentiale invalide')
  }
})

const getMe = asyncHandler(async (req, res) => {
  const user = {
    id: req.user._id,
    email: req.user.email,
    name: req.user.name,
  }
  res.status(200).json(user)
})

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '30d',
  })
}

module.exports = {
  registerUser,
  loginUser,
  getMe,
}
