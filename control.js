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

module.exports =  {usernameController,searchController,contactController,userLogin,userSignup};