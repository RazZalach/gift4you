const mongoose=require('mongoose');
mongoose.pluralize(null);
const managersschema=mongoose.Schema(
    {
        _id:mongoose.Schema.Types.ObjectId,
        mid:Number,
        fullname:String,
        phone:String,
        email:String,
        password:String,
        role:String,
        tmppass:String
        

    }
);
module.exports=mongoose.model("managers",managersschema);