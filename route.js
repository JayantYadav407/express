const express = require('express');
const {userLogin,userSignup,userRegister,userUpdate,userDeleted} = require('./control.js');

const router = express.Router();

router.get('/login',userLogin);

router.get('/signup',userSignup);

// POST
router.post('/register',express.json(),userRegister);

// UPDATE
router.put('/update/:id',express.json(), userUpdate);

// DELETE
router.delete('/delete/:id',express.json(),userDeleted);


module.exports = {router};