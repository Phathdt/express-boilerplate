import { User } from '../model'

const findByEmail = async email => {
  let isExist = await User.find({ email })

  if (isExist.length) {
    return { isExist }
  } else {
    return {}
  }
}

const find = async ({ id }) => {
  try {
    let user = await User.findById(id)

    if (user === null) {
      return { err: Error('Can not find this ID') }
    }

    return { user }
  } catch (err) {
    return { err }
  }
}

export { findByEmail, find }
