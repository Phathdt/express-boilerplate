import repo from '../repository'

const findUser = async ({ id }) => {
  let { user, err } = await repo.find({ id })

  if (err) {
    return { err }
  } else {
    return { user }
  }
}

export { findUser }
