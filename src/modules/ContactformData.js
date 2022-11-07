const mongoose = require("mongoose");

const formData = mongoose.Schema({
//* the all objects name should be same as you given the name in the 
// *form in indexedDB.hbs file... 
    userName: String,
    userEmail: String,
    userPhoneNumber: String,
    userComments: String 
});



//* userformdata is a collection name AND formdata is schema Variable name 
module.exports =mongoose.model("userformdata", formData);