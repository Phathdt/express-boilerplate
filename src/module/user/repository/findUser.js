import storage from '../storage'

const find = async ({ id }) => {
  let { user, err } = await storage.find({ id })

  if (err) {
    return { err }
  } else {
    return { user }
  }
}

export { find }
