import repo from '../repository'

const updateUser = async (id, body) => {
  let { user, err } = await repo.update(id, body)

  if (err) {
    return { err }
  } else {
    return { user }
  }
}

export { updateUser }
