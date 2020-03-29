import hdl from '../handler'

export default async ({ body }, res, next) => {
  let { email, first_name, last_name } = body

  let { user, err } = await hdl.createUser({ email, first_name, last_name })

  if (err) {
    res.json({ msg: err })
  } else {
    res.json({ msg: user })
  }
}
