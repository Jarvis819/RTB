const mongoose = require('mongoose');
mongoose.set('strictQuery', true);
const passportLocalMongoose = require('passport-local-mongoose');
const passport = require('passport');
const UserSchema = new mongoose.Schema({
  // name: {
  //   type: String,
  // require: true,
  //   min: 3,
  //   max: 20,
  // },
  number: {
    type: String,
    required: true,
    unique: true,
    min: 10,
    max: 10,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  // password: {
  //   type: String,
  //   required: true,
  //   min: 6,
  // },
});
UserSchema.plugin(passportLocalMongoose);
const User = mongoose.model('User', UserSchema);
module.exports = User;
