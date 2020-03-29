import storage from '../storage'

const create = async body => {
  let { user, err } = await storage.create(body)

  if (err) {
    return { err }
  } else {
    return { user }
  }
}

export { create }
