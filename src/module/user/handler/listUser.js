import repo from '../repository'

const listUser = async body => {
  let { users, err } = await repo.listUser(body)

  if (err) {
    return { err }
  } else {
    return { users }
  }
}

export { listUser }
