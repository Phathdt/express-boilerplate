import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import 'dotenv/config'
import { morganSuccess, morganError } from './middleware/morgan'
import { addRequestId } from './middleware/requestid'
import routes from './routes/api'

const app = express()

app.use(addRequestId)
app.use(morganSuccess)
app.use(morganError)
app.use(cors())
app.use(express.json())
app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true
  })
)

app.get('/ping', (req, res) => {
  res.json({ msg: 'pong' })
})

app.use('/api', routes)

const port = process.env.PORT || 5000

app.listen(port, () => console.log(`Server started on port ${port}`))
