import hdl from '../handler'

export default async ({ params }, res, next) => {
  let { id } = params

  let { user, err } = await hdl.findUser({ id })

  if (err) {
    res.status(500).json({ msg: err.message })
  } else {
    res.json({ msg: user })
  }
}
