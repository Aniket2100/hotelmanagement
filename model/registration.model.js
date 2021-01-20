const mongoose=require('mongoose');
const GuestSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        // minlength:3
    },
    roomsRequired:{
        type:Number,
        min:1,
        max:3,
        required:true
    },
    roomNo:{
        type:Number,
        required:false
    },
    allocated:{
        type:Boolean,
        default:false
    }
})
module.exports=mongoose.model('RegistrationModel',GuestSchema,'registration');
