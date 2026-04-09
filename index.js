 const express  = require("express");
 const app = express();

 const PORT = 3000;

//  Define a simple route
app.get('/',(req,res)=>{
    res.send("Hello, lodon gujrat")
})

//  Define a about route
app.get('/about',(req,res)=>{
    res.send("This is about contact route")
})

//  Define a contact route
app.get('/contact',(req,res)=>{
    res.send("This is contact route")
})

app.listen(PORT,()=>{
    console.log(`Server us running on http://localhost:${PORT}`);
});
