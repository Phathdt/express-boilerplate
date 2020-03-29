import mongoose from 'mongoose'

let userSchema = new mongoose.Schema({
  email: { type: String, unique: true },
  first_name: String,
  last_name: String,
})

let User = mongoose.model('users', userSchema)

export { User }
