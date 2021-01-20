const regModel= new RegistrationModel(req.body);
await regModel.save().then(()=>{
    res.status(201).send(regModel);
}).catch((e)=>{
    res.status(400).send(e);
})