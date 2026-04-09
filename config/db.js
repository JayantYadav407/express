const mongoose = require('mongoose')
const dns = require('node:dns');
// Use Google and Cloudflare DNS directly inside Node.js
dns.setServers(['8.8.8.8', '1.1.1.1']);
 


const url = "mongodb+srv://cosmosheirs:0vtuW92IaNnNUdyr@cluster0.231kt2l.mongodb.net/?appName=Cluster0";

const connectDB = async()=>{

    
    await mongoose.connect(url)
    .then(() => console.log("✅ MongoDB Connected..."))
    .catch(err => {
        console.error("Connection Error Details:");
        console.error(err);
    });
}

module.exports = connectDB;