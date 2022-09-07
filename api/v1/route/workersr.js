const router=require('express').Router();
const {saveworkers,login,getworkbyid,deleteworker,getallworkers,updateadrressbyid,updateworker}=require('../controller/workersc');
router.post("/saveworkers",saveworkers);
router.post("/login",login);
router.get("/all",getallworkers);
router.get("/wbid/:id",getworkbyid);
router.get("/del/:id",deleteworker);
router.post("/upad",updateadrressbyid);
router.post("/upwork",updateworker);


module.exports=router;