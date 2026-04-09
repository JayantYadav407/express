const express = require('express')
const mongoose = require('mongoose')
const app = express();
const PORT = 3000
const connectDB = require('./config/db.js');
const Person = require('./model/Person.js')

app.get('/',(req,res)=>{
    res.send("hello Express")
})

connectDB();

app.use(express.json());

app.post('/person/get',async (req,res)=>{
    const {name} = req.body;
    const personData = await Person.findOne({name});
    res.send(personData);
})

app.post('/person' ,async(req,res)=>{
    const {name,email,age} = req.body;
    res.send(`user ${name} with email ${email} logged in successfully`)
    const newPerson = new Person({
        name,
        age,
        email
    })
    await newPerson.save();
    console.log(newPerson);
})

app.put('/person', async(req,res)=>{
    const {email,age,name} = req.body

    const personData = await Person.findOne({email})
    personData.age = age;
    personData.name = name;

    await personData.save();
    res.send(`update succesfull ${personData}`);
})

app.delete ('/person/:id',async (req,res)=>{
    const {id} = req.params
    await Person.findByIdAndDelete(id);
    res.send('User Deleted');
})



app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
})