import userRoute from './user'
import orderRoute from './order'

import { Router } from 'express'

const apiV1Route = Router()

apiV1Route.use('/users', userRoute)
apiV1Route.use('/orders', orderRoute)

export default apiV1Route
