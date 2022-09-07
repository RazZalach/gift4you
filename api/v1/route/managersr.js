const router=require('express').Router();
const {register,login,getall,recoverpass,resetpass,deletemanager}=require('../controller/managersc');
router.post("/reg",register);
router.post("/log",login);
router.post("/rec",recoverpass);
router.post("/res",resetpass);
router.get("/all",getall);
router.get("/del/:id",deletemanager);


module.exports=router;