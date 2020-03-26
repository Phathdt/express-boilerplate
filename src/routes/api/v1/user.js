import { Router } from 'express'
import { createUser, listUser } from '@module/user/transport'

const userRoute = Router()

userRoute.get('/', (req, res) => {
  listUser(req, res)
})

userRoute.post('/', (req, res) => {
  createUser(req, res)
})

export default userRoute
