import { User } from '../model'

const update = async (id, body) => {
  try {
    let user = await User.findByIdAndUpdate(id, body, { new: true })

    return { user }
  } catch (err) {
    return { err }
  }
}

export { update }
