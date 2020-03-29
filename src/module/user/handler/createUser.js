import repo from '../repository'

const createUser = async body => {
  let { user, err } = await repo.create(body)

  if (err) {
    return { err }
  } else {
    return { user }
  }
}

export { createUser }
