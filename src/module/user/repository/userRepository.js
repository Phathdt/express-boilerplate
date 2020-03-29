import { User } from '../model'

const getAll = async () => {
  try {
    let users = await User.find()

    return { users }
  } catch (err) {
    return { err }
  }
}

const create = async ({ email, first_name, last_name }) => {
  let user = new User({ email, first_name, last_name })

  try {
    await user.save()

    return { user }
  } catch (err) {
    return { err }
  }
}

export default { getAll, create }
