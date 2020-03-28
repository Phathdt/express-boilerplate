import 'dotenv/config'
import server from './server'

const startServer = () => {
  try {
    const port = process.env.PORT || 5000

    server.listen(port, () => console.log(`Server started on port ${port}`))
  } catch (err) {
    console.error(err)

    process.exit(1)
    return
  }
}

const excute = () => {
  startServer()
}

export { excute }
