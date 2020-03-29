import hdl from '../handler'

export default async ({ body }, res, next) => {
  let { email, first_name, last_name } = body

  let { user, err } = await hdl.createUser({ email, first_name, last_name })

  if (err) {
    res.status(500).json({ msg: err.message })
  } else {
    res.json({ msg: user })
  }
}
