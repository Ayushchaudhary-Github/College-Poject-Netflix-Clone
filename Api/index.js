const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(()=> console.log("Connected to MongoDB"))
.catch((err)=> console.log(err));

app.listen(8800,()=>{
    console.log("Server is running on port 8800");
});