import { User } from '../model'

const listUser = async () => {
  try {
    let users = await User.find()

    return { users }
  } catch (err) {
    return { err }
  }
}

export { listUser }
