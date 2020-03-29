import mongoose from 'mongoose'

let userSchema = new mongoose.Schema({
  email: String,
  first_name: String,
  last_name: String,
})

let User = mongoose.model('users', userSchema)

export { User }
