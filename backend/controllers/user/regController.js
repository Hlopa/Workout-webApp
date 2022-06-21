import User from '../../models/userModel.js'
import asyncHandler from 'express-async-handler'
import { generateTocken } from '../../helpers/generateToken.js'
//@desc     Register User
//@route    POST /api/users
//@access   Public
export const registerUser = asyncHandler(async(req, res) => {
  const {email, password} = req.body

  const isHaveUser = await User.findOne({email})

  if(isHaveUser){
    res.status(400)
    throw new Error('Данный пользователь уже зарегистрирован')
  }

  const user = await User.create({
    email, password
  })

  const token = generateTocken(user._id)

  res.json({user, token})
})