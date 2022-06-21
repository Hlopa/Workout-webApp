import jwt from 'jsonwebtoken'

export const generateTocken = (userId) => jwt.sign({
  userId
}, process.env.ACCESS_TOKEN, {
  expiresIn: '10d'
})