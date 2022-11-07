const mongoose = require("mongoose");


const logindata = mongoose.Schema({
  
  Fname: {
    type: "string",
    required: true,
  },
  Lname: {
    type: "string",
    required: true,
  },
  
  email: {
    title: "Email address",
    type: "string",
    pattern: "^\\S+@\\S+\\.\\S+$",
    format: "email",
    minLength: 6,
    maxLength: 127,
    unique: true
  },
  password: Number,
});

module.exports = mongoose.model("logindata", logindata);

