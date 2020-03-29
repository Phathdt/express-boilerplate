import hdl from '../handler'

export default async (req, res, next) => {
  let { users, err } = await hdl.listUser()

  if (err) {
    res.json({ msg: err })
  } else {
    res.json({ msg: users })
  }
}
