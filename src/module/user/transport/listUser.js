import UserRepository from '../repository/userRepository'

export default async (req, res, next) => {
  let { users, err } = await UserRepository.getAll()

  if (err) {
    res.json({ msg: err })
  } else {
    res.json({ msg: users })
  }
}
