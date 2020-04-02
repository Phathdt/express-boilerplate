import hdl from '../handler'

export default async ({ params, body }, res, next) => {
  let { first_name, last_name } = body
  let { id } = params

  let { user, err } = await hdl.updateUser(id, { first_name, last_name })

  if (err) {
    res.status(500).json({ msg: err.message })
  } else {
    res.json({ msg: user })
  }
}
