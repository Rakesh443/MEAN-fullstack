const mongoose = require('mongoose');


const courseSchema = new mongoose.Schema({
    name:{
        type: String,
        requried: true
    },
    desc:{
        type: String,
        requried:true
    },
    image:{
        type:String,
        requried:false
    }
})

module.exports = mongoose.model('Course',courseSchema)