const express = require('express');
const mongoose = require('mongoose');
const cookieParser  = require('cookie-parser');
const session = require('express-session')

const app = express();
const PORT = 3000;

app.use(express.json())
app.use(cookieParser());

app.use(session({
    secret:'sample-secret',
    resave:false,
    saveUninitialized:false
}))


app.get('/visit',(req,res)=>{
    if(req.session.page_views){
        req.session.page_views++;
        res.send(`You visited this page ${req.session.page_views} times`)
    }
    else {
        req.session.page_views = 1;
        res.send("Welcome to this page for first time");
    }
})
app.get('/remove-visit',(req,res)=>{
    req.session.destroy();
    res.send('Session Removes');
})

app.get('/',(req,res)=>{

    res.cookie('name','express-app')
    res.send('Hello Express')
})

app.get('/fetch',(req,res)=>{
    console.log(req.cookies);
    res.send('API Called')
})

app.get('/remove-cookie',(req,res)=>{
    res.clearCookie('name');
    res.send('Cookie cleared')
});




const users= [];

app.post('/register',async(req,res)=>{
    const {username, password} = req.body
    users.push({username,password})
    res.send('User registerd')
})

app.post('/login',async(req,res)=>{
    const {username, password} = req.body
    const user = users.find(u=>u.username===username)
    if(!user ||password !==user.password)
        {
            return res.send('Not Authorised')
        }
    req.session.user = user 
    res.send('User Logged In');
    
})

app.get('/dashboard',(req,res)=>{
    if(!req.session.user){
        return res.send('Unathorized')
    }
    res.send(`Welcome ${req.session.user}`)
    res.send("this is happening")
})

app.listen(PORT,()=>{
    console.log(`Server is running htttp:localhost:${PORT}`)
});
