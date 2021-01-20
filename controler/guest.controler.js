const RegistrationModel=require('../model/registration.model');
const Room=require('../model/room.model');
// const mongoose=require('mongoose');
const express=require('express');
const ab=express();
ab.use(express.json());
const getIp=async(req,res,next)=>{
try{
    const ip = req.connection.remoteAddress;
    res.json({message:"your ip address is"+ip});
}
catch (error) {
    next(error);
}
}

const register=async (req, res, next)=> {

    try {
        const regModel = new RegistrationModel(req.body);
        const response = await regModel.save();
        if (response) {
            res.send(response)
        } else {
            res.status(404).send("Something went wrong while storing record");
        }
    } catch (error) {
        res.status(404).send(error);
    }
}
const roomData=async (req, res, next)=> {

    try {
        const regModel = new Room(req.body);
        const response = await regModel.save();

        if (response) {
            res.send(response)
        } else {
            res.send("Something went wrong while storing record");
        }
    } catch (error) {
        res.send(error);
    }
    res.send("inside room...");
}
const registerD=async (req,res,next)=>{
    try{
        const guestData= await RegistrationModel.find();
        res.send(guestData)
    }
    catch (e) {
        res.send(e);
    }
}


module.exports={
    getIp,
    register,
    registerD,
    roomData,
}