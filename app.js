const express= require('express');
const path=require('path');

const connectDB=require('./connection');
// const cookieParser = require('cookie-parser');
const mongoose=require('mongoose');
const app=express();

const guestRouter = require('./routes/guest.route');
const managerRouter=require('./routes/manager.route');


app.use(express.json());
connectDB();
app.use('/guest',guestRouter);
app.use('/manager',managerRouter);
app.listen(5000,()=>console.log("running on 5000"));