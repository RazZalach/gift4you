const router=require('express').Router();
const {insertcat,getgiftsbycid,getallcat,deletecat}=require('../controller/categoriesc');
router.post("/ins",insertcat);
router.get("/gbcid/:id",getgiftsbycid);
router.get("/catpgage",getallcat);
router.get("/del/:cid",deletecat);
module.exports=router;