// programmer1711
// i2XhU41j4YO70pdv
require("dotenv").config()
const express = require('express')
const mongoose = require('mongoose')
const userRouter =require('./routes/Users')
const bodyParser = require('body-parser');

const app=express();
app.use(bodyParser.json());
app.use('/users', userRouter);

const CONECTION_URL='mongodb+srv://programmer1711:i2XhU41j4YO70pdv@temp-pro-db.ycuxzap.mongodb.net/school?retryWrites=true&w=majority';
const PORT=process.env.PORT || 5000;

mongoose.connect(process.env.CONECTION_URL,{useNewUrlParser:true,useUnifiedTopology:true}).then(
    ()=>app.listen(PORT,()=>console.log(`server runing on port ${PORT}`)))
    .catch((error)=>console.log(error.message));

    