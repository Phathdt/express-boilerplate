import Queue from 'bull'

const sampleQueue = new Queue('sample', process.env.REDIS_URI)

export { sampleQueue }
