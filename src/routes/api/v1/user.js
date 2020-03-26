import { Router } from 'express'

const userRoute = Router()

userRoute.get('/', (req, res) => {
  res.json({ msg: 'user' })
})

export default userRoute
