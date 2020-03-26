import { Router } from 'express'
import apiV1Route from './v1'

const apiRoute = Router()

apiRoute.use('/v1', apiV1Route)

export default apiRoute
