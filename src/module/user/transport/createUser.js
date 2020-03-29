import UserRepository from '../repository/userRepository'

export default async ({ body }, res, next) => {
  let { email, first_name, last_name } = body

  let { user, err } = await UserRepository.create({
    email,
    first_name,
    last_name,
  })

  if (err) {
    res.json({ msg: err })
  } else {
    res.json({ msg: user })
  }
}
