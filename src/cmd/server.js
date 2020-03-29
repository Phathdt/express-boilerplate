import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
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

server.use((err, req, res, next) => {
  if (err) {
    console.error(err.message)

    if (!err.statusCode) {
      err.statusCode = 500
    }

    return res.status(err.statusCode).send({
      statusCode: err.statusCode,
      msg: err.message,
    })
  }

  next()
})

server.use(function(req, res) {
  res.status(404).json({
    msg: 'Page does not exist',
  })
})

const startServer = async () => {
  try {
    const port = process.env.PORT || 5000

    server.listen(port, () => console.log(`Server started on port ${port}`))
  } catch (err) {
    console.error(err)

    process.exit(1)
    return
  }
}

export { startServer }
