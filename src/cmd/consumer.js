import { sampleQueue } from '../queue'

const startConsumer = async () => {
  console.log('start Consumer')

  sampleQueue.process(async job => {
    await sendRatingMailTo(job.data.email)
  })

  console.log('done start Consumer')
}

function sendRatingMailTo(email) {
  console.log(email)
}

export { startConsumer }
