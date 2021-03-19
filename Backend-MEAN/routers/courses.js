const express = require('express');
const router = express.Router()
const Course = require('../models/course')

router.get('/',async(req,res)=>{
   try{
        const course = await Course.find();
        res.json(course)
   }catch(err){
       res.send("error  "+err)
   }
})

router.post('/',async(req,res)=>{
    try{
         const course = new Course({
             name:req.body.name,
             desc: req.body.desc,
             image: req.body.image
         })
         try{
            const c1 = await course.save()
            res.json(c1)
         }catch(err){
             res.send("Error "+err)
         }
         res.json(course)
    }catch(err){
        res.send("error  "+err)
    }
 })



module.exports=router