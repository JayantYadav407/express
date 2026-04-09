
const express  = require("express");
const app = express();
const PORT = 3000;
const {usernameController,contactController,searchController,userLogin,userSignup}  =require('./control.js') ;

const {router} = require('./route.js');
const multer = require('multer')
//  Define a simple route
// app.get('/',(req,res)=>{
//     res.send("Hello, lodon gujrat")
// })

//  Define a about route
app.get('/about',(req,res)=>{
    res.send("This is about contact route")
})

//  Define a contact route
app.get('/contact', contactController)

//  Handle the dynamic route
app.get('/username/:username',usernameController )

//  Handle query string  /search?keyword=express
app.get('/search', searchController)
 

// //  Define a simple route
// app.get('/login',userLogin);

// // signup
// app.get('/signup',userSignup);

app.use('/user',router)



//  POST Method
// app.post('/users',express.json(),register
// );

// //  PUT Method
// app.put('/users/:id',express.json(),);

// // DELETE Method 
 
// app.delete('/users/:id',)



// Using regular express in route

app.get('/things/:name/:id', (req, res) => {
    const { name, id } = req.params;

    // Manually check if ID is 5 digits
    const idRegex = /^[0-9]{5}$/;
    
    if (!idRegex.test(id)) {
        return res.status(400).send("Invalid ID format. Must be 5 digits.");
    }

    res.json({ name, id });
});

// Middleware function

app.use('/welcome', (req,res,next)=>{
    console.log("A new request recieved at "+ Date.now());
    res.on('finish',()=>{
        console.log("END");
    });
    next();
})

//  Error handling Middleware
app.get('/error',()=>{
    console.log("this is called")
    throw new Error('This is test error')
})

app.use((err,req,res,next)=>{
    console.error(err.messsage)
    res.send('Internal Server Error')
})




app.get('/welcome',(req,res)=>{
    console.log("Middle")
    res.send('welcome to Express App');
})

// Set EJS as the view engine  

app.set('view engine','ejs')
app.get('/',(req,res)=>{
    const userName = 'Jayant'
    res.render('index',{userName})
})

//  getting static file from backend to the server

app.use('/public',express.static('public'))
app.use('/images',express.static('images'))


// handling form data 



app.use(express.urlencoded({extended:true}))

const { storage} = require('./config/multer.js' )
const upload = multer({storage:storage,
    limits:{
        fileSize:1024*10000
    }
});



app.use(upload.single('file'))
  


app.post('/form',express.json(),(req,res)=>{
    console.log(req.body)
    console.log(req.file)
    res.send("Getting the form data");
})
 
// Catch-all invalid route

// 2. The wildcard / 404 handler LAST
// app.use((req, res) => {
//     res.status(404).send("Sorry, this is an invalid URL");
// });f

app.listen(PORT,()=>{
    console.log(`Server us running on http://localhost:${PORT}`);
});

