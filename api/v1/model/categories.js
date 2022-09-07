const mongoose=require('mongoose');
mongoose.pluralize(null);
const categoriesschema=mongoose.Schema(
    {
        _id:mongoose.Schema.Types.ObjectId,
        name:String,
        decs:String,
        cid:Number
    }
);
module.exports=mongoose.model("categories",categoriesschema);