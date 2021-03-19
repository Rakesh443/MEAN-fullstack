const express = require('express');
const mongoose =require('mongoose');
const cors = require('cors');
const url = "mongodb://localhost:27017/iSmartStore";
const app = express() 

mongoose.connect(url,{useNewUelParser:true})
const con = mongoose.connection

con.on('open', ()=>{
    console.log('connected')
});
app.use(express.json())
app.use(cors({origin: "http://localhost:4200"}))
const cousesRouter = require('./routers/courses')
app.use('/courses',cousesRouter)
app.listen(9000,()=>{
    console.log("server started")
})