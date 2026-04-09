
const express  = require("express");
const app = express();
const PORT = 3000;
const {usernameController,contactController,searchController,userLogin,userSignup}  =require('./control.js') 

//  Define a simple route
app.get('/',(req,res)=>{
    res.send("Hello, lodon gujrat")
})

//  Define a about route
app.get('/about',(req,res)=>{
    res.send("This is about contact route")
})

//  Define a contact route
app.get('/contact', contactController)

//  Handle the dynamic route
app.get('/user/:username',usernameController )

//  Handle query string  /search?keyword=express
app.get('/search', searchController)
 

//  Define a simple route
app.get('/login',userLogin);

// signup
app.get('/signup',usersignup);


app.listen(PORT,()=>{
    console.log(`Server us running on http://localhost:${PORT}`);
});
