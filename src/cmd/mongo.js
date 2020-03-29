import mongoose from 'mongoose'

const startMongo = async () => {
  mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })

  let env = process.env.NODE_ENV || 'development'
  let debug = env == 'development' ? true : false
  mongoose.set('debug', debug)

  const db = mongoose.connection

  db.on('error', console.error.bind(console, 'connection error:'))

  await db.once('open', () => {
    console.log('connect to mongodb')
  })
}

export { startMongo }
