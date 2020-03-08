import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import morgan from 'morgan'
import 'dotenv/config'
import 'babel-core/register'
import 'babel-polyfill'

const app = express()

app.use(morgan(':method :url :status :res[content-length] - :response-time ms'))
app.use(cors())
app.use(express.json())
app.use(bodyParser.json())

app.get('/ping', (req, res) => {
  res.json({ msg: 'pong' })
})

const port = process.env.PORT || 5000

app.listen(port, () => console.log(`Server started on port ${port}`))
