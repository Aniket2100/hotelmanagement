const mongoose = require('mongoose');
const connectDB = async ()=>{
   await mongoose.connect("mongodb+srv://aniketdb:aniket2100@cluster0.4d0lk.mongodb.net/aniketdb?retryWrites=true&w=majority",{
      useFindAndModify: false,
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true
   });
   console.log("db connected..");
}
module.exports=connectDB;