import { User } from '../model'

const create = async ({ email, first_name, last_name }) => {
  let user = new User({ email, first_name, last_name })

  try {
    await user.save()

    return { user }
  } catch (err) {
    return { err }
  }
}

export { create }
