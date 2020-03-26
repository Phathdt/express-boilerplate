import { Router } from 'express'

const orderRoute = Router()

orderRoute.get('/', (req, res) => {
  res.json({ msg: 'order' })
})

export default orderRoute
