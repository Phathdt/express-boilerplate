import { startServer } from './server'
import { startMongo } from './mongo'

const excute = async () => {
  await startMongo()
  startServer()
}

export { excute }
