//@desc     Get uer profile
//@route    GET /api/users/profile

import expressAsyncHandler from "express-async-handler"
import User from "../../models/userModel.js"

//@access   Private
export const getUserProfile =  expressAsyncHandler(async(req, res) => {
  const user = await User.findById(req.user._id).select('-password')
  res.json(user)
}) 
