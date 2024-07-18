const mongoose = require('mongoose')
require('dotenv').config();

const MONGO_URL = process.env.MONGO_URL
const connectToDatabase  = ()=>
{
    mongoose
    .connect(MONGO_URL)
    .then(()=>{
        console.log("DB connected")
    })
    .catch((err)=>{
        console.log(err)
    })
}
module.exports = connectToDatabase ;