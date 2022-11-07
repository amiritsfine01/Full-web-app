const mongoose =require('mongoose');

const NavBar = mongoose.Schema({
    brandName:String,
    brandIconUrl:String,
    links:[{
        label:String,
        url:String
    }]
});


module.exports = mongoose.model('NavBar', NavBar) 