const mongoose = require("mongoose");
const service = mongoose.Schema({
    icon: String,
    title: String,
    Description: String,
    linktext: String,
    link: String
})

module.exports = mongoose.model('services', service);