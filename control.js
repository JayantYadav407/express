 const usernameController = (req,res)=>{
    const username = req.params.username;
    res.send(`Welcome ${username}`);
}
 const searchController = (req,res)=>{
    const keyword = req.query.keyword;
    res.send(`Searching for ${keyword}`);
};

 const contactController  = (req,res)=>{
    res.send("This is contact route")
};


const userLogin = (req,res)=>{
    res.send('this is user login route')
}

const userSignup = (req,res)=>{
    res.send('this is user signup route')
}
const userRegister = (req,res)=>{
    const {name,email} = req.body;
    res.json({
        message:`User ${name} with email ${email} created succesfully`
    })
}

const userUpdate = (req,res)=>{
    const userId = req.params.id;
    const {name,email}  = req.body;
    res.json({
        message:`User ${userId} updated to ${name}, ${email}`
    })
};

const userDeleted = (req,res)=>{
    const userID = req.params.id;
    res.json({

        message:`User with id ${userID} deleted from the page successfully`
    })
};


module.exports =  {usernameController,searchController,contactController,userLogin,userSignup,userRegister,userDeleted,userUpdate};