const mongoose=require('mongoose');
const RoomSchema=new mongoose.Schema(
    {
        roomNo:{
            type:Number,
            required:true,
        },
        allocated:{
            type:Boolean,
            default:false,
        }
    }
)
module.exports=mongoose.model('Room',RoomSchema);