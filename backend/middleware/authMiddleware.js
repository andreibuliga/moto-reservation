const jwt = require('jsonwebtoken')
const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')

const protect = asyncHandler(async (req, res, next) => {
  let token

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    try {
      token = req.headers.authorization.split(' ')[1]
      const decoded = jwt.verify(token, process.env.JWT_SECRET)
      req.user = await User.findById(decoded.id).select(
        '-password -__v -createdAt -updatedAt'
      )
      if (!req.user) {
        res.status(401)
        throw new Error('Neautorizat')
      }

      req.isAdmin = req.user.isAdmin
      req.isDeveloper = req.user.isDeveloper

      next()
    } catch (error) {
      console.log(error)
      res.status(401)
      throw new Error('Neautorizat')
    }
  }

  if (!token) {
    res.status(401)
    throw new Error('Neautorizat')
  }
})

module.exports = { protect }
