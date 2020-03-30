import storage from '../storage'

const create = async body => {
  let { isExist } = await storage.findByEmail(body.email)

  if (isExist) {
    let err = Error('Exist user')
    return { err }
  }

  let { user, err } = await storage.create(body)

  if (err) {
    return { err }
  } else {
    return { user }
  }
}

export { create }
