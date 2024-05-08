// const mongoose = require('mongoose')

// const UserSchema = new mongoose.Schema({
//     userName:String,
//     email:String,
//     password:String
// })

// const UserModel = mongoose.model("users", UserSchema)
// module.exports = UserModel

const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema({
  userName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});

UserSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

const UserModel = mongoose.model("users", UserSchema);
module.exports = UserModel;