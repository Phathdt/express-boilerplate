import storage from '../storage'

const update = async (id, body) => {
  let { err } = await storage.find({ id })

  if (err) {
    return { err }
  }

  let { user, err: errUpdate } = await storage.update(id, body)

  if (errUpdate) {
    return { err: errUpdate }
  } else {
    return { user }
  }
}

export { update }
