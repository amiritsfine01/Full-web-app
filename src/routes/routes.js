const express = require('express');
const routes = express.Router(); 
const NavBar = require('../modules/Navbarmodel');
const slider = require('../modules/slider');
const service = require('../modules/service')
const Contactdata = require('../modules/ContactformData')
const logindata = require('../modules/Login');
const SignUp = require("../modules/Signup")
const { response } = require('express');




//! Root route or Home page
routes.get('/Home', async (request, response)=>{
  const dbcall = await NavBar.findOne({'_id':'636554c95b7cfbd8c5343e9f'})
  const sliderview = await slider.find()
  const Servicescrd = await service.find()

        // console.log(dbcall)
        // console.log(sliderview) 
        // console.log(Servicescrd)

        response.render('index.hbs',{
            dbcall : dbcall,
            sliderview : sliderview,
            Servicescrd : Servicescrd
        })
    
});



//! Contact-Us Form Route post
routes.post('/Contact-form', async (request, response) =>{
    console.log("Form Submitted")
    console.log(request.body);

    try {
        const data = await Contactdata.create(request.body)
        console.log(data)
        response.redirect('/Home')
    
    } catch (error) {
        console.log(error)
        response.redirect('')
    }
 });


 
 //!//!/Sign-up Route post
 routes.post('/Sign-up', async (request, response)=>{
   console.log("form submission")
   console.log(request.body)
   try {
    const data = await SignUp.create(request.body)
    console.log(data)
    response.redirect('/')
   } catch (error) {
    console.log(error)
    
   }
   
});

//!/Sign-up Route get 
 routes.get('/Sign-up', async (request, response)=>{
    const dbcall = await logindata.findOne({'_id' : '6360318080e71ceaad74e152'})
    response.render('Signup.hbs', {
        dbcall: dbcall
    })
});



//! Login Route post ...
routes.post('/Login', async (request, response)=>{
    console.log("form submission")
    // console.log(request.body)
    try {
     const email =request.body.email 
     const password =request.body.password
     const loginvalid = await SignUp.findOne({email: email, password: password});
     if (loginvalid.email === email && password === password) {
        console.log('login success')
     }else{
        response.redirect('/Sign-up')
     }
     response.redirect('/Home')
    } catch (error) {
     console.log(error)
     
    }
    
 });

//! Login Route and Get ... 
routes.get('/', (req, res)=> {
    res.render('login.hbs', )
})







//! Services page Route 
routes.get('/services', async (request, response)=>{
   const dbcall = await NavBar.findOne({'_id':'636554c95b7cfbd8c5343e9f'})
   response.render('services.hbs', {
    dbcall : dbcall
   })
});


//! About page Route 
routes.get('/about', async (request, response)=>{
    const dbcall = await NavBar.findOne({'_id':'636554c95b7cfbd8c5343e9f'})
    response.render('about.hbs', {
        dbcall : dbcall
    })
});


//! Contact us page Route 
routes.get('/contact', async (request, response)=>{
    const dbcall = await NavBar.findOne({'_id':'636554c95b7cfbd8c5343e9f'})
    console.log(dbcall)
    response.render('ContactUs.hbs', {
        dbcall : dbcall
    })
    
});































module.exports = routes