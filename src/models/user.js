const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

userSchema.set("toJSON", {
  transform: function (doc, ret, opts) {
    delete ret["password"];
    return ret;
  },
});

module.exports = User = mongoose.model("User", userSchema);
