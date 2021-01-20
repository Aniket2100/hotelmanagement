const RegistrationModel=require('../model/registration.model');
const Room=require('../model/room.model');



const roomStatus=  async (req,res,next)=>{
    try{
        const _id=req.params.id;
        const rStatus= await Room.findById(_id);
        res.send(rStatus);
        // res.send("you  are on manager controller");
    }
    catch (e) {
        res.send(e);
    }
}
const guestRequest = async (req,res,next)=> {
    try{
        const request = await RegistrationModel.find({"allocated":"false"})
        res.send(request);
    }
    catch (e) {
        res.send(e);
        console.log(e);
    }
}
const accept_req= async (req,res,next)=>{
    try{
        const _id=req.params.id;
        // const room_no=req.body;
        // console.log(room_no);
        const acceptReq=await RegistrationModel.findByIdAndUpdate(
            _id,{allocated:'true'}
        );
        res.send(acceptReq);
    }
    catch (e) {
        res.send(e);
    }

}
const reject_req= async (req,res,next)=>{
    try{
        const _id=req.params.id;

        const reject_req=await RegistrationModel.findByIdAndDelete(_id);
        res.send(reject_req);
    }
    catch (e) {
        res.send(e);
    }
}
module.exports={
    roomStatus,
    guestRequest,
    accept_req,
    reject_req,
}