const express = require("express");
const app = express();
const hbs = require('hbs');
const mongoose = require('mongoose');
const NavBar = require('./src/modules/Navbarmodel');
const slider = require('./src/modules/slider')
const services = require("./src/modules/service");
const routes = require('./src/routes/routes');
const bodyParser = require("body-parser");



app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

app.use('/', routes)




















//* static page rendering path given below
app.use('/public', express.static('public'))

//* tamplate engine path 
app.set('view engine', 'hbs')
app.set('views','views')

//* components call 
hbs.registerPartials("views/components")














//! mongodb connection 
mongoose.connect('mongodb://localhost/full-web-app', () =>{
    console.log('Database Connected Sucessfully')

//* NavBar inserted into Database created 
// NavBar.create({
//         brandName:"Amir academy",
//         brandIconUrl:"C:\Users\Amiri\Desktop\Full-web-app\public\images\logo.png",
//         links: [{
//             label:'Home',
//             url:'/Home'
//         },
//         {
//             label:'Services',
//             url:'/Services'
//         },
//         {
//             label:'About us',
//             url:'/About'
//         },
//         {
//             label:'Contact us',
//             url:'/contact'
//         }]
//     })
    
//* slider object created
     // slider.create([
    //     {
    //         title: " slider 1 Learn JavaScript in Easy way",
    //         subTitle: "Subtitle string",
    //         imageUrl: "/static/images/img.jpg"
    //     },
    //     {
    //         title: " slider 2 Learn JavaScript in Easy way",
    //         subTitle: "Subtitle string",
    //         imageUrl: "/static/images/img.jpg"
    //     },
    //     {
    //         title: " slider 3 Learn JavaScript in Easy way",
    //         subTitle: "Subtitle string",
    //         imageUrl: "/static/images/img.jpg"
    //     },
    // ])

//* Cards sections created

// services.create([
//     {
//     icon: 'fa-solid fa-circle-user',
   
//     title: 'Courses we Offer',
   
//     Description: 'Python This is a high-level and general purpose language that focuses on code readability JavaScript C and C++',
   
//     linktext: 'www.google.com',
   
//     link: 'check'
//     },
   
//     {
//     icon: 'fa-brands fa-kickstarter',
   
//     title: 'Offer of projects',
   
//     Description: 'Mans mind once stretched by a new idea never regains its original dimensions',
   
//     linktext: 'www.google.com',
   
//     link: 'check'
//     },
    
//     {
//     icon: 'fa-solid fa-comments',
   
//     title: 'learn with realtime projects',
   
//     Description: 'Mans mind once stretched by a new idea never regains its original dimensions',
   
//     linktext: 'www.google.com',
   
//     link: 'check the offers'
//     }

// ])


});










//! Server config
const port = process.env.port || 5000
app.listen(port, ()=>{
    console.log(`http://localhost : ${port}`)
})