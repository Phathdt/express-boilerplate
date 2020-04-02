import { Router } from 'express'
import { createUser, listUser, findUser } from '@module/user/transport'

const userRoute = Router()

userRoute.get('/', (req, res) => {
  listUser(req, res)
})

userRoute.post('/', (req, res) => {
  createUser(req, res)
})

userRoute.get('/:id', (req, res) => {
  findUser(req, res)
})

export default userRoute
