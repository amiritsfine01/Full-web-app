const mongoose = require("mongoose");

const SignUp = mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    minLength: 4,
    maxLength: 15,
  },

  email: {
    title: "Email address",
    type: "string",
    pattern: "^\\S+@\\S+\\.\\S+$",
    format: "email",
    minLength: 6,
    maxLength: 127,
  },
  password: Number,

  created: {
    type: Date,
    required: true,
    default: Date.now,
  },
});

module.exports = mongoose.model("SignUp", SignUp);
