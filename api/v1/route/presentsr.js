const router=require('express').Router();
const {voting,insertpresent,getallpres,getpresbyid,deletepresent,leadergift,getdateexpired,updatepresent,WinnerGift,updatevote}=require('../controller/presentsc');
router.post("/ins",insertpresent);
router.get("/vot/:pid/:wid",voting);
router.get("/get",getallpres);
router.get("/get/:id",getpresbyid);
router.get("/del/:pid",deletepresent);
router.get("/lead",leadergift);
router.post("/upgif",updatepresent);
router.get("/winn",WinnerGift);
router.post("/resetvote",updatevote);
router.get("/fulldate",getdateexpired);



module.exports=router;