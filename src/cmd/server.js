import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import 'dotenv/config'
import { morganSuccess, morganError, addRequestId } from '@root/middleware'
import routes from '@root/routes/api'

const server = express()

server.use(addRequestId)
server.use(morganSuccess)
server.use(morganError)
server.use(cors())
server.use(express.json())
server.use(bodyParser.json())
server.use(
  bodyParser.urlencoded({
    extended: true,
  }),
)

server.get('/ping', (_, res) => {
  res.json({ msg: 'pong' })
})

server.use('/api', routes)

export default server
