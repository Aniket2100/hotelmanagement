const router=require('express').Router();
// const Room=require('../model/room.model');
const managerController=require('../controler/manager.controller');

router.get("/roomstatus/:id",managerController.roomStatus);
router.get('/guestrequest',managerController.guestRequest);
router.get('/acceptrequest/:id',managerController.accept_req);
router.get('/rejectrequest/:id',managerController.reject_req);
// router.post('/acceptrequest/:id',managerController.accept_req);
module.exports=router;