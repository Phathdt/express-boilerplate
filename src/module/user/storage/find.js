import { User } from '../model'

const findByEmail = async email => {
  let isExist = await User.find({ email: email })

  if (isExist.length) {
    return { isExist }
  } else {
    return {}
  }
}

export { findByEmail }
