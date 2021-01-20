const router=require('express').Router();
const guestcontroller=require('../controler/guest.controler');

router.get('/ip',guestcontroller.getIp);
router.post('/register',guestcontroller.register);
router.get('/registerd',guestcontroller.registerD);
router.post('/roomdata',guestcontroller.roomData);

module.exports=router;